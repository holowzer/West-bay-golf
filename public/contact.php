<?php
require_once 'vendor/autoload.php';


if(isset($_POST) && isset($_GET["topic"])){
    $transport = new Swift_SmtpTransport('localhost', 1025);
    // $transport = new Swift_SendmailTransport('/usr/sbin/sendmail -bs'); 
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

    // $message->setTo("satwa.fr@gmail.com");

    $text = "Hello, \r\n Here's the request received from your website.\r\n";

    foreach($_POST as $k => $v){
        $text .= $k . ": " . $v . "\r\n";
    }
    $message->setBody($text);     
    
    $result = $mailer->send($message);

    // print($result);

    // echo `<script>window.location = ` . $_SERVER['HTTP_REFERER'] . `</script>`;

    header('Location: ' . $_SERVER['HTTP_REFERER']);
}else{
    die("Error.");
}



// Create the Transport
// $transport = (new Swift_SmtpTransport('smtp.example.org', 25))
//   ->setUsername('your username')
//   ->setPassword('your password')
// ;

// Create the Mailer using your created Transport
$mailer = new Swift_Mailer($transport);

// Create a message
$message = (new Swift_Message('Wonderful Subject'))
  ->setFrom(['john@doe.com' => 'John Doe'])
  ->setTo(['receiver@domain.org', 'other@domain.org' => 'A name'])
  ->setBody('Here is the message itself')
  ;

// Send the message
$result = $mailer->send($message);