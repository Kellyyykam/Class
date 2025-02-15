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

// console.log(templateWSData);
// console.log(srcWSData);

function mapRecord (record, title){
    return {
        [title[0]]: record[0],
        [title[1]]: record[1],
        [title[2]]: record[2],
        [title[3]]: record[3],
        [title[4]]: record[4],
        [title[5]]: record[5],
        [title[6]]: record[6],
    }
}

let title = srcWSData[0];
let mappedSrcRecord = srcWSData.slice(1).map(function(record, r){
    return mapRecord(record, title);
})

let templateWS = WB.getWorksheet("Template");

mappedSrcRecord.forEach(function(record, i){
    // create invoice WS for each object
    let invoiceSheet = createSheet(WB, record[title[0]]);
    templateWSData.forEach(function(rowData, r){
        rowData.forEach(function(cellData, c){
            // copy style to invoice sheet
            let invoiceCell = invoiceSheet.getCell(r + 1, c + 1);
            let templateCell = templateWS.getCell(r + 1, c + 1);
            invoiceCell.style = templateCell.style;
            if (!cellData) return;
            if (cellData.startsWith("$")){
                // 1. cellData remove $ using String.replace(), save to variable key
                let key = cellData.replace("$", "");
                // 2. use the key to get value from record (record[key])
                // 3. assign the value to the target cell
               invoiceCell.value = record[key];
            } else {
                invoiceCell.value = cellData;
            }
        })
    })
    templateWS.columns.forEach(function(column, i){
        let columnWidth = column.width;
        if (columnWidth) {
            invoiceSheet.getColumn(i + 1).width = columnWidth;
        }
    templateWS.eachRow(function(row, r){
        let rowHeight = row.height;
        if (rowHeight) {
            invoiceSheet.getRow(r).height = rowHeight;
            }
    })
})})

await WB.xlsx.writeFile(fileName);

// Homework: 1. copy Row Height to invoice sheet (Excel js eachRow); 2. NumbertoWords