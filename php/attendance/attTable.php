<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table border="1" cellPadding="5">
        <thead>
            <tr>
                <th>Date</th>
                <th>Present roll numbers</th>
            </tr>
        </thead>
        <tbody>
            <?php
            
            include "db.php";

            $result = $conn->query("SELECT date, GROUP_CONCAT(roll) AS rolls FROM att WHERE status = 'present' GROUP BY date;");
            while($row = $result->fetch_assoc()){
              echo " <tr>
                <td>{$row['date']}</td>
                <td>{$row['rolls']}</td>
                </tr>";
            }

            ?>
        </tbody>
    </table>
</body>
</html>