<?php
// logout.php

session_start();
session_unset();
session_destroy();
setcookie('username', '', time() - 3600, '/');  // Remove the remember me cookie

echo "You have been logged out.";
?>
