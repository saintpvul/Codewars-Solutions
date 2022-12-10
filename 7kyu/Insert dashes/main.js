/*

Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).

*/

// solution

function insertDash(num) {
  num = num.toString().split('')
  let res = []
  for(let i = 0; i < num.length; i++){
    if(num[i] % 2 && num[i+1] % 2){
    res.push((num[i] + '-'))
    }else{
      res.push(num[i])
    }
  }
  return res.join('')
}
