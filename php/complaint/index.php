<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="post"> 
    <label  >complaint </label><input type="text" name="complaint">
    <br>
    <button type="submit">Submit</button>
    </form>

    <?php 
    
    include "db.php";

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $com = $_POST['complaint'];

        session_start();
         
        
        if(isset($_SESSION['email'])){
            
            $stu = $_SESSION['email'];
            $q = "insert into complaint values('$com' , '$stu');";
            $result = $conn->query($q);
    
        }else{
            
            echo "Login!!!!!!!!!!!!!";
        }
        session_unset();
        session_destroy();
        header("Location: login.php");
    }

    ?>
</body>
</html>