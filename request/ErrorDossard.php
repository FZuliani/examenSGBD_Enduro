<?php
include 'dbconnection.php';

$statement = $pdo->prepare("DELETE FROM dossards WHERE id = :id;");
$statement->bindParam(':id', $_POST['id']);
$statement->execute();
echo json_encode(['message' => 'success']);
