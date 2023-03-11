/*

Third day at your new cryptoanalyst job and you come across your toughest assignment yet. Your job is to implement a simple keyword cipher. A keyword cipher is a type of monoalphabetic substitution where two parameters are provided as such (string, keyword). The string is encrypted by taking the keyword, dropping any letters that appear more than once. The rest of the letters of the alphabet that aren't used are then appended to the end of the keyword.

For example, if your string was "hello" and your keyword was "wednesday", your encryption key would be 'wednsaybcfghijklmopqrtuvxz'.

To encrypt 'hello' you'd substitute as follows,

              abcdefghijklmnopqrstuvwxyz
  hello ==>   |||||||||||||||||||||||||| ==> bshhk
              wednsaybcfghijklmopqrtuvxz
hello encrypts into bshhk with the keyword wednesday. This cipher also uses lower case letters only.

Good Luck.



*/

// solution

function keywordCipher(string, keyword) {
    const alph = "abcdefghijklmnopqrstuvwxyz ";

    let cipher = "",
        res = "";

    keyword = keyword
        .split("")
        .filter((c, index, arr) => arr.indexOf(c) === index)
        .join("");

    for (let i = 0; i < alph.length; i++) {
        if (!keyword.includes(alph[i])) {
            cipher += alph[i];
        }
    }

    cipher = keyword + cipher;

    for (let i = 0; i < string.length; i++) {
        res += cipher[alph.indexOf(string[i].toLowerCase())];
    }

    return res;
}
