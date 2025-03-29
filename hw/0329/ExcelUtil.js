import exceljs from "exceljs";

class ExcelUtil{
    static async getWorkbook(fileName){
        let workbook = new exceljs.Workbook();
        await workbook.xlsx.readFile(fileName);
        return workbook;
    }
    static getData (workbook, sheetName){
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
    static createSheet(workbook, sheetName){
        let Sheet = workbook.addWorksheet(sheetName);
        return Sheet;
    }
}

const myWorkbook = await ExcelUtil.getWorkbook("Create_invoices_template.xlsx")
console.log(myWorkbook);
const myData = ExcelUtil.getData(myWorkbook, "Template")
console.log(myData);
const mySheet = ExcelUtil.createSheet(myWorkbook, "Invoice #001")
console.log(mySheet);