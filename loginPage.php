


<?php
/**
 * Created by PhpStorm.
 * User: ngleungtsan
 * Date: 7/15/16
 * Time: 2:20 PM
 */
?>

<?php
require_once 'phpFunction/loginFunction.php';
$login = false;
$userID = $_POST["name"];
$userPassword = $_POST["password"];
?>

<?php
if(pageReturn($userID))
{
    $login = true;
}
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


    
    <div class="main" id="123">
        <h1>Press to Login in</h1>
        <button class="open"><h1>User Login</h1></button>
        <br>
        <h1>Name: <?php echo $_POST["name"]; ?> </h1>
        <h1>Password: <?php echo $_POST["password"]; ?> </h1>
    </div>




    <div class="popUp">
    </div>
    
    <div class="popUp-inner">
        <form action="" method="post" target="_self">
            <fieldset>
                <legend>Login</legend>
                <div>Name: <input type="text" name="name" value="Bob" required></div>
                <div>Password: <input type="text" name="password" value="1234" required></div>
                <br>
                <div> <input type="submit" name="submit" ></div>
            </fieldset>
        </form>
    </div>

    <?php
    if($login == true)
    {
        echo "<script> clearFrontPage();</script>";
        echo file_get_contents("MovingPic.html");
    }
    ?>

    <div class="hide">
    </div>
</body>
</html>

<?php
$login = false;
?>
