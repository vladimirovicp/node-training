//Работа с файлами

const fs = require('fs');

//проверяем на существование файла

// fs.exists('./package.json', (exists) => {
//     if(exists){
//         fs.readFile('./package.json', (err, data) => {
//             console.log(data);
//         })
//     }
// });

//out

/* 
    <Buffer 7b 0a 20 20 22 6e 61 6d 65 22 3a 20 22 74 72 61 69 6e 69 6e 67 22 2c 0a 20 20 22 76 65 72 73 69 6f 6e 22 3a 20 22 31 2e 30 2e 30 22 2c 0a 20 20 22 64 ... 469 more bytes>
*/

fs.exists('./package.json', (exists) => {
    if(exists){
        fs.readFile('./package.json', (err, data) => {
            console.log(data.toString());
        })
    }
});




