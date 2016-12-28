<?php 
class Image{
	// 
	private $image;
	// 内存中的图片
	private $info;
	public function __construct($src){
		$info = getimagesize($src);
		$this->info = array(
			'width'=>$info['0'],
			'height'=>$info['1'],
			'type'=>image_type_to_extension($info['2'],false),
			'mime'=>$info['mime']
			);
		$fun = "imagecreatefrom{$this->info['type']}";
		$this->image=$fun($src);
	}
	// 压缩图片
	public function thumb($width,$height){
		$image_thumb = imagecreatetruecolor($width,$height);
		imagecopyresampled($image_thumb,$this->image,0,0,0,0,$width,$height, $this->info['width'],$this->info['height']);
		imagedestroy($this->image);
		$this->image=$image_thumb;
	}
	// 天假文字水印
	public function fontMark($content,$font_url,$size,$color,$local,$angle){
		$col=imagecolorclosestalpha($this->image,$color[0],$color[1],$color[2],$color[3]);
		imagettftext($this->image,$size,$angle,$local['x'],$local['y'],$col,$font_url,$content);
	}

	// 浏览器输出图片
	public function show(){
		header("Content-type:".$this->info['mime']);
		$funs="image{$this->info['type']}";
		$funs($this->image);
	}
	//保存图片到硬盘里
	
	public function save($newname){
		$funs="image{$this->info['type']}";
		$funs($this->image,"$newname.".$this->info['type']);
	}
	//销毁图片
	public function __destruct(){
		imagedestroy($this->image);
	}
}





 ?>