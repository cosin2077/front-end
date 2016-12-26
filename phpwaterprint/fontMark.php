<?php 
// 打开图片
// 1.配置图片路径
$src="001.jpg";
// 2.获取图片信息
$info=getimagesize($src);
// 3.通过图像编号获取图像类型
$type=image_type_to_extension($info[2],false);
// 4.内存中创建和图像类型一样的图像
$fun = "imagecreatefrom{$type}";
$image = $fun($src);
// 操作图片
// 1.设置字体路径
$font="arial.ttf";
// 2.填写水印内容
$content="conans.top";
// 3.设置字体颜色和透明度
$col=imagecolorclosestalpha($image,255,0,255,80);
// 4.写入文字
imagettftext($image,80,0,30,340,$col,$font,$content);
// 输出图片
// 在浏览器输出
header("Content-type:".$info['mime']);
$fun2="image{$type}";
$fun2($image);
// 保存图片
$fun2($image,'001_n.'.$type);
// 销毁图片
imagedestroy($image);
 ?>