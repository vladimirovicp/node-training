setImmediate(() => {
    console.log('setImmediate');
});

process.nextTick(() => {
    console.log('process.nextTick');
})

setTimeout(() => {
    console.log('setTimeout');
}, 0); 



// сразу выполняется process.nextTick
// гарантировать выполнения операции то process.nextTick

