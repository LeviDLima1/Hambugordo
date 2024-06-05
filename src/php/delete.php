<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];

    $sql = "DELETE FROM usuarios WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo "Registro excluído com sucesso!";
    } 
    else {
        echo "Erro ao excluir registro: " . $conn->error;
    }
}
?>
