/*

Peter can see a clock in the mirror from the place he sits in the office. When he saw the clock shows 12:22

1
2
3
4
5
6
7
8
9
10
11
12
He knows that the time is 11:38

1
2
3
4
5
6
7
8
9
10
11
12
in the same manner:

05:25 --> 06:35

01:50 --> 10:10

11:58 --> 12:02

12:01 --> 11:59

Please complete the function WhatIsTheTime(timeInMirror), where timeInMirror is the mirrored time (what Peter sees) as string.

Return the real time as a string.

Consider hours to be between 1 <= hour < 13.

So there is no 00:20, instead it is 12:20.

There is no 13:20, instead it is 01:20.

*/

// solution

function WhatIsTheTime(timeInMirror) {
    timeInMirror = timeInMirror.split(":");
    let hour = +timeInMirror[0],
        minute = +timeInMirror[1];

    let hour1, minute1;
    if (hour < 11) {
        hour1 = 11 - hour;
    } else {
        hour1 = 23 - hour;
    }
    minute1 = 60 - minute;
    if (minute1 == 60) {
        minute1 -= 60;
        hour1 += 1;
    }
    if (hour1 > 12) {
        hour1 -= 12;
    }
    let ans = "";
    if (hour1 > 9) {
        ans = hour1 + ":";
    } else {
        ans = "0" + hour1 + ":";
    }
    if (minute1 > 9) {
        ans += minute1;
    } else {
        ans += "0" + minute1;
    }
    return ans;
}
