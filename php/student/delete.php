<?php 

include "db.php";

if (isset($_GET['id'])) {
   $roll = $_GET['id'];
   $q  = "delete from stu where roll = $roll";

   $conn->query($q);    

   header("Location: index.php");
}

?>