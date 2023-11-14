<?php
require "koneksi.php";
session_start();
$username = $_POST['user'];
$email = $_POST['email'];
$password = $_POST['password'];

$query ="INSERT INTO registrasi (username, email, password) VALUES ('$username', '$email', '$password')";

if (mysqli_query($conn, $query)) {
    header("location:Halaman2.html");
} else {
    echo "Registrasion Failed : " . mysqli_error($conn);
}
?>