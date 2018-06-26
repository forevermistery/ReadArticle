<?php 
$dbname='cAuth';
$host="localhost:5825";
$user="root";
$pwd="wx4a9d40ba82bb1c48";

$link=mysql_connect("localhost",$user,$pwd);
mysql_query("set names utf8");
if(!$link){
  die("Connect Server Failed:".mysql_error($link));

}
if(!mysql_select_db($dbname,$link)){
  die("Select Database Failed:".mysql_error($link));
}


?>