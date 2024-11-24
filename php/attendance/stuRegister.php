<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="stuRegister.php" method="post">
        <label >Student name : </label><input type="text" name="name" id="name">
        <br>
        <label >Roll No. : </label><input type="number" name="roll" id="roll">
        <br>
        <button type="submit">Submit</button>
    </form>
</body>
</html>

<?php 

include "db.php";

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = $_POST['name'];
    $roll = $_POST['roll'];
    echo $name . ''. $roll .'';
    $q = "insert into stuatt values('$name' , '$roll');";

    $result = $conn->query($q);
    header("Location: stuRegister.php");
}

?>