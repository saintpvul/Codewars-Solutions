/*

What is your favourite day of the week? Check if it's the most frequent day of the week in the year.

You are given a year as integer (e. g. 2001). You should return the most frequent day(s) of the week in that year. The result has to be a list of days sorted by the order of days in week (e. g. ['Monday', 'Tuesday'], ['Saturday', 'Sunday'], ['Monday', 'Sunday']). Week starts with Monday.

Input: Year as an int.

Output: The list of most frequent days sorted by the order of days in week (from Monday to Sunday).

Preconditions:

Week starts on Monday.
Year is between 1583 and 4000.
Calendar is Gregorian.
Examples (input -> output):
* 2427 -> ['Friday']
* 2185 -> ['Saturday']
* 2860 -> ['Thursday', 'Friday']

*/

// solution

function getWeek(day) {
    if (day === 1) {
        return "Monday";
    } else if (day === 2) {
        return "Tuesday";
    } else if (day === 3) {
        return "Wednesday";
    } else if (day === 4) {
        return "Thursday";
    } else if (day === 5) {
        return "Friday";
    } else if (day === 6) {
        return "Saturday";
    } else {
        return "Sunday";
    }
}

function mostFrequentDays(year) {
    let days = [];
    let first = new Date(year, 0, 1);
    let end = new Date(year, 11, 31);
    let f = first.getDay() === 0 ? 7 : first.getDay();
    let e = end.getDay() === 0 ? 7 : end.getDay();

    if (f === e) {
        days.push(getWeek(f));
    } else {
        if (f > e) {
            let tmp = f;
            f = e;
            e = tmp;
        }
        days.push(getWeek(f));
        days.push(getWeek(e));
    }

    return days;
}
