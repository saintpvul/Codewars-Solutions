/*

Generate a valid randomly generated hexadecimal color string. Assume all of them always have 6 digits.

Valid Output
#ffffff
#FfFfFf
#25a403
#000001
Non-Valid Output
#fff
#aaa
#zzzzz
cafebabe
#a567567676576756A7

*/

// solution

var generateColor = function () {
    let random = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + random;
};
