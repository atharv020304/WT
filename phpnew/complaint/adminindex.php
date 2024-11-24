<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<h1?> Admin </h1>

<table border="1" cellpadding="10>
    <thead>
        <tr>
            <th> Complaint </th>
            <th> Student Name</th>
        </tr>
    </thead>

    <tbody?>
        <?php 

         include 'db.php';
         $sql = "SELECT * FROM complaint";
         $result = $conn->query($sql);
         while($row = $result->fetch_assoc() ){
            echo "<tr>
            <td>".$row['complaint']."</td>
            <td>{$row['student']}</td>
            </tr>";
         }

         ?>

    </tbody>
</table>
</body>
</html>