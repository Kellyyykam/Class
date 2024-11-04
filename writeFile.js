import { create } from 'domain';
import fs from 'fs';
import path from 'path';

let content = 'Hello, this is some content to be written to a file!';
fs.writeFile('src/file.txt', content, (err) => {
    if (err){
        console.error('Error writing file:', err);
    } else{
        console.log('File written sucessfully');
    }
})

function createFile (filePath, content){
    fs.mkdir(path.dirname(filePath), {recursive: true}, (err) => {});
    fs.writeFile(filePath, content, (err) => {
        if (err){
            console.error('Error writing file:', err);
        } else {
            console.log('File written sucessfully');
        }
    })
}

createFile('src/subFolder/file.txt', 'Hello, this is Ex1-3');

