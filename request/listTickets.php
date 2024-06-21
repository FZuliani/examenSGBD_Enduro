<?php
include 'dbconnection.php';

$statement = $pdo->prepare("SELECT * FROM tickets 
                            inner join 	participants_tickets on tickets.id = participants_tickets.tickets_id 
                            inner join participants on participants_tickets.participants_id = participants.id
                            inner join vehicles on tickets.vehicles_id = vehicles.id
                            WHERE tickets.id not in (select id_ticket from dossards) 
                            ;");

//to filter by date event (removed for test)
//AND tickets.ticket_types_id IN (
//                                SELECT ticket_types.id from ticket_types WHERE ticket_types.event_id IN (
//                                    select events.id from events where YEAR(events.start_date) = YEAR(NOW()) AND EXTRACT(MONTH FROM events.start_date) = EXTRACT(MONTH FROM NOW()) AND EXTRACT(DAY FROM events.start_date) = EXTRACT(DAY FROM NOW())
//                                )

$statement->execute();

$participants = $statement->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($participants);
echo $json;