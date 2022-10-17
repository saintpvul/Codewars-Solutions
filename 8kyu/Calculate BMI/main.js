/*

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/

// solution

function bmi(weight, height) {
  let res = (weight / (height * height)).toFixed(1);
  if (res <= 18.5) return "Underweight";
  if (res <= 25.0 && res > 18.5) return "Normal";
  if (res <= 30.0 && res > 25.0) return "Overweight";
  if (res > 30) return "Obese";
}

console.log(bmi(80, 1.8));
