<?php
    require_once 'vendor/autoload.php';
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();

    if(isset($_POST) && isset($_GET["topic"])){
        $transport = null;
        
        if(getenv('PROD') === 'true'){
            $transport = (new Swift_SmtpTransport(
                getenv('SMTP_HOST'), 
                intval(getenv('SMTP_PORT')), 
                'ssl'
                ))
                ->setUsername(getenv('SMTP_USERNAME'))
                ->setPassword(getenv('SMTP_PASSWORD'));
        }else{
            $transport = new Swift_SmtpTransport('localhost', 1025);
        }

        $mailer = new Swift_Mailer($transport);

        $message = (new Swift_Message('New message from Westbay website'))
                    ->setFrom([$_POST["email"] => $_POST["name"]]);
                                

        switch($_GET["topic"]){
            case 'golf':
                $message->setTo([getenv('GOLF_EMAIL')]);
            break;
            case 'rental':
                $message->setTo([getenv('RENTAL_EMAIL')]);
            break;
            case 'sales':
                $message->setTo([getenv('SALES_EMAIL')]);
            break;
            default:
            die("Error");
        }
        $message->setBcc([getenv('PRYNT_COPY')]);

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
