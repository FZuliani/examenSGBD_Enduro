<?php
include 'dbconnection.php';

$statement = $pdo->prepare("Insert into dossards (id_ticket, number, color_number, background_color, attribution_date, return_date, created_at, updated_at) 
                                values (:id_ticket, :number, :color_number, :background_color, NOW(), null, NOW(), NOW());");
$statement->bindParam(':id_ticket', $_POST['id_ticket']);
$statement->bindParam(':number', $_POST['number']);
$statement->bindParam(':color_number', $_POST['color_number']);
$statement->bindParam(':background_color', $_POST['background_color']);
$statement->execute();
echo json_encode(['message' => 'success']);