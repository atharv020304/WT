<?php
// login.php

session_start();  // Start the session

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Database connection
    $servername = "localhost";
    $dbusername = "root";
    $dbpassword = "atharv123";
    $dbname = "itachi";
    $port = 3307;  // Add semicolon here to fix the error

    // Create connection
    $conn = new mysqli($servername, $dbusername, $dbpassword, $dbname, $port);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Fetch user data from the database
    $sql = "SELECT id, username, password FROM users WHERE username = '$username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Fetch the user data
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {  // Verify hashed password
            $_SESSION['user_id'] = $row['id'];  // Store user ID in session
            $_SESSION['username'] = $row['username'];  // Store username in session

            // Optionally, set a cookie for "Remember Me"
            if (isset($_POST['remember'])) {
                setcookie('username', $username, time() + (86400 * 30), "/");  // Cookie for 30 days
            }

            echo "Login successful! Welcome, " . $_SESSION['username'];
        } else {
            echo "Invalid username or password.";
        }
    } else {
        echo "No user found with that username.";
    }

    $conn->close();
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>
    <h2>Login</h2>
    <form action="login.php" method="POST">
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username" required><br><br>

        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password" required><br><br>

        <label for="remember">Remember Me:</label>
        <input type="checkbox" id="remember" name="remember"><br><br>

        <button type="submit">Login</button>
    </form>
</body>
</html>
