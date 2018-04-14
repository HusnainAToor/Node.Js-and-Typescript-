# Node.Js-and-Typescript-

IWA-1
Implement a function named delay that takes a function and a number milliseconds as
arguments:
function delay(fn, ms) { /*...*/ }
The function should return a new function. The new function has the same behaviour but its
execution is delayed​ by the number milliseconds specified:


IWA-2
Create a command line Node.js application that takes a glob pattern and two words as
arguments:
$ ts-node IWA_12.ts ./**/*.txt something somethingelse
The application should find the first word in all the files that match the glob​ pattern​ and
replace it with the second word​.
You are going to need glob​ library to find the path of files that match the glob pattern

IWA-3
After implementing the solution with process.argv, copy it in a new file named IWA_13.ts and
use the ​yargs​ library​ instead. The yargs library help us to work with command line arguments.
You can install this library using the following command:
$ npm install --save yargs
$ npm install --save-dev @types/yargs
The goal is to change the application so we can run it using the following command:
$ ts-node IWA_13.ts --files ./**/*.txt --find something --replace somethingelse
