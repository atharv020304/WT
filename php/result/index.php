<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="post">
        <label>Student Name : </label><input type="text" name="name" required>
        <br>
        <div>
            <label>MSE : </label><input type="number" name="s1m1" id="s1m1">
            <label>ESE : </label><input type="number" name="s1m2" id="s1m2">
        </div>
        <div>
            <label>MSE : </label><input type="number" name="s2m1" id="s2m1">
            <label>ESE : </label><input type="number" name="s2m2" id="s2m2">
        </div>
        <div>
            <label>MSE : </label><input type="number" name="s3m1" id="s3m1">
            <label>ESE : </label><input type="number" name="s3m2" id="s3m2">
        </div>
        <div>
            <label>MSE : </label><input type="number" name="s4m1" id="s4m1">
            <label>ESE : </label><input type="number" name="s4m2" id="s4m2">
        </div>
        <br>

        <button type="submit">Calculate result</button>
    </form>

    <br>
    <br>
    <h1>Result :
        <?php 
        include "db.php";
        if ($_SERVER['REQUEST_METHOD'] == "POST") {
            $name = $_POST['name'];
            $s1m1 = (float)$_POST['s1m1'];
            $s1m2 = (float)$_POST['s1m2'];
            $s2m1 = (float)$_POST['s2m1'];
            $s2m2 = (float)$_POST['s2m2'];
            $s3m1 = (float)$_POST['s3m1'];
            $s3m2 = (float)$_POST['s3m2'];
            $s4m1 = (float)$_POST['s4m1'];
            $s4m2 = (float)$_POST['s4m2'];

            $ans = ($s1m1 * 0.3) + ($s1m2 * 0.7) + ($s2m1 * 0.3) + ($s2m2 * 0.7) + ($s3m1 * 0.3) + ($s3m2 * 0.7) + ($s4m1 * 0.3) + ($s4m2 * 0.7) ;
            $ans =( $ans / 4);
            $ans = $ans / 10;

            $q = "insert into marks values('$name' , '$s1m1' , '$s1m2','$s2m1' , '$s2m2','$s3m1' , '$s3m2','$s4m1' , '$s4m2' , '$ans')";
            $conn->query( $q );
            echo "<span>{$ans}</span>";
            
            header("Location: marksTable.php");

        }   

        ?>
    </h1>
</body>
</html>