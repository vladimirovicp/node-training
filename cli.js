// node .\cli.js --start vasya petya

/************************ */
//console.log(process.argv);

// out
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'E:\\git2024\\node-training\\cli.js',
//     '--start',
//     'vasya',
//     'petya'
// ]

// node .\cli.js -x 3 -y 4 n5 abc
/************************ */
console.log(process.argv.slice(2));

// out
// [ '-x', '3', '-y', '4', 'n5', 'abc' ]