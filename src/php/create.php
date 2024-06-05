<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];

    $sql = "INSERT INTO usuarios (nome, email) VALUES ('$nome', '$email')";

    if ($conn->query($sql) === TRUE) {
        echo "Novo registro criado com sucesso!";
    } 
    else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
    }
}
?>
