<?php
require_once 'vendor/autoload.php';


if(isset($_POST) && isset($_GET["topic"])){
    /*DEV PURPOSE ONLY*/ // $transport = new Swift_SmtpTransport('localhost', 1025);
    $transport = new Swift_SendmailTransport('/usr/sbin/sendmail -bs'); 
    $mailer = new Swift_Mailer($transport);

    $message = (new Swift_Message('New message from Westbay website'))
                ->setFrom([$_POST["email"] => $_POST["name"]]);
                            

    switch($_GET["topic"]){
        case 'golf':
            $message->setTo(['golf@westbaygolfclubvillas.com']);
        break;
        case 'rental':
            $message->setTo(['info@westbaygolfclubvillas.com']);
        break;  
        case 'sales':
            $message->setTo(['gerencia@westbaygolfclubvillas.com']);
        break;
        default:
            die("Error");
    }

    $text = "Hello, \r\n Here's the request received from your website.\r\n";

    foreach($_POST as $k => $v){
        $text .= $k . ": " . $v . "\r\n";
    }
    $message->setBody($text);     
    
    $result = $mailer->send($message);

    header('Location: ' . $_SERVER['HTTP_REFERER']);
}else{
    die("Error.");
}