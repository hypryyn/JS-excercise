function checkLeapYear(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

const year = 2024;

checkLeapYear(year);

function checkLeapYear(year1) {

    const leap = new Date(year1, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year1 + ' is a leap year');
    } else {
        console.log(year1 + ' is not a leap year');
    }
}

const year1 = 2002;

checkLeapYear(year1);