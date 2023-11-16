<?php
require 'koneksi.php';
$email1 = htmlspecialchars($_POST["email"]);
$pass = htmlspecialchars($_POST["password"]);
$query_sql = "SELECT * FROM `registrasi` registrasi WHERE email = '$email1' && password = '$pass'";
$result = mysqli_query($conn, $query_sql);
if (mysqli_num_rows($result) > 0) {
    header("location: Halaman14.html");
} else {
    echo die("Connection failed: " . mysqli_connect_error());;
}