<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method = "post" >
    Username:
    <input type="text" name = "username">
    Passowrd:
    <input type="password" name="user-pass" id="user-pass-id">

    <button type  = "submit" name = "submitbtn">login</button>

    </form>
</body>
</html>


<?php

if(isset($_POST['submitbtn'])){
$username = $_POST['username'];
$password = $_POST['user-pass'];

$servername = "localhost";
$user = "root";
$pass = "Sucasa@2021";

$conn = mysqli_connect($servername, $user, $pass);

if(!$conn){
    echo " error";
}
echo "connection established";

$sql_query = "SELECT password from php.login where username = '$username';";

$result = $conn->query($sql_query);
$row = $result->fetch_assoc();
$password_retrived = $row['password'];
echo $password_retrived;

if($password === $password_retrived){
    echo "Login success";

    session_start();
        $_SESSION['username'] = $username;
        
    header ("Location: submitgrieve.php");
}
else if($password !== $password_retrived){
    echo "wrong password";

}

mysqli_close($conn);
}
?>