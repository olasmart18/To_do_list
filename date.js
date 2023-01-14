module.exports.getDate = getDate;

function getDate(){
    let date = new Date()

    let options = {
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    let day = date.toLocaleDateString("en-US", options);
    return day;
}

module.exports.getDay = getDay;

function getDay() {
    let today = new Date()
    let options = {
        weekday: "long"
    }
    let day = today.toLocaleDateString("en-US", options)
    return day;
}



