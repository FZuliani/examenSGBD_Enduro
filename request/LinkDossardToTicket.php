<?php
include 'dbconnection.php';

$statement = $pdo->prepare("Insert into dossards (id_ticket, id_dossard) values (:id_ticket, :id_dossard);");
$statement->bindParam(':id_ticket', $_POST['id_ticket']);
$statement->bindParam(':id_dossard', $_POST['id_dossard']);
$statement->execute();
echo json_encode(['message' => 'success']);