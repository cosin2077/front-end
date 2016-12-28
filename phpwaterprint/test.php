<?php 
require "image.class.php";
$src='13.jpg';
$image = new Image($src);
// $image->thumb(300,350);
$content="conans.top";
$font_url="arial.ttf";
$size=170;
$color=array(
	0=>255,
	1=>255,
	2=>255,
	3=>70);
$local=array(
	'x'=>20,
	'y'=>830
	);
$angle=20;
$image->fontMark($content,$font_url,$size,$color,$local,$angle);
$image->show();
 ?>