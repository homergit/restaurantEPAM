function getDate(value) {
    var shift = 24 * 60 * 60 * 1000 * value;
    var date = new Date(new Date().getTime() + shift);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var currentDate = day + "/" + month + "/" + year;
    return currentDate;
}