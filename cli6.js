//Работа с файлами

const fs = require('fs');

const exists = fs.existsSync('./package.json');

if(exists) {
    const data = fs.readFileSync('./package.json');
    console.log(data.toString());
}

// Синхроное лучше не использовать!!!
// В консоли можно, так как консоль синхронная, в вебе ненужно...