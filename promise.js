new Promise(function(resolve, reject){
    let time = 0;
    let intervalId = setInterval(function(){
        if (time === 10){
            clearInterval(intervalId);
            resolve('Completed!');
        }
        console.log(time);
        time = time + 1;
        }, 1000); 
}).then(function(value){
    console.log(value);
})

let N = parseInt(process.argv[2]);
let createPromise = function(N){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
        resolve(N);
    }, N * 1000
    )
})}
let twoSTimeOut = createPromise(2);

let fourSTimeOut = createPromise(4);
let fiveSTimeOut = createPromise(5);

twoSTimeOut.then(async function(value){
    console.log("resolved to", value, "after", value,"s");
    let threeSTimeOut = await createPromise(3);
    return threeSTimeOut;
}).then(function(value){
    console.log("resolved to", value, "after", value,"s");
})