let X = parseInt(process.argv[2]);
let Y = parseInt(process.argv[3]);

for (let i = 0; i <= X; i = i + 1){
    if (i === Y){
        setTimeout(function(){
            console.log(i);
            }, 0
        );
    } else (
    console.log(i)
    );
}

let X = parseInt(process.argv[2]);
let time = 0;
let intervalId = setInterval(function(){
    let second = time % 60;
    let minute = ((time - time % 60)/60) % 60;
    let hour = (time - time % 3600)/3600;
    console.log(hour + ":" + minute + ":" + second);
    if (time === X - 1){
        clearInterval(intervalId);
    }
    time = time + 1;
    }, 1000 
);