// Homework 1
const arr = ["abc", "def"];
const obj = {name: "test", age: 16};
const key = "name";

let notFound = function(arr, obj, key){
    if(arr.includes(obj[key])===false){
        return true;
    } 
};
console.log(notFound(arr,obj, key));

// Homework 2

let arr2 = [
    {name: "Ms Chan", age: 25},
    {name: "Mr Wong", age: 16},
    {name: "Mr Ho", age: 30}
]
let output = [];
let objsStartWith = function(arr, targetValue){
    for (let i = 0; i < arr.length; i = i + 1){
        if (arr[i].name.split(" ")[0] === targetValue){
            output.push(arr[i]);
        }
    } return output;
};
console.log(objsStartWith(arr2,"Mr"));