<?php

$dbtype = "mysql";
$dbhost = "localhost";
$port	= "3306";
$dbname = "queue";
$dbuser = "root";
$dbpassword = "1234";
$dbcharset  = "SET NAMES utf8";

$dbconn = new PDO("{$dbtype}:dbname={$dbname};host={$dbhost}", $dbuser, $dbpassword, array(PDO::MYSQL_ATTR_INIT_COMMAND => $dbcharset,)); 	
