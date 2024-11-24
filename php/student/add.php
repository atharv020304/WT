<?php 

include 'db.php';

if($_SERVER['REQUEST_METHOD'] == "POST"){
    $roll = $_POST['roll'];
    $name = $_POST['name'];

    $q = "insert into stu values('$roll' , '$name');";

    $result = $conn->query($q);
    header("Location: index.php");
}

?>