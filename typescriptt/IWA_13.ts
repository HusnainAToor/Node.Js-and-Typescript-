
const glob13 = require('glob');
const fs13 = require('fs');
const argv= require('yargs').argv;

const pattern13= argv.files;
const first13= argv.find;
const second13= argv.replace;
 
glob13(pattern13, function (err, files) {
 
    if (err) {
 
        console.log(err);
 
    } else {
 
        files.forEach(file=> {

            fs13.readFile(file, 'utf8', function(err, data) {  
                if (err) throw err;
                
                const newdata=  data.split(first13).join(second13);

                 

       console.log(newdata);

       console.log();
       console.log();        
            });
            
        });


     
   
    }
 
});



 
       
            
        
   
   
