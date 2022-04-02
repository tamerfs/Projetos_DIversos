<?php

header(‘Content-Type: text/html; charset=utf-8’);
echo “Dados recebidos do formulário!!!<br/><br/>”;
echo “Você digitou:<br/>”;
echo “Nome: “ .$_POST[“nome”].”<br />”;
echo “Sexo: “ .$_POST[“sexo”].”<br />”;
echo “E-mail: “ .$_POST[“email”].”<br />”;
echo “Assunto: “.$_POST[“assunto”].”<br />”;
echo “Curso: “ .$_POST[“curso”].”<br />”;
echo “Mensagem: “.$_POST[“mensagem”].”<br />”;
?>
