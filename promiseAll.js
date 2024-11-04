function createPromise (time){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log(time + ' completed');
            resolve(time);
        }, time * 1000)
    })
}

let p1 = createPromise(2);
let p2 = createPromise(3);
let p3 = createPromise(1);

console.log(await Promise.all([p1, p2, p3]));

console.log(await p1);