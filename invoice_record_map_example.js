// get value of a cell: Cell.value
// get values of a row: Row.values
// if the value of a cell returns a formula: https://stackoverflow.com/questions/73954572/how-to-get-computed-values-from-formula-cells-using-exceljs-it-is-returning-for

const mappedRecords = [{
    invoice_no: "INV#1001",
    invoice_date: "11/01/2024",
    supplier: "ABC Limited",
    expense_type: "Travel",
    net_amount: 10000,
    gst: 900,
    gross_amount: 10900
}, {
    invoice_no: "INV#1002",
    invoice_date: "11/02/2024",
    supplier: "DEF Limited",
    expense_type: "Telecommunication",
    net_amount: 75000,
    gst: 6750,
    gross_amount: 81750
}]
