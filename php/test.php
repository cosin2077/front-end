<?php
//这里仅仅是为了案例需要准备一些素材图片
header("content-type:text/html;charset=utf-8");
$url = 'http://www.iyi8.com/uploadfile/2014/0521/20140521105216901.jpg';
$content = file_get_contents($url);
$filename = 'tmp.jpg';
file_put_contents($filename, $content);
$url = 'http://wiki.ubuntu.org.cn/images/3/3b/Qref_Edubuntu_Logo.png';
file_put_contents('logo.png', file_get_contents($url));
//开始添加水印操作
$im = imagecreatefromjpeg($filename);
$logo = imagecreatefrompng('logo.png');
$size = getimagesize('logo.png');
imagecopy($im, $logo, 15, 15, 0, 0, $size[0], $size[1]); 
 
header("content-type: image/jpeg");
imagejpeg($im); 


 ?>