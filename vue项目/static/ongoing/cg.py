import os

lsts = os.listdir()

for a in lsts:
	if a.endswith('.png'):
		os.rename(a,a[:-4]+'.jpg')