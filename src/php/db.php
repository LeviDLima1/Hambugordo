<?php
$servername = "localhost";
$username = "seu_usuario";
$password = "sua_senha";
$dbname = "crud_example";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}
?>
