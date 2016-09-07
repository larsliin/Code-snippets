// returns age from datestring yyyymmdd
function getAge(dateobj) {
    var today = new Date();
    var birthDate = new Date(dateobj);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// returns date string from form select inputfields
function getFormDateAsString() {
    var dd = $('#day').val() < 10 ? '0' + $('#day').val() : $('#day').val();
    var mm = $('#month').val() < 10 ? '0' + $('#month').val() : $('#month').val();
    var yyyy = $('#year').val();
    return yyyy + mm + dd;
}

// returns date object from form select inputfields
function getFormDateAsObj() {
    parts = getFormDateAsString().match(/(\d{4})(\d{2})(\d{2})/),
    dateObj = new Date(parts[1], parts[2] - 1, parts[3]); // months 0-based!
    return dateObj;
}

// returns true if visitor is under 18
function isCurrentVisitorMinor() {    
    return getAge(getFormDateAsObj()) < 18 ? true : false;
}

console.log('age', getAge(getFormDateAsObj()));
console.log('is minor', isCurrentVisitorMinor());
