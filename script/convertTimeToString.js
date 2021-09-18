const hours = require("./checkHours");
const Minutes = require("./checkMinutes");

function convertTimeToString(value) {
    let arr = value.split(":");
    const arrNum = arr.map((i) => Number(i));
    if(arrNum[0]===0 && arrNum[1]===0){
      return hours(arrNum[0]);
    }
    else if(arrNum[1]===0){
      return hours(arrNum[0])+" "+Minutes(arrNum[1]);
    }
    else if(arrNum[1]<=30){
     return Minutes(arrNum[1])+" "+hours(arrNum[0]);
    }
    else{
      debugger;
      return Minutes(arrNum[1])+" "+hours(arrNum[0]+1);
    }
  }
  module.exports = convertTimeToString;
