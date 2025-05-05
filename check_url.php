<?php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "phishing_detection";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Database connection failed");
}

if (isset($_POST['url'])) {
    $url = strtolower(str_replace('www.', '', $_POST['url']));
    $stmt = $conn->prepare("SELECT id FROM phishing_urls WHERE url = ?");
    $stmt->bind_param("s", $url);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        echo "⚠️ This is a PHISHING site!";
    } else {
        echo "✅ This site is Safe.";
    }

    $stmt->close();
}

$conn->close();
?>
