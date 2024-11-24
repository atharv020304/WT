<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div class="container">
        <div class="header">
            <h2>Mark Attendance</h2>
        </div>
        <form method="POST" action="att.php">
            <?php
            include "db.php";
            // Fetch student data
            $result = $conn->query("SELECT * FROM stuatt");
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo "
                        <div class='form-check mb-3'>
                            <input class='form-check-input' type='checkbox' name='attendance[{$row['roll']}]' value='present' id='student{$row['roll']}'>
                            <input class='form-check-input' type='checkbox' name='attendance[{$row['roll']}]' value='absent' id='student{$row['roll']}'>
                            <label class='form-check-label' for='student{$row['roll']}'>
                                Roll No: {$row['roll']} - Name: {$row['name']}
                            </label>
                        </div>
                    ";
                }
            } else {
                echo "<p>No students available to mark attendance.</p>";
            }
            ?>
            <button type="submit" class="btn btn-primary w-100">Submit Attendance</button>
        </form>
    </div>
</body>

<?php 

include "db.php";

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $att = $_POST["attendance"] ?? [];

    foreach( $att as $key => $value ){
        $date = date("Y-m-d");
       
        if($value == "present"){
            $q = "INSERT INTO att (roll, date, status) VALUES ('$key', '$date', '$value')";
        }else{
            $q = "INSERT INTO att (roll, date, status) VALUES ('$key', '$date', 'absent')";
        }


        $conn->query($q);

    }
    echo "Attendance marked successfully!";
    header("Location: att.php");
}

?>
</html>