<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Valider reCAPTCHA
    $recaptcha_secret = "6LeaWhoqAAAAAEh3oAZ8_r0XoZJgPupyuyACMx1h";
    $recaptcha_response = $_POST['g-recaptcha-response'];
    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
    $recaptcha = json_decode($recaptcha);

    if ($recaptcha->success == false) {
        http_response_code(400);
        echo "reCAPTCHA validation failed, please try again.";
        exit;
    }

    // Valider les entrées
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if (empty($name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
        http_response_code(400);
        echo "Merci de remplir tous les champs du formulaire correctement.";
        exit;
    }

    $mail = new PHPMailer(true);
    try {
        // Paramètres du serveur
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'alex.perezap460@gmail.com'; // Remplacez par votre adresse Gmail
        $mail->Password = 'jdbn ndbw mgzm dmwc'; // Remplacez par votre mot de passe Gmail (ou mot de passe d'application)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Destinataires
        $mail->setFrom($email, $name);
        $mail->addAddress('alex.perezab470@gmail.com'); // Remplacez par votre adresse email de réception

        // Contenu
        $mail->isHTML(true);
        $mail->Subject = "Nouveau message de $name";
        $mail->Body    = "Nom: $name<br>Email: $email<br>Message:<br>$message";
        $mail->AltBody = "Nom: $name\nEmail: $email\nMessage:\n$message";

        $mail->send();
        http_response_code(200);
        echo "Merci! Votre message a été envoyé.";
    } catch (Exception $e) {
        http_response_code(500);
        echo "Oops! Quelque chose s'est mal passé et nous n'avons pas pu envoyer votre message. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    http_response_code(403);
    echo "Il y a eu un problème avec votre soumission, veuillez réessayer.";
}
?>