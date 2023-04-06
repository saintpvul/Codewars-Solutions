/*

Get the list of integers for Codewars Leaderboard score (aka Honor) in descending order

Note:
if it was the bad timing, the data could be updated during your test cases.
Try several times if you had such experience.

*/

// solution

async function getLeaderboardHonor() {
    const response = await fetch("https://www.codewars.com/users/leaderboard");
    const body = await response.text();

    const regex = /<td class="honor">(\d+,{0,1}\d*)<\/td>/g;
    const honorList = [];

    let match = regex.exec(body);
    while (match !== null) {
        honorList.push(parseInt(match[1].replace(",", ""), 10));
        match = regex.exec(body);
    }

    return honorList;
}
