


<?php
/**
 * Created by PhpStorm.
 * User: ngleungtsan
 * Date: 7/15/16
 * Time: 2:20 PM
 */
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Login Page</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="js/loginPage.js"></script>
    <link rel="stylesheet" href="css/loginPage.css">
</head>
<body>
    <div class="main">
        <h1>Press to Login in</h1>
        <button class="open"><h1>User Login</h1></button>
    </div>


    <div class="popUp">
    </div>
    
    <div class="popUp-inner">
        <form>
            <fieldset>
                <legend>Login</legend>
                <div>Name: <input type="text" required></div>
                <div>Password: <input type="text" required></div>
                <br>
                <div> <input type="submit"></div>
            </fieldset>

        </form>
    </div>
</body>

</html>
