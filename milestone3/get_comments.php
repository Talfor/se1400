<?php
            // Fetch and display comments from the database
            $conn = new mysqli("localhost", "your_db_user", "your_db_password", "your_db_name");
            
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            $sql = "SELECT username, comment_text, created_at FROM comments ORDER BY created_at DESC";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    echo "<div class='comment-box'>";
                    echo "<h4>" . htmlspecialchars($row['username']) . " <span>on " . $row['created_at'] . "</span></h4>";
                    echo "<p>" . nl2br(htmlspecialchars($row['comment_text'])) . "</p>";
                    echo "</div>";
                }
            } else {
                echo "<p>No comments yet. Be the first!</p>";
            }
            $conn->close();
            ?>