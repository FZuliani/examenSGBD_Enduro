<?php
include 'dbconnection.php';

$statement = $pdo->prepare("UPDATE vehicles SET plate_number = :plate_number WHERE plate_number = :plate_number");