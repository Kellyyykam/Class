let time = 10;
try {
    let intervalId = setInterval(function(){
        console.log(time);
        time = time - 1;
        if (time === 0) throw new Error ("The End");
    }, 1000)
} catch (e){
    console.log(3);
};

async function asyncFunc(){
    console.log(1);
    let a = await new Promise(function(res, rej){
        try {
            setTimeout(function(){
                rej("Error");
            } , 1000)
        } catch(e){
            console.log(10000);
        }
    });
    console.log(a);
    console.log(3);
}
asyncFunc();