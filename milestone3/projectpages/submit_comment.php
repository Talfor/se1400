<?php
$conn = new mysqli("localhost", "your_db_user", "your_db_password", "your_db_name");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = trim($_POST['username'] ?? '');
    $comment_text = trim($_POST['comment_text'] ?? '');

    if ($username === '' || $comment_text === '') {
        die("Name and comment are required.");
    }

    $stmt = $conn->prepare("INSERT INTO comments (username, comment_text, created_at) VALUES (?, ?, NOW())");
    $stmt->bind_param("ss", $username, $comment_text);

    if ($stmt->execute()) {
        header("Location: your_page.php"); // redirect back to the comments page
        exit;
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>