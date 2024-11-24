<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Employee</title>
  </head>
  <body>
    <form action="index.php" method="post">
      <label>Emp Id : </label>
      <input type="number" name="emp_id" />
      <label>Emp name : </label>
      <input type="text" name="emp_name" />
      <button type="submit" name="btn">Submit</button>
    </form>
  </body>
</html>

<?php 

if (isset($_POST["btn"])) {
    $id = $_POST['emp_id'];
    $name = $_POST['emp_name'];
   

    $servername = "localhost";
    $username = "root";
    $password= "root1234";
    $db = "emp";
 

    $conn = mysqli_connect($servername , $username , $password, $db );

    if(!$conn){
      echo " error";
    }
    echo "connection established";
    $q = "insert into emp_table values ('$id' , '$name');";
    
    $re = $conn->query($q);

    $_POST = [];
    $conn->close();
    header("Location: page.php");
}

?>
