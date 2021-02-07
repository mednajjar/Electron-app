const fs = require('fs');
const path = require('path');

const directory = 'C:/Users/Youcode/Desktop/temp/';


let i = 0;
const move=()=> {
    if (i == 0) {
      i = 1;
      let elem = document.getElementById("myBar");
      document.getElementById("myProgress").style.display = 'block';
      document.getElementById("btn").style.display = 'none';
     
      let width = 1;
      let id = setInterval(frame, 20);
      function frame() {
        if (width >= 100) {
        // -----------------------------------
        fs.readdir(directory, (err, files) => {
            if (err) throw err;
          
            for (const file of files) {
                console.log(files.length)
              fs.unlink(path.join(directory, file), err => {
                if (err) throw err;
              });
            }
          });

        // -----------------------------------
          clearInterval(id);
          i = 0;
          elem.style.display = 'none';
          document.getElementById('txt').innerHTML = 'All temporry files deleted';
          
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
} 


