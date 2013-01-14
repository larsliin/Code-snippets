<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<?php
// database username
$username = "larsliin";
// database password
$password = "pass";
// database domain
$hostname = "localhost";
// name on database
$databasename = "larsliin_database";

// connect to database
$sql_conn = mysql_connect($localhost, $username, $password) or die(mysql_error());

//
print "Connected to MySQL<br>";

// formvars
$username=$_POST['username'];
$password=$_POST['password'];

// print entered data
print "Brugernavn : " . $username . ", password : " . $password;

// enter data into database - SQL satament
$query = "INSERT INTO users (name, password) VALUES ('$username','$password')" or die(mysql_error());
// select current database
mysql_select_db($databasename, $sql_conn) or die(mysql_error());
// execute sql
mysql_query($query,$sql_conn) or die(mysql_error());

?>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>
<form id="form1" name="form1" method="post" action="">
    <p>
        <label for="username">username</label>
        <input type="text" name="username" id="username" />
    </p>
    <p>
        <label for="password">password</label>
        <input type="text" name="password" id="password" />
    </p>
    <p>
        <input type="submit" name="submit" id="submit" value="Submit" />
    </p>
</form>
</body>
</html>

<?php
$selectquery = "SELECT * FROM users" or die(mysql_error());
$result = mysql_query($selectquery,$sql_conn)  or die(mysql_error());

$num = mysql_numrows($result)  or die(mysql_error());

$i = 0;
while ($i < $num) {
    
    print "#" . $i . " ID: " . mysql_result($result,$i,"id") . ", BRUGERNAVN: " . mysql_result($result,$i,"user_name") . ", PASSWORD: " . mysql_result($result,$i,"user_password") . "<br>";
    
    $i++;
}

// close database conn
mysql_close($sql_conn);
?>
