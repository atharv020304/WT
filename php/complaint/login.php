<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login page</title>
</head>
<body>
    <h1>Student Login</h1>
    <form action="login.php" method="post">
        <label >Email : </label><input type="text" name="email">
        <br>
        <label >Password : </label><input type="text" name="password">
        <br>
        <button type="submit">Login</button>
    </form>
</body>
<?php 
include "db.php";
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $email = $_POST['email'];
    $password = $_POST['password'];

    $q = "select * from user where email = '$email';";
    $result = $conn->query($q);
    $data = $result->fetch_assoc();
    if($password === $data["password"]){
        session_start();
        $_SESSION["email"] = $data["email"];
        
        header("Location: index.php");
    }else{
        echo "wrong password or email";
    }
}

?>
</html>