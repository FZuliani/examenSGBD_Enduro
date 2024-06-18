<?php

include '../request/dbconnection.php';

$statement = $pdo->prepare('SELECT * FROM participants;');
$statement->execute();
$participants = $statement->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($participants);