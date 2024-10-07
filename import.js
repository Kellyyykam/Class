import info from './package.json' assert {type: 'json'};
info = JSON.parse(info);
console.log(info);
console.log(Object.is(info));