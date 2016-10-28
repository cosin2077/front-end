####1.install git then set name&email  
	git config --global user.name "conanskyforcce"//set user nme  
	git config --global user.email "conanskyforce@gmail.com"//set user email  
####2.creat a new repository  
	mkdir newdirectory//create a new directory  
	cd newdirectory//get into that directory  
	git init//initialized an empty git repository in   newdirectory  
	git add xxx.txt(git add .)//add a file(add all changed   files)to stage page  
	git commit -m "annotation"//commit a file to master branch
####3.see the logs  
	git status//see the status  
	git diff//see differences  
	git log//see logs  
	git log --pretty=oneline//brief mode  
	git reset --hard HEAD^//go back to last version(HEAD means this version,HEAD^means last version,HEAD^^ vice versa)  
	git reset --hard hashnumber//go to any version before or after with hash number  
	git reflog//see the command log  
####4.modify or reback you file  
	git checkout -- file//abort the change in working space  
	git reset HEAD file//abort the file commited to stage  
####5.delete or misdelete  
	git rm file//delete file  
	git checkout --file//if you misdelete,reback  
####6.remote repository  
	git ssh-keygen -t rsa -C "youremail@example.com"  
	open github then paste in Add SSH Key   
	git remote add oringin git@github.com/xxx.git//connect the remote repository  
	git push -u origin master//first time push  
	git push origin master//normal push  
####7.create a branch  
	git checkout -b abc//create a new branch abc  
	(it equals   
	git branch abc//create a branch  
	git checkout abc//switch branch   
	)  
	git branch//see branches   
	git merge abc//merge abc to master(now in master)  
	git branch -d abc//delete abc branch  
####8.solve the conflicts  
	git log --graph//see the conflicts  
####9.merge without fast-forward  
	git merge --no-ff -m"note" abc//no fast-forward mode  
####10.storage temporaryly  
	git stash//storage temporaryly  
	git stash pop//reback and delete stash  
####11.delete branch  
	git branch -D abc//delete abc branch forcely   
####12.cooperation  
	git remote//see remote repository default origin  
	git remote -v//see details  
	git push origin master//push master branch  
	git push origin abc//push abc branch  
	git checkout -b abc origin/abc//create a remote branch abc  
		a.git push origin branch-name//push your own modify  
		b.git pull//pull remote newest file  
		c.git branch --set-upstream branch-name origin/branch-name//create relationship  
		d.slove conflicts  
####13.tag for a version  
	git tag//see all tags  
	git tag v1.0//set this branch tag v1.0  
	git tag v 0.9 324167//set tags by commit id  
	git tag -a abc -m "annotation"//set tag&notes   
	git tag -d v1.0//delete v1.0 tag  
	git push origin v1.0//push tag to remote  
	git push origin --tags//push all tags one time  
	git push origin :refs/tags/v1.0//delete remote tags  
####14.ignore  
	.gitignore//the files or directories ignored  
####15.about branch  
	git push --set-upstream origin abc //set abc directly push  
	git push origin abc//push abc branch  
 




