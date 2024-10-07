import fs from 'fs';
let filePath = process.argv[2];
function readFile(filePath){
    return new Promise(function(resolve,reject){
        fs.readFile(filePath, 'utf8', (err,data) => {
            if (err){
                reject(err); 
            }
            resolve(data);
        })
    })
}

function readDir(folderName){
    return new Promise(function(resolve,reject){
        fs.readdir(folderName, (err,files) => {
            if (err){
                reject(err); 
            }
            resolve(files);
        })
    })
}

// try {
//    for (let i = 0; i < fileName.length; i = i + 1){
//     console.log(fileName[i]);
//     let output = await readFile(fileName[i]);
//     console.log(output);
//     // console.log(typeof output);
//     // console.log(JSON.parse(output));
//     // console.log(typeof JSON.parse(output));
//    }
// } catch (e){
//     console.log('Error message',e);
// }

function readPlainDirFiles(folderName, fileExt){
    return new Promise(function(resolve,reject){
        fs.readdir(folderName, (err,files) => {
            if (err){
                reject(err); 
            }
            let filteredFiles = files.filter(function (element){
                return element.endsWith(fileExt);
            })
            resolve(filteredFiles);
        })
    })
}
console.log(await readPlainDirFiles('./src','.eml'));