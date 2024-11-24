<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .main{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
        }

        button{
            padding: 10px;
            font-size: 20px;
            background: none;
        }

        a{
            text-decoration: none;
            color: black;
        }
    </style>
</head>
<body>
<br>
  
  <button><a href="index.php">Add Employee</a></button>
  <br>
   <div class="main">
   <table border="1"  cellpadding="5">
        <thead >
            <tr>
                <th>Emp ID</th>
                <th>Emp Name</th>
            </tr>
        </thead>
        <tbody>
        <?php 

$servername = "localhost";
$username = "root";
$password= "root1234";
$db = "emp";


$conn  = mysqli_connect($servername , $username , $password , $db);

if(!$conn){
    echo"error";
}

function data(){
    global $conn;

    $q = "Select * from emp_table";
    $result = $conn->query($q);

    if($result->num_rows > 0){
        while($row = $result->fetch_assoc()){
            echo "<tr>
               <td>" .$row['id'] . "</td>
               <td>" .$row['emp_name'] . "</td>
            </tr>";
        }
    }
}

data();

?>
        </tbody>
    </table>
   </div>

    
</body>


</html>