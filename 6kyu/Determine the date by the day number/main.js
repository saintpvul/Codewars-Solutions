/*

What date corresponds to the nth day of the year?
The answer depends on whether the year is a leap year or not.

Write a function that will help you determine the date if you know the number of the day in the year, as well as whether the year is a leap year or not.
The function accepts the day number and a boolean value isLeap as arguments, and returns the corresponding date of the year as a string "Month, day".
Only valid combinations of a day number and isLeap will be tested.

Examples:
* With input `41, false` => return "February, 10"
* With input `60, false` => return "March, 1
* With input `60, true` => return "February, 29"
* With input `365, false` => return "December, 31"
* With input `366, true` => return "December, 31"


*/

// solution

function getDay(day, isLeap) {
    let count = day;
    switch (true) {
        case day > 0 && day <= 31:
            return `January, ${count}`;
        case day > 31 && day <= (isLeap ? 60 : 59):
            count -= 31;
            return `February, ${count}`;
        case day > (isLeap ? 60 : 59) && day <= (isLeap ? 91 : 90):
            count -= isLeap ? 60 : 59;
            return `March, ${count}`;
        case day > (isLeap ? 91 : 90) && day <= (isLeap ? 121 : 120):
            count -= isLeap ? 91 : 90;
            return `April, ${count}`;
        case day > (isLeap ? 121 : 120) && day <= (isLeap ? 152 : 151):
            count -= isLeap ? 121 : 120;
            return `May, ${count}`;
        case day > (isLeap ? 152 : 151) && day <= (isLeap ? 182 : 181):
            count -= isLeap ? 152 : 151;
            return `June, ${count}`;
        case day > (isLeap ? 182 : 181) && day <= (isLeap ? 213 : 212):
            count -= isLeap ? 182 : 181;
            return `July, ${count}`;
        case day > (isLeap ? 213 : 212) && day <= (isLeap ? 244 : 243):
            count -= isLeap ? 213 : 212;
            return `August, ${count}`;
        case day > (isLeap ? 244 : 243) && day <= (isLeap ? 274 : 273):
            count -= isLeap ? 244 : 243;
            return `September, ${count}`;
        case day > (isLeap ? 274 : 273) && day <= (isLeap ? 305 : 304):
            count -= isLeap ? 274 : 273;
            return `October, ${count}`;
        case day > (isLeap ? 305 : 304) && day <= (isLeap ? 335 : 334):
            count -= isLeap ? 305 : 304;
            return `November, ${count}`;
        case day > (isLeap ? 335 : 334) && day <= (isLeap ? 366 : 365):
            count -= isLeap ? 335 : 334;
            return `December, ${count}`;
    }
}
