// Git - It is a version control system, save all the history of the files and also the changes made in it. Git achieves multiple things through it. 
/* 
Git is different from GitHub
 
Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

Open GitBash and type
---------------------
- To check the version of Git => git --version  
2.40.1
- To set config to tell your name => git config --global user.name "Mayank Nagle"
- To set config to tell your email id => git config --global user.email "mayank.nagle19@gmail.com"
- To check whether it is actually did or not => 
for name => git config --global user.name
Mayank Nagle
for email => git config --global user.email
mayank.nagle19@gmail.com
- For editing config files.
=> git config --global --edit
insert -> edit your data
and escape after save and write :wq to exit there.

for creating git file
---------------------
- mkdir name => for making new folder.
- cd name => for change directory.
- cd d: => for changing directory to d
- cd f: => for changing directory to f
- cd .. => for returning to desktop.
- cd ~ => for goining in root directory.
- clear => for clearing data
- cd "Web Development" => Space taken inside the quotes singlr or double
- cd developemnt => without in quotes beacuse there is no space in the spacific folder
- ctrl + c => to out from the new terminal.

example :-
cd d: 
cd "Web Development"
cd "Git and Github"

Now we can make our repository in it. Repository means the project that can be tracked through git.

- if you want to make this folder a git repo, then write => git init
for creating a repository.
- ls => to find repository empty or not.
- ls => gives the directories in the specific drive.
- ls -a => then you can see a file .git, this file is created in it when we make a new repository. which you know that it contains the files which is being tracked by git.


Now creating a file.
---------------------
- git init => if you want to make this folder a git repository.
- git status => which tells you the status about the changes made in the repository, what modifications have been done, which file have been deleted which files have been changed.
- git add file_name => if we do git add sum.js then our file start to be tracked.

staging - When we got untracked files in git status then we have to add files in it.

Untracked files:
(use "git add <file>..." to include in what will be committed)
Git.jsx   
sum.js

Changes to be committed:
(use "git rm --cached <file>..." to unstage)
new file:   Git.jsx        
new file:   sum.js

now this file is in under staging area.

Staging Area - It is the area where you can hold your changes before finally committing.
If you want 5-6 files in commit so you'll put those files in the staging. and from there your files will be committed.

Working Directory ----> Staging Area ----> Repository
git add          git commit

- git commit -m "initial commit" => To commit the command initial commit
- git log => if you want to see the amount of your commits until now.

example - 
Author: Mayank Nagle <mayank.nagle19@gmail.com>
Date:   Mon May 15 17:59:30 2023 +0530
initial commit

All commit have different hashcode generated
- git commit -m "message"
- cmd+k or clear => clear the screen

example - git add subtract.js
- git status => new file 
modified files => Git.jsx, sum.js

- git commit -m "adding subtract.js" one file changed
- git log

commit - different hexacode
adding subtract.js

commit - hexacode
initial commit
--------------------------------------------------------
- git add . => (.) dot all the files will come in the staging area. 

example - git commit -m "message added in file."

if you want to go to first commit, when initial commit was done for that we use checkout command
- git checkout hashcode_name => give you a first commit.
- git checkout master => give you back to the master and all the files are recovered.

- git branch => give you the initial master branch, and now you can make multiple branches
example - git branch 
(HEAD detached at 6b0aa29)
- git log 
6b0aa29 (head)
- git master 
master
- git log
head to master
-------------------------------------------------------------------
Master Branch ---> Develop Branch
master branch is the main branch you can make multiple branches from it.

- git branch branch_name => for making a branch in master branch
example - git branch develop
- git branch
=> gives us two branches - develop and master
- git checkout develop => switch to branch develop

- git checkout -b branch_name => for this you can make branch as well as you checked out.
example - git checkout -b mayank/multiply => here branch name is person_name/task_performed_by_him
- git status
modified files :- Git.jsx and sum.js
untracked file :- multiply.js
not staged :- Git.jsx

- git add multiply.js
- git commit -m "message added this file"
- git add Git.jsx
- git status

- git checkout develop => please commit your change
- git commit -m "message develop"
- git checkout develop

develop branch does not know that multiply.js was even created and some work was done over there.

for merging files develop and mayank/multiply
---------------------------------------------
- git merge mayank/multiply => multiply.js has been added and all the insertions are there in it as well 

- git ignore => so you want that some files should enter the git ecosystem, git shouldnt track them. file should have .gitignore

two ways to create
------------------
write in git bash or make a file .gitignore 
- touch .gitignore
- make a file as a new file .gitignore

so here gitignore file will be created and all the files and folders that will be written in it git will ignore them. 

example - write git.txt in .gitignore file than it will ignore in the git ecosystem.

Git Hub
-------
You are also to do open source contibution with its help because the code in it is hosted in a remote repository.
And multiple people can view and contribute towards your code. If you want you can either make public or a private repository.
who shouldn't be accessed by anyone ecept you or your contributors.

create a new repository
-----------------------
1. Make a New Repository.
- For making new repository in git bash

echo "# git-and-github" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/mayanknagle18/git-and-github.git
git push -u origin main

2. write in git bash
- git remote -v 
- git remote add origin https://github.com/mayanknagle18/git-and-github.git
- git remote -v 

this is the origin to fetch and push. And this the same origin that I have made. This is now remote and we'll be doing all the push and pull inside it.
for push the git
- git branch -M main
- git push -u origin main

Now some changes in the file and than push
------------------------------------------
1. Change the codes in the file.
2. 


Question - 
----------
If this error occured than how to fix it?
- fatal: Unable to create 'D:/Web Development/Git and GitHub/.git/index.lock': File exists.
Answer -
--------
rm -f ./.git/index.lock
than add modified files by - git add file_name

*/