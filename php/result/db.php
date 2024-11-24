<?php 

$servername = 'localhost';
$username = 'root';
$password = 'root1234';
$db = 'lab';

$conn = mysqli_connect((string) $servername, $username, $password, $db);

if(!$conn){
    die("Error : DB");
}

?>


<!-- create table marks (name varchar(20) , s1m1 float(10), s1m2 float(10), s2m1 float(10), s2m2 float(10), s3m1 float(10), s3m2 float(10), s4m1 float(10), s4m2 float(10), result float(10)); -->
