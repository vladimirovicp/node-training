async function f1(){
    const res = await (5 + 10 - 14);
    return res;
}

async function f2(){
    const res = await (5 + 10 - 13);
    return res;
}

async function f3(){
    const res = await (5 + 10 - 12);
    return res;
}



async function go(){
    let a = await f1();
    console.log(a);
    let b = await f2();
    console.log(b);
    let c = await f3();
    console.log(c);
}

go();

