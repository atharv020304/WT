<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="post">
        <label>String : </label><input type="text" name="str">
        <button type="submit">Convert</button>
    </form>
</body>

<?php 

if($_SERVER['REQUEST_METHOD'] == "POST"){
    $str = $_POST["str"];
    $upper = '';
    foreach(str_split($str) as $char){
        if(ord($char) >= 97 && ord($char )<=122){
            $upper .= chr(ord($char)-32);
        }else{
            $upper .= $char;
        }
    }

    echo "<br>Upper : " . $upper ."\n";
    $lower = '';
    foreach(str_split($str) as $char){
        if(ord($char) >= 65 && ord($char )<=90){
            $lower .= chr(ord($char)+32);
        }else{
            $lower .= $char;
        }
    }
    echo "<br>Lower : " . $lower ."\n";

    $firstC = '';
    $c = $str[0];
    if (ord($c) >= 97 && ord($c) <= 122) {
        $firstC .= chr(ord($c)-32);
    }else{
        $firstC .= $c;
    }
    $firstC .= substr($str,1);

    echo "<br>First char Upper : " . $firstC ."\n";

    $wu = '';
    $flag = true;

    foreach(str_split($str) as $char){
        if($char == ' '){
            $wu .= $char;
            $flag = true;
        }else{
            if($flag){
                if(ord($char)>= 97 && ord($char)<= 122){
                    $wu .= chr(ord($char) - 32);
                }else{
                    $wu .= $char;
                }
                $flag = false;
            }else{
                $wu .= $char;
            }
        }
    }

    echo "<br>Ans : " .$wu;
}


?>

</html>