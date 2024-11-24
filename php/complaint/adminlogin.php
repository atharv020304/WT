<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login page</title>
</head>
<body>
    <h1>Admin Login</h1>
    <form action="adminlogin.php" method="post">
        <label >Username : </label><input type="text" name="username">
        <br>
        <label >Password : </label><input type="text" name="password">
        <br>
        <button type="submit">Login</button>
    </form>
</body>
<?php 
include "db.php";
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $username = $_POST['username'];
    $password = $_POST['password'];

    $q = "select * from admin where username = '$username';";
    $result = $conn->query($q);
    $data = $result->fetch_assoc();
    if($password === $data["password"]){
        session_start();
        $_SESSION["adminusername"] = $data["username"];
        
        header("Location: adminindex.php");
    }else{
        echo "wrong password or email";
    }
}

?>
</html>