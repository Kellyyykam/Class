import axios from 'axios';
import exceljs from 'exceljs';

let response = await axios.get('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en');
let weatherForecast = response.data.weatherForecast; // array

const workbook = new exceljs.Workbook();
const worksheet = workbook.addWorksheet("9-days Weather Forecast");
const worksheet2 = workbook.addWorksheet("Column View");
const titles = ["Date", "Max Temp", "Min Temp", "Max RH", "Min RH", "PSR"];
worksheet.addRow(titles);

let weatherData = weatherForecast.map(function(forecast){
    return [forecast.forecastDate, forecast.forecastMaxtemp.value, forecast.forecastMintemp.value, forecast.forecastMaxrh.value, forecast.forecastMinrh.value, forecast.PSR];
})

worksheet.addRows(weatherData);


let weatherData2 = [
    weatherForecast.map(function(forecast){
        return forecast.forecastDate
    }),
    weatherForecast.map(function(forecast){
        return forecast.forecastMaxtemp.value
    }),
    weatherForecast.map(function(forecast){
        return forecast.forecastMintemp.value
    }),
    weatherForecast.map(function(forecast){
        return forecast.forecastMaxrh.value
    }),
    weatherForecast.map(function(forecast){
        return forecast.forecastMinrh.value
    }),
    weatherForecast.map(function(forecast){
        return forecast.PSR
    }),
]

worksheet2.addRows(weatherData2);
workbook.xlsx.writeFile('Weather Forecast.xlsx');