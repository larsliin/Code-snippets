<?php
// database username
$username = "root";
// database password
$password = "root";
// database domain
$hostname = "localhost";
// name on database
$databasename = "test_db";

// connect to database
$sql_conn = mysql_connect($localhost, $username, $password) or die(mysql_error());

// formvars
$name = $_POST['Name'];
$email = $_POST['Email'];
$disclaimer = $_POST['Disclaimer'];

// enter data into database - SQL satament
$query = "INSERT INTO users (name, email, disclaimer) VALUES ('$name','$email','$disclaimer')" or die(mysql_error());
// select current database
mysql_select_db($databasename, $sql_conn) or die(mysql_error());
// execute sql
mysql_query($query,$sql_conn) or die(mysql_error());
// close SQL connection
mysql_close($sql_conn);
?>