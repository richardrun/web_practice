

<?php
/**
 * Created by PhpStorm.
 * User: ngleungtsan
 * Date: 7/5/16
 * Time: 9:09 AM
 */

echo "123213";
echo "test git branch";


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


echo $success?"success":"fail";

$sql = "SELECT id FROM staff WHERE id= 1 or 2 ";
$addColumn = "ALTER TABLE staff ADD Password INT ";

$result = $link->query($sql);

$row = $result->fetch_row();
printf("<br/>age=".$row[0]."<br/>");

echo "<br> row?: ". ($result->num_rows >0? "yes": "no" );



$link->close();

echo "FINISH";

//echo file_get_contents( "main_page.html" );
?>
