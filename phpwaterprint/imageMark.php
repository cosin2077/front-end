<?php 
// 一、打开图片
// 1.配置图片路径
$src="001.jpg";
// 2.获取图片信息
$info=getimagesize($src);
// 3.取得类型
$type = image_type_to_extension($info[2],false);
// 4.内存中创建图像
$fun = "imagecreatefrom{$type}";
$image = $fun($src);
// 二、操作图片
// 1.设置水印路径
$imageMark="0.jpg";
// 2.获取水印图片信息
$info2 = getimagesize($imageMark);
// 3.获取图片类型
$type2 = image_type_to_extension($info2[2],false);
// 4.内存中创建图片
$fun2="imagecreatefrom{$type2}";
// 5.将水印复制到内存中
$water = $fun2($imageMark);
// 6.合并图片
imagecopymerge($image,$water, 20,20, 20, 240, $info2[0], $info2[1],70);
// 7.销毁水印
imagedestroy($water);
// 三、输出图片
header("Content-type:",$info['mime']);
$func="image{$type}";
$func($image);
$func($image,"n_11.".$type);
// 四、销毁图片
imagedestroy($image)





 ?>