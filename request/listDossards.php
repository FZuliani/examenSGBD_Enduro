<?php
include "dbconnection.php";

$statement = $pdo->prepare("SELECT * FROM dossards 
                INNER JOIN tickets ON dossards.id_ticket = tickets.id
                INNER JOIN participants_tickets ON tickets.id = participants_tickets.tickets_id
                INNER JOIN participants ON participants_tickets.participants_id = participants.id
                WHERE YEAR(attribution_date) = YEAR(NOW()) AND EXTRACT(MONTH FROM attribution_date) AND DAY(attribution_date) = DAY(NOW()) AND return_date IS Null;");
$statement->execute();
echo json_encode($statement->fetchAll());

