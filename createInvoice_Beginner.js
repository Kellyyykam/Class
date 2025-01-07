import exceljs from "exceljs";
import numberToWords from "number-to-words";

const fileName = "Create_invoices_template.xlsx";

let targetCells = ["","D3","D4","B4","","D7","D8","D9"];

let workbook = new exceljs.Workbook();
await workbook.xlsx.readFile(fileName);

let srcWS = workbook.getWorksheet("Source");
let templateWS = workbook.getWorksheet("Template");

let templateWSData = [];
templateWS.eachRow(function(row){
    templateWSData.push(row.values);
})

srcWS.eachRow(function(row,r){
    if (r === 1) return;
    // create new sheet
    let invoiceSheet = workbook.addWorksheet(row.values[1]);
    // copy template sheet data to it
    templateWSData.forEach(function(rowData,rowNumber){
        rowData.forEach(function(cellData,colNumber){
            if (cellData){
                // write to corresponding cell in invoiceSheet
                let invCell = invoiceSheet.getCell(rowNumber + 1, colNumber);
                invCell.value = cellData
            }
        })
    })
    // assign row values to corresponding cells
    let recordValue = [];
    row.eachCell(function(cell){
        if (cell.formula){
            recordValue.push(cell.result);
        } else recordValue.push(cell.value);
    })
    recordValue.forEach(function(cellValue, colNumber){
        if (targetCells[colNumber]){
            // console.log(targetCells[colNumber]);
            let invCell = invoiceSheet.getCell(targetCells[colNumber])
            invCell.value = cellValue;
        }
    })
    let num2WordCell = invoiceSheet.getCell("A12")
    num2WordCell.value = numberToWords.toWords(parseInt(recordValue[recordValue.length - 1])).replaceAll(",","");
})

await workbook.xlsx.writeFile(fileName);