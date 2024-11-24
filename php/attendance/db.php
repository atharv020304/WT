<?php 

$servername ='localhost';
$username = 'root';
$password = 'root1234';
$db ='lab';

$conn = mysqli_connect($servername, $username,$password,$db);
if(!$conn){
    die("Error: database");
}


?>