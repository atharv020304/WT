<?php 

$servername = 'localhost';
$username ='root';
$password = 'atharv123';
$db = 'itachi';

// $conn = mysqli_connect($servername , $username , $password , $db);
$conn = mysqli_connect('localhost', 'root', 'atharv123', 'lab', 3306);


if(!$conn){
    die("Error : Databse");
}

?>