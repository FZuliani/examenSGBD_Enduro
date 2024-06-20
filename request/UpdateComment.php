<?php

include 'dbconnection.php';

$statement = $pdo->prepare("UPDATE comments SET content = :content WHERE id = :id;");
$statement->bindParam(':content', $_POST['content']);
$statement->bindParam(':id', $_POST['id']);
$statement->execute();
