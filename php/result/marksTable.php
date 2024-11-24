<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table border="1" cellpadding="5">
        <thead>
            <tr>
                <th>Name</th>
                <th>s1 MSE</th>
                <th>s1 ESE</th>
                <th>s2 MSE</th>
                <th>s2 ESE</th>
                <th>s3 MSE</th>
                <th>s3 ESE</th>
                <th>s4 MSE</th>
                <th>s4 ESE</th>
                <th>Result</th>
            </tr>
        </thead>

        <tbody>
            <?php 
            
            include "db.php";

            $q = "select * from marks";
            $result = $conn->query( $q );

            while( $row = $result->fetch_assoc() ) {
                echo "<tr>
                <td>{$row['name']}</td>
                <td>{$row['s1m1']}</td>
                <td>{$row['s1m2']}</td>
                <td>{$row['s2m1']}</td>
                <td>{$row['s2m2']}</td>
                <td>{$row['s3m1']}</td>
                <td>{$row['s3m2']}</td>
                <td>{$row['s4m1']}</td>
                <td>{$row['s4m2']}</td>
                <td>{$row['result']}</td>
                </tr>";
            }
            
            ?>
        </tbody>
    </table>
</body>
</html>