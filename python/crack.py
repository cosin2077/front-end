# -*- coding:utf-8 -*-
from PIL import Image
im = Image.open('captcha.gif')

im = im.convert('p')

print im.histogram()






