<?php
/**
 * Created by PhpStorm.
 * User: ngleungtsan
 * Date: 7/18/16
 * Time: 1:45 PM
 */
$user = 'root';
$password = 'root';
$db = 'company';
$host = 'localhost';
$port = 8889;

$link = mysqli_init();
$success = mysqli_real_connect(
    $link,
    $host,
    $user,
    $password,
    $db,
    $port
);


$userID = $_POST["name"];
$userPassword = $_POST["password"];
$testID = "test";
$goodToGo = false;

function pageReturn($name){

    global $link;
    global $userID;
    global $goodToGo;

    //$localID = $GLOBALS['userID'];

    $sql = "SELECT name FROM staff WHERE name ='$userID'";

    $result = $link->query($sql);

    if($result->num_rows >0)
    {
        return true;
    }else return false;
}
//pageReturn();

?>