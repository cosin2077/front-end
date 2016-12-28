<?php 
// 打开图片
$src="001.jpg";
$info=getimagesize($src);
$type=image_type_to_extension($info[2],false);
$fun="imagecreatefrom{$type}";
$image = $fun($src);
// 操作图片
// 1.创建一个300*300真色彩图片
$image_thumb = imagecreatetruecolor(250, 300);
// 2.将原图复制到新建真色彩图像上,并按照一定比例压缩
imagecopyresampled($image_thumb,$image,0,0,0,0,250,300, $info[0],$info[1]);
// 3.销毁原图
imagedestroy($image);
// 输出图片
header("Content-type:".$info['mime']);
$funs="image{$type}";
$funs($image_thumb);
$funs($image_thumb,"001_thumb.".$type);
// 销毁图片
imagedestroy($image_thumb);



 ?>