import excel from 'exceljs';

const workbook = new excel.Workbook();
const worksheet1 = workbook.addWorksheet("worksheet1");

// const worksheetName = ['Second', 'Third','Forth', 'Fifth']
// const worksheet = [];
// for (let i = 0; i < worksheetName.length; i = i + 1){
//     let sheet = workbook.addWorksheet(worksheetName[i]);
//     worksheet.push(sheet);
// }

const weather = [
    {
        DayOfWeek: "Monday",
        TemperatureHigh: 30,
        TemperatureLow: 26,
        Humdity: 80,
    },
    {
        DayOfWeek: "Tuesday",
        TemperatureHigh: 28,
        TemperatureLow: 25,
        Humdity: 75,
    },
    {
        DayOfWeek: "Wednesday",
        TemperatureHigh: 27,
        TemperatureLow: 25,
        Humdity: 78,
    },
    {
        DayOfWeek: "Thursday",
        TemperatureHigh: 28,
        TemperatureLow: 24,
        Humdity: 77,
    }
]

// function addWeather (weatherData){
//     let rowData = [weatherData.DayOfWeek, weatherData.TemperatureHigh, weatherData.TemperatureLow, weatherData.Humdity];
//     let row = worksheet1.addRow(rowData);
// }
// for (let i = 0; i < weather.length; i = i + 1){
//     addWeather(weather[i]);
// }

const excelTitle = ["Day of Weet", "Temp High C", "Temp Low C", "Humidity"];
worksheet1.addRow(excelTitle);

function processData (weatherData){
    let rowDataArr = weatherData.map(function(data){
        let rowData = [data.DayOfWeek, data.TemperatureHigh, data.TemperatureLow, data.Humdity];
        return rowData
    })
return rowDataArr
}

let rowDataOutput = processData (weather);
worksheet1.addRows(rowDataOutput);

// Write file should be the last step
await workbook.xlsx.writeFile('filename.xlsx');

