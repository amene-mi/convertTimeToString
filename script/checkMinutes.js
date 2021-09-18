
function checkMinutes(value) {
    let min = parseInt(value);
    const text =["o'clock","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twleve",
    "Thirteen","fifteen","fourteen","sixteen","seventeen","eighteen","nineteen","twenty","twenty one","twenty two",
    "twenty three","twenty four","twenty five","twenty six","twenty seven","twenty eight","twenty nine"];
    if(min === 0){
        return text[min];
    }
    else if(min===45 || min===15)
    {
       return "quarter" + category(min);
    }
    else if(min===30)
    {
       return "half past" ;
    }
    else if(min<30)
    {
       return text[min] + " minutes" + category(min);
    }
    else if(min>30)
    {
       return text.reverse()[min-text.length-1] + " minutes" + category(min);
    }
    else
    {
        return "not valid";
    }
  }
  function category(value){
        if(value<30){
            return " past";
        }
        else{
            return " to";
        }
  }
  module.exports = checkMinutes;
