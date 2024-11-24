<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="post">
        <label>Enter Units : </label><input type="number" name="units" id="units">
        <br>
        <button type="submit">Bill</button>
    </form>

    <h1>Bill Amount is : 
        <?php 
        
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $units = (float)$_POST['units'];
            $bill = 0.0;

            if ($units <= 50) {
                $bill = $units * 3.5;
            }else if($units> 50 && $units <= 150){
                $bill = 50 * 3.5 + (($units - 50) * 4.0);
            }else if($units > 150 && $units <= 250){
                $bill = 50 * 3.5 + 100 * 4.0 + ($units - 150) * 5.2;
            }else if($units > 250){
                $bill = 50 * 3.5 + 100 * 4.0 + 100 *5.2 +  ($units - 250) * 6.5;
            }

            echo $bill;
        }

        ?>
    </h1>
</body>
</html>