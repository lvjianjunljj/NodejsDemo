# NodejsDemo
##Doc
https://docs.npmjs.com/
## Simplest steps for creating a new nodejs project.
### Step1: Install Nodejs
Download link: https://nodejs.org/en/download/
After installing nodejs successfully, you should can use npm command in CMD, or you need to solve this problem. 
(I did not encounter any errors when I finished the installation and run the command.)
### Step2: Init
Run "npm init" in the directory. Then you will create a json file and some demo file, this json file contains some information and configuration your nodejs project, and I think the most important content in the json file is the dependencies property.
### Step3: Install dependencies
Doc for npm-package.json: https://docs.npmjs.com/files/package.json
If the all the dependencies you want to install are in the dependencies proerty in package.json, you just need to run "npm install", or if there is not the dependency you want to install in the dependencies proerty in package.json, you need to run "npm install XXX" and then the package.json will be updated to add the dependency just installed. And if there is not the package.json file(Maybe because you didn't perform the second step), when you run the command "npm install [XXX]", there will be an error: saveError ENOENT: no such file or directory, open 'XXX\package.json'.
### Step4: run the js file
Just run the command "node test.js" in the CMD
