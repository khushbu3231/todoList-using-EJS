module.exports.getDate=function(){

var date = new Date();
    // var currentDay = date.getDay();  
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = date.toLocaleDateString("en-US", options);
    return day;
}