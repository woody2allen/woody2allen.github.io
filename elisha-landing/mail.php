<?php

$name = trim($_POST['name']);
$email = trim($_POST['email']);
$born = trim($_POST['born']);
$phone = trim($_POST['phone']);
$country = trim($_POST['country']);
$title = trim($_POST['title']);
$text = trim($_POST['text']);

//Если ошибок нет, отправить email

$mail_header = "MIME-Version: 1.0\r\n";
$mail_header.= "Content-type: text/html; charset=UTF-8\r\n";
$mail_header .= "From: Elisha Landing <info@elisha.ru>";

$recipient= 'info@elisha.ru';
//$recipient= 'phemistokl@gmail.com';
$subject = 'Сообщение с сайта landing';
$message = '<b>Имя</b>: '.$name.'<br>';
$message.= '<b>Email</b>: '.$email.'<br>';
$message.= '<b>Дата рождения</b>: '.$born.'<br>';
$message.= '<b>Телефон</b>: '.$phone.'<br>';
$message.= '<b>Страна</b>: '.$country.'<br>';
$message.= '<b>Тема</b>: '.$title.'<br>';
$message.= '<b>Сообщение</b>: '.$text.'<br>';


if (mail($recipient, $subject, $message, $mail_header))
echo 'Письмо отправлено';
else echo 'Письмо не отправлено';

?>
