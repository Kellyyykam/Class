import { library } from "./object_example.js";

let keys = Object.keys(library);
// console.log(keys);

let values = Object.values(library);
// console.log(values);

let keyValues = keys.map(function(key,i){
    return [key, values[i]];
})
// console.log(keyValues);

let keyValuesObj = Object.entries(library);
// console.log(keyValuesObj);

let targetKey = process.argv[2];
let targetKeySplit = targetKey.split(".");
// console.log(targetKeySplit);

let output = library;
for (let i = 0; i < targetKeySplit.length; i = i + 1){
    output = output[targetKeySplit[i]];
}
console.log(output);

let newLibrary = Object.assign({}, library);
newLibrary.books.push({ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925});
console.log(newLibrary);