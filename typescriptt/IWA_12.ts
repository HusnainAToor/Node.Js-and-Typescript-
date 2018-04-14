
const glob = require('glob');
const fs = require('fs');


const pattern= process.argv[2];
const first= process.argv[3];
const second= process.argv[4];
 
glob(pattern, function (err, files) {
 
    if (err) {
 
        console.log(err);
 
    } else {
 
        files.forEach(file=> {

            fs.readFile(file, 'utf8', function(err, data) {  
                if (err) throw err;
                
                const newdata=  data.split(first).join(second);

                 

       console.log(newdata);

       console.log();
       console.log();        
            });
            
        });


     
   
    }
 
});