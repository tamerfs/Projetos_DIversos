<?php

session_start();

$categorias = ['infantil', 'adolecente','adulto','idoso'];

//echo ('</br></br>');

$nome = $_POST['nome'];
$idade =$_POST['idade'];

// segurança e boas praticas para inserção de dados.
if(empty($nome)){

    $_SESSION['mensagem-de-erro'] = "o nome não pode ser vazio, favor inserir os dados";
    header('location:index.php');
    return;
}
else if(strlen($nome) <3){
    $_SESSION['mensagem-de-erro'] = "o nome deve conter mais de 3 caracteres, favor inserir os dados";
    header('location:index.php');
    return;
}
else if(strlen($nome) >20){
    $_SESSION['mensagem-de-erro'] = "o nome não pode ter mais de 20 caracteres, favor inserir os dados";
    header('location:index.php');
    return;
}
else if(empty($idade)){
    $_SESSION['mensagem-de-erro'] = "a idade não pode ser vazia, favor inserir os dados";
    header('location:index.php');
    return;
}
else if(!is_numeric($idade)){
    $_SESSION['mensagem-de-erro'] = "insira um numero para a idade";
    header('location:index.php');
    return;
}

//var_dump($nome);
//var_dump($idade);


switch ($idade){

case ($idade >= 6 && $idade <= 12) :
    $_SESSION["mensagem-de-sucesso"] = "O nadador ".$nome. " compete na categoria Infantil";
    header('location:index.php');
    return;  
case ($idade >= 13 && $idade <= 18):
    $_SESSION["mensagem-de-sucesso"] =  "O nadador ".$nome." compete na categoria Adolecente";
    header('location:index.php');
    return; 
case ($idade >= 19 && $idade <= 65):
    $_SESSION["mensagem-de-sucesso"] =  'O nadador '.$nome. " compete na categoria Adulto";
    header('location:index.php');
    return; 
default: 
    $_SESSION["mensagem-de-sucesso"] =  'O nadador '.$nome." compete na categoria Idoso";
    header('location:index.php');
    return; 
}


?>