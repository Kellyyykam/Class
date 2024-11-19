import exceljs from "exceljs";
import axios from "axios";

let workbook = new exceljs.Workbook();
await workbook.xlsx.readFile("Weather Forecast.xlsx");

let worksheet = workbook.worksheets[0];

// let row2 = worksheet.getRow(2);
// console.log(row2);

// let row2to6 = worksheet.getRows(2, 5);
// console.log(row2to6);

worksheet.eachRow(function(row, i){
    console.log(row.values);
})