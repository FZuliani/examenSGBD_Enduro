<?php

$host = 'localhost:3308';
$dbname = 'enduroapp';
$user = 'root';
$password = '';
$options = [
  PDO::ATTR_EMULATE_PREPARES => false,
  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
];

try {
  $pdo = new PDO(
    "mysql:host=$host; dbname=$dbname; charset=utf8",
    $user,
    $password,
    $options
  );
} catch (PDOException $e) {
  die("Connection failed: " . $e->getMessage());
}
