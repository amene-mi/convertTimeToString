
function checkHours(value) {
    const text =["midnight","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twleve"];
    if(value === 0){
        return text[value];
    }
    else if(value<13)
    {
       return text[value];
    }
    else if (value<=24)
    {
        return text[value-text.length+1];
    }
    else
    {
        return "not valid hour";
    }
  }
  
  module.exports = checkHours;
