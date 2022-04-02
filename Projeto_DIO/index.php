<?php
    session_Start();
?>
<!DOCTYPE html>
<html>
<head>

        <meta charset="UTF-8">
        <title>FORMULARIO DE INSCRIÇÃO</title>
        <meta name="author" content="">
        <meta name="description" content="">
        <meta name="viewport" content="width-device-widht, initial-scale=1"> 
</head>

<body>

<p> FORMULARIO PARA INSCRIÇÂO DE COMPETIDORES</p>

<form action="script.php" method="POST">

<?php
    $mensagemDeErro = isset($_SESSION['mensagem-de-erro']) ? $_SESSION['mensagem-de-erro'] : "";
    if (!empty($mensagemDeErro))
    {echo $mensagemDeErro;}

    $mensagemDeSucesso = isset($_SESSION['mensagem-de-sucesso']) ? $_SESSION['mensagem-de-sucesso'] : "";
    if (!empty($mensagemDeSucesso))
    {echo $mensagemDeSucesso;}
?>
    <p>Seu nome: <input type="text" name="nome"/> </p>
    <p>Sua idade: <input type="text" name="idade"/> </p>
    <p><input type="submit" value="Enviar"/> </p>

</form>
</body>

</html>