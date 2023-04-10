function formatTimeStamp(timeStamp) {
    let txTimestamp = parseInt(timeStamp);
    const dt = new Date();
    dt.setTime(timeStamp);
    return formatDate(dt);
}

function formatDate(dt) {
    return `${
    (dt.getMonth()+1).toString().padStart(2, '0')}/${
    dt.getDate().toString().padStart(2, '0')}/${
    (dt.getFullYear()-2000).toString()} ${
    dt.getHours().toString().padStart(2, '0')}:${
    dt.getMinutes().toString().padStart(2, '0')}:${
    dt.getSeconds().toString().padStart(2, '0')}`;
}

function timeNowFormatted() {
    return formatDate(new Date());
}

function formatDateTimeOnly(dt) {
    return `${
    dt.getHours().toString().padStart(2, '0')}:${
    dt.getMinutes().toString().padStart(2, '0')}:${
    dt.getSeconds().toString().padStart(2, '0')}`;
}

function timeOnlyNowFormatted() {
    return formatDateTimeOnly(new Date());
}

function daysSince(startDate) {
    console.log(startDate);
    var dateNow = new Date();

    var Difference_In_Time = dateNow.getTime() - startDate.getTime();

    // To calculate the no. of days between two dates
    var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));

    return Difference_In_Days;
}

function numberWithCommas(x) {
    return x ? x.toLocaleString() : 'null';
    //return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function numberWithCommasNew(x) {
    let wholeAmount = Math.floor(x);
    let decimalAmount = x - wholeAmount;
    let decimalAmountString = `${decimalAmount}`;
    decimalAmountString = decimalAmountString.replaceAll('0.','');
    let wholeAmountWithCommas = wholeAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${wholeAmountWithCommas}.${decimalAmount}`;
}

exports.timeNowFormatted = timeNowFormatted;
exports.timeOnlyNowFormatted = timeOnlyNowFormatted;
exports.numberWithCommas = numberWithCommas;
exports.formatTimeStamp = formatTimeStamp;
exports.formatDate = formatDate;
exports.daysSince = daysSince;
