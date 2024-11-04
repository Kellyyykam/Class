import excel from 'exceljs';

const workbook = new excel.Workbook();
const worksheetName = ['First', 'Second', 'Third']
const worksheet = [];
for (let i = 0; i < worksheetName.length; i = i + 1){
    let sheet = workbook.addWorksheet(worksheetName[i]);
    worksheet.push(sheet);
}

// Write file should be the last step
await workbook.xlsx.writeFile('filename.xlsx');

// HW (4Nov): re-write the above exercise using a suitable array method.
