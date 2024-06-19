<?php
include 'dbconnection.php';

$statement = $pdo->prepare("SELECT * FROM tickets 
                            inner join 	participants_tickets on tickets.id = participants_tickets.tickets_id 
                            inner join participants on participants_tickets.participants_id = participants.id
                            inner join vehicles on tickets.vehicles_id = vehicles.id
                            WHERE tickets.id not in (select id_ticket from dossards);");

$statement->execute();

$participants = $statement->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($participants);
echo $json;