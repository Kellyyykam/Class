import exceljs from "exceljs";
import axios from "axios";

// let workbook = new exceljs.Workbook();
// await workbook.xlsx.readFile("Weather Forecast.xlsx");

// let worksheet = workbook.worksheets[0];

// // let row2 = worksheet.getRow(2);
// // console.log(row2);

// // let row2to6 = worksheet.getRows(2, 5);
// // console.log(row2to6);

// worksheet.eachRow(function(row, i){
//     console.log(row.values);
// })

let workbook = new exceljs.Workbook();
await workbook.xlsx.readFile("Weather Forecast.xlsx");

let worksheet1 = workbook.worksheets[0];

let title = worksheet1.getRow(1);
let titleValue = title.values
titleValue.shift();
console.log(titleValue);

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

    }
})
console.log(mappedContent);