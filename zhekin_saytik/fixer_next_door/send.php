<?php 
$to = '';
$name = $_POST['name'];
$tel  = $_POST['tel'];
$comment  = $_POST['comment'];

$subject = 'Заявка на обратный звонок с сайта "Мастер по соседству"'; 

$message = "Автор назвался: ".htmlspecialchars($name)."\n 
			Указал свой телефон: ".htmlspecialchars($tel)."\n 
	 		Краткое описание проблемы: ".htmlspecialchars($comment); 

$headers  = "Content-type: text/html; charset=UTF-8\r\n"; 

$headers .= "From: fixernextdoor\r\n"; 

mail($to, $subject, $message, $headers); 
header('Location: index.html');
exit();
?>