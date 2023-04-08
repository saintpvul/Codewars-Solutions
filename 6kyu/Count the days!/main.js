/*

Little Annie is very excited for upcoming events. She wants to know how many days she has to wait for a specific event.

Your job is to help her out.

Task: Write a function which returns the number of days from today till the given date. The function will take a Date object as parameter. You have to round the amount of days.

If the event is in the past, return "The day is in the past!"
If the event is today, return "Today is the day!"
Else, return "x days"

PS: This is my first kata. I hope you have fun^^

This kata is part of the Collection "Date fundamentals":

#1 Count the Days!
#2 Minutes to Midnight
#3 Can Santa save Christmas?
#4 Christmas Present Calculator

*/

// solution

function countDays(d) {
    const today = new Date();
    const time = new Date(d);
    const todayCheck = time.toDateString() === today.toDateString();

    if (todayCheck) {
        return "Today is the day!";
    }

    const past = today.getTime() > time.getTime();

    if (past) {
        return "The day is in the past!";
    }

    const diffInMs = time.getTime() - today.getTime();
    const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));

    return `${diffInDays} days`;
}
