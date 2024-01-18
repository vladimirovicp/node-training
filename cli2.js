const minimist = require('minimist');

//console.log(minimist(process.argv.slice(2)))

//node .\cli2.js -x 3 -y 4 n5 abc
// out { _: [ 'n5', 'abc' ], x: 3, y: 4 }


console.log(minimist(process.argv.slice(2), {alias: {o: 'optimal'}}))

//node .\cli2.js --optimal
// или
// node .\cli2.js --o   

//out { _: [], optimal: true, o: true }