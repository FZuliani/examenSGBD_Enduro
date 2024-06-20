<?php
include "dbconnection.php";

$statement = $pdo->prepare("UPDATE dossards SET return_date = NOW() WHERE id = :id;");
$statement->bindParam(':id', $_POST['id']);
$statement->execute();
echo json_encode(['message' => 'success']);
