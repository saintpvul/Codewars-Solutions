/*

In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

Good Luck!

Note
1 Dollar = 100 Cents



*/

// solution

const fuelPrice = (litres, pricePerLitre) =>
  +(
    litres > 9
      ? litres * pricePerLitre - 0.25 * litres
      : litres < 10 && litres > 7
      ? litres * pricePerLitre - 0.2 * litres
      : litres < 8 && litres > 5
      ? litres * pricePerLitre - 0.15 * litres
      : litres < 6 && litres > 3
      ? litres * pricePerLitre - 0.1 * litres
      : litres < 4 && litres > 1
      ? litres * pricePerLitre - 0.05 * litres
      : litres * pricePerLitre
  ).toFixed(2);
