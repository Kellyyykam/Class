import exceljs from "exceljs";
import fs from 'fs';

function readFile (filePath){
    return new Promise(function(resolve, reject){
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err){
                reject(err);
            }
             resolve(JSON.parse(data));
         })
     })
 }
 
 let file = await readFile('invoice_record_map.json');
//  console.log(file);

let titleValue = Object.keys(file);
// console.log(titleValue);

let workbook = new exceljs.Workbook();
await workbook.xlsx.readFile("Create_invoice.xlsx");

let worksheet1 = workbook.worksheets[0];

let content = [];
worksheet1.eachRow(function(row, i){
    if (i !== 1){
        let contentValue = row.values
        contentValue.shift();
        content.push(contentValue);
    }
})

let mappedContent = content.map(function(row){
    return {
        [titleValue[0]]: row[0],
        [titleValue[1]]: row[1],
        [titleValue[2]]: row[2],
        [titleValue[3]]: row[3],
        [titleValue[4]]: row[4],
        [titleValue[5]]: row[5],
        [titleValue[6]]: row[6],

    }
})
console.log(mappedContent);