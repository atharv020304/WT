<?php 

$servername = 'localhost';
$username ='root';
$password = "";
$db = 'complaints';

$conn = mysqli_connect($servername , $username , $password , $db);

if(!$conn){
    die("Error : Databse");
}

?>