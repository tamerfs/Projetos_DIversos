<?php

$categorias = ['infantil', 'adolecente','adulto','idoso'];

//echo ('</br></br>');

$nome = $_POST['nome'];
$idade =$_POST['idade'];

// segurança e boas praticas para inserção de dados.
if(empty($nome)){echo "o nome não pode ser vazio";
    return;}
if(empty($idade)){echo "a idade não pode ser vazia";
    return;}
if(strlen($nome) <3){echo "o nome deve ter mais de 3 caracteres";
    return;}
if(strlen($nome) >20){echo "o nome é muito extenso";
    return;}
if(!is_numeric($idade)){echo "Informe um numero para o campo de iade"; return;}

//var_dump($nome);
//var_dump($idade);


switch ($idade){

case ($idade >= 6 && $idade <= 12) :
    echo "O nadador ", $nome, " compete na categoria Infantil";
    break;  
case ($idade >= 13 && $idade <= 18):
    echo "O nadador ", $nome, " compete na categoria Adolecente";
    break;
case ($idade >= 19 && $idade <= 65):
    echo 'O nadador ', $nome, " compete na categoria Adulto";
    break;
default: echo 'O nadador ', $nome, " compete na categoria Idoso";
}


?>