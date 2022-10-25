/*

Your job is to find the gravitational force between two spherical objects (obj1 , obj2).

input
Two arrays are given :

arr_val (value array), consists of 3 elements
1st element : mass of obj 1
2nd element : mass of obj 2
3rd element : distance between their centers
arr_unit (unit array), consists of 3 elements
1st element : unit for mass of obj 1
2nd element : unit for mass of obj 2
3rd element : unit for distance between their centers
mass units are :

kilogram (kg)
gram (g)
milligram (mg)
microgram (μg)
pound (lb)
distance units are :

meter (m)
centimeter (cm)
millimeter (mm)
micrometer (μm)
feet (ft)
Note
value of G = 6.67 × 10−11 N⋅kg−2⋅m2

1 ft = 0.3048 m

1 lb = 0.453592 kg

return value must be Newton for force (obviously)

μ copy this from here to use it in your solution

*/

// solution

const G = 6.67e-11;

const values = {
  μg: 1e-9,
  mg: 1e-6,
  g: 1e-3,
  lb: 0.453592,
  kg: 1,
  μm: 1e-6,
  mm: 1e-3,
  cm: 1e-2,
  ft: 0.3048,
  m: 1,
};

solution = (arr_val, arr_unit) => {
  let m = arr_val[0] * values[arr_unit[0]] * arr_val[1] * values[arr_unit[1]];
  let r = (arr_val[2] * values[arr_unit[2]]) ** 2;

  return G * (m / r);
};
