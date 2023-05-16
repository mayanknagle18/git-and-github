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

*/