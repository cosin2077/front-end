﻿初始化一个仓库：git init
添加文件命令：git add 124.txt 457.jpg
提交命令：git commit -m “ps：what has changed”
掌握仓库当前的状态：git status 简洁版：git status -s
查看差异：git diff
查看提交历史：git log
退回到某个版本：git reset --hard HEAD^ HEAD^^ HEAD~3（commit前六位hash值）
查看命令历史：git reflog
工作区（仓库）-----[版本库（.git文件夹）暂存区-----master]
git add 文件添加进暂存区（storage）
git commit 把暂存区的内容添加到当前分支（master分支上）
git diff HEAD -- readme.txt查看工作区和版本库里最新版本的区别
git checkout -- readme.txt把readme.txt在工作区的修改全部撤销
git reset HEAD readme.txt把暂存区的修改全部撤销
git rm readme.txt用于删除一个文件
git checkout -- readme.txt也能把版本库中的文件还原到工作区下（工作区还原）
git remote add origin git@github.com:conanskyforce/giit.git关联远程库
git push -u origin master 第一次推送master分支所有内容
git push origin master 以后每次提交
git clone git@github.com:conanskyforce/giit.git克隆远程库
git branch spec创建spec分支，git checkout spec切换到spec分支，可以直接写成
git checkout -b spec 创建并切换
git branch 查看当前所有分支，当前分支前面有分号
git branch spec 创建名为spec的分支
git merge spec 合并spec到当前分支
git branch -d spec删除spec分支
git merge --no-ff spec合并后能看出历史分支
git stash 将现场工作隐藏
git stash pop回到现场工作
git branch -D spec强行删除spec分支
git pull 获取远程比你新的分支提示“no tracking information”用命令
git branch --set-upstream branch-name origin/branch-name
git tag v1.0打标签
git tag 查看标签
git tag v0.9 commit id
git tag -a v1.0 -m "tag massege"
git tag -s v1.0 -m "PGP标签签名"
git push origin v1.0推送本地标签
git push origin --tags推送所有标签
git tag -d v1.0删除本地标签
git push origin：refer/tags/v1.0删除远程标签
.gitignore忽略需要管理的文件
git config --global alias.st status 将status的别名改为st（global表示全局设置）
.git/config（.gitconfig）有配置文件，可以去里边删除别名







































