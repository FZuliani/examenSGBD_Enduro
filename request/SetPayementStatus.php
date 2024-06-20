<?php
include 'dbconnection.php';

$statement = $pdo->prepare("UPDATE tickets SET payment_status = :payment_status WHERE id = :id;");
$statement->bindParam(':payment_status', $_POST['payment_status']);
$statement->bindParam(':id', $_POST['id']);
$statement->execute();
echo json_encode(['message' => 'success']);

