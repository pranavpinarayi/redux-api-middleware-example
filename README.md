# OPT-customer-portal
## Get started:

Clone the repo
	* git@code.qburst.com:lekshmi/OPT-customer-portal.git

After an initial git clone, run `npm install`

## Run the Application on android

`react-native run-android`

This will run application on android

`npm start`

This will run ReactNative packager

## Git Workflow
    
Create feature/task branch for each task/ticket/feature

    * git fetch origin
    
    * git checkout -b your_branch origin/develop (your_branch is an example)
    
    create branch tracking from develop branch
    
Do your changes and commit

    * git add filename1 filename2 ...
    
    * git commit -m "{proper message should be given here}"

Update your Branch with origin/develop
	
	* git fetch origin develop

	* git rebase origin/develop

Run test and lint before push
    
Push your code to QBurst's codebase

    * git push remote-origin your_branch
    
    Then raise merge request to develop branch. Make your lead as reviewer
    
If there is something regarding the coding standard or there is minute issue, then 

    * We will close the merge request after adding the comment. We will delete that branch from remote also
    
    * You can the do the fix and after adding, amend the commit
    
    * git add filename1 filename2 
    
    * git commit --amend
    
    * git push remote-origin your_branch
    
    * Raise merge request again to develop branch
 

## Linting

`npm run lint`