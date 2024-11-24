<?php
// session.php

session_start();  // Start the session

// Check if the user is logged in
if (isset($_SESSION['user_id'])) {
    echo "Welcome, " . $_SESSION['username'] . "! You are logged in.";
} else {
    echo "Please log in first.";
}

// Logout functionality
if (isset($_GET['logout'])) {
    session_unset();
    session_destroy();
    echo "You have been logged out.";
}
?>
