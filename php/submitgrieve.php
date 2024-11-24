<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<form action="submitgrieve.php" method = "post">
<textarea name="submit-grv" id="submit-grv-id" placeholder = "Type your grieve here " >

    </textarea>

    <button type = "Submit" name = "submit-grv-btn" id = "submit-grv-btn-id">Submit ypur grivence</button>


</form>
    


</body>
</html>

<?php

session_start();


if(isset($_SESSION['username'])){
    $username = $_SESSION['username'];
echo $username;
}
$servername = "localhost";
$user = "root";
$pass = "Sucasa@2021";

$conn = mysqli_connect($servername, $user, $pass);

if(!$conn){
    echo " error";
}
echo "connection established";

if(isset($_POST['submit-grv-btn'])){

$grvv = $_POST['submit-grv'];


$sql_query = "UPDATE php.login SET complaint = '$grvv' WHERE username = '$username' ";

$result = $conn->query($sql_query);

echo "<br><br>added grievene";
}


?>