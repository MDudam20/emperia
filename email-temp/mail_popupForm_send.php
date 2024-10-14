<?php
require 'vendor/autoload.php'; // Autoload Composer's dependencies

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load environment variables
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

if (isset($_POST['email']) && isset($_POST['name']) && isset($_POST['phone'])) {
    $email = $_POST['email'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host = $_ENV['MAIL_HOST'];
        $mail->SMTPAuth = true;
        $mail->Username = $_ENV['MAIL_USERNAME'];
        $mail->Password = $_ENV['MAIL_PASSWORD'];
        $mail->SMTPSecure = $_ENV['MAIL_ENCRYPTION'];
        $mail->Port = $_ENV['MAIL_PORT'];

        //Recipients
        $mail->setFrom($_ENV['MAIL_FROM_ADDRESS'], $_ENV['MAIL_FROM_NAME']);
        $mail->addAddress($_ENV['MAIL_FROM_ADDRESS']); // Add a recipient email address
        $mail->addAddress("sales@emperia.co.in");

        // Content
        $mail->isHTML(true);
        $mail->Subject = "Connect with us";
        $mail->Body = "<br><br>Name: " . $name . "<br>Email: " . $email . "<br>Phone: " . $phone;
        $mail->send();
        echo 'Mail has been sent successfully!';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo 'Please fill in all details';
}
