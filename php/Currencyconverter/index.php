<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="post">
        <Label>Enter amount in USD : </Label><input type="number" required name="usd">
        <br>
        <button type="submit" name="btn">Convert</button>

        <div>Amount in INR :  

        <?php 
        
        if(isset($_POST["btn"])){

            $usd = $_POST["usd"];
   
            $ans = $usd * 84.40;
   
            echo "<b> " . $ans . "</b>";
        }
 
        ?>

        </div>
    </form>
</body>
</html>