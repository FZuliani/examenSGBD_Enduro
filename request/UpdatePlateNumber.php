<?php
include 'dbconnection.php';

$statement = $pdo->prepare("UPDATE vehicles SET plate_number = :plate_number WHERE id = :vehicles_id;");
$statement->bindParam(':plate_number', $_POST['plate_number']);
$statement->bindParam(':vehicles_id', $_POST['id']);
$statement->execute();
echo json_encode(['message' => 'success']);