import exceljs from "exceljs";
import numberToWords from "number-to-words";

const fileName = "Create_invoices_template.xlsx";

let getWorkbook = async function(fileName){
    let workbook = new exceljs.Workbook();
    await workbook.xlsx.readFile(fileName);
    return workbook;
}

let getData = function(workbook, sheetName){
    let WS = workbook.getWorksheet(sheetName);
    let WSData = [];
    WS.eachRow({includeEmpty: true}, function(row){
        let recordValue = [];
        row.eachCell({includeEmpty: true}, function(cell){
            if (cell.formula){
                recordValue.push(cell.result);
            } else recordValue.push(cell.value);
        })
        WSData.push(recordValue);
    })
    return WSData;
}

let createSheet = function(workbook, sheetName){
    let Sheet = workbook.addWorksheet(sheetName);
    return Sheet;
}

let WB = await getWorkbook(fileName);
let templateWSData = getData(WB, "Template");
let srcWSData = getData(WB, "Source");

const targetCells = [
    {title: "Invoice No.", row:0, col:1},
    {title: "Invoice Date", row:0, col:1},
    {title: "Supplier Info:", row:1, col:0},
    {title: "Services Description", row:0, col:1},
    {title: "Amount in USD", row:1, col:0},
    {title: "GST", row:0, col:3},
    {title: "Total Payable", row:0, col:3},
];

srcWSData.forEach(function(record, r){
    if (r === 0) return;
    // create sheet, return sheet here
    // console.log(record);
    // console.log("aaa", record[0]);
    let invoiceSheet = createSheet(WB, record[0]);
    templateWSData.forEach(function(rowData,rowNumber){
        rowData.forEach(function(cellData,colNumber){
            if (cellData){
                // write to corresponding cell in invoiceSheet
                // console.log("aaa", rowNumber + 1, colNumber + 1);
                let invCell = invoiceSheet.getCell(rowNumber + 1, colNumber + 1);
                invCell.value = cellData
                let matchingDataIndex = targetCells.findIndex(function(fieldData){
                    return fieldData.title === cellData
                });
                if (matchingDataIndex !== -1){
                    // console.log(matchingDataIndex);
                    // console.log(rowNumber + 1 + targetCells[matchingDataIndex].row, colNumber + 1 + targetCells[matchingDataIndex].col);
                    // console.log(record[matchingDataIndex]);
                    let dataCell = invoiceSheet.getCell(rowNumber + 1 + targetCells[matchingDataIndex].row, colNumber + 1 + targetCells[matchingDataIndex].col)
                    dataCell.value = record[matchingDataIndex]
                };
            }
        })
    })
})

await WB.xlsx.writeFile(fileName);