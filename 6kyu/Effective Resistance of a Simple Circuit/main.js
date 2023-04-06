/*

Task
Given a circuit with fixed resistors connected in series and/or in parallel, calculate the total effective resistance of the circuit.

All resistors are given in Ω, and the result should be in Ω too (as a float; tested to ± 1e-6). Assume wires have negligible resistance. The voltage of the battery is irrelevant.

The circuit is passed to your function in the following form:

I will define a component as any number of resistors connected in series or in parallel.
The entire circuit counts as a component.
Each component is an array.
A series component will have the boolean true in position zero.
A parallel component will have the boolean false in position zero.
The other positions will either contain:
Numbers, denoting fixed resistors of that resistance.
Arrays, denoting nested components.
A series circuit with no other entries represents a single wire
A parallel circuit with no other entries represents a break in the circuit (see below for more details)
All circuits will be valid and in the form above (short circuits or broken circuits may appear, though)
There will be no negative resistances
Example circuit:

  [
    true, // series
    20, // 20Ω resistor
    [
      false, // parallel
      [
        true, // series
        30, // 30Ω resistor
        40, // 40Ω resistor
      ],
      30, // 30Ω resistor
    ],
    60, // 60Ω resistor
  ]
Looks like:

20 + 1/(1/(30+40)+1/30) + 60 = 101Ω

Short Circuits
It might be the case that the circuit has zero resistance.

We don't want zero resistance, as these cause short circuits!

You should throw an Error instead of returning, with the error message Short Circuit! if this ever happens.

Broken Circuits
It might be the case that all the paths in the circuit have a break in them.

This creates infinite resistance, and in effect a broken circuit!

You should throw an Error instead of returning, with the error message Broken Circuit! if this ever happens.

Example Circuit:

[
  true, // series
  10, // 10Ω resistor
  [
    false, // parallel
    [
      false, // parallel, broken circuit
    ],
    [
      false, // parallel, broken circuit
    ],
  ],
]
Looks like:

Helpful Links
If you don't know or don't remember how to calculate the total effective resistance of a series or parallel circuit, then consult the following two kata.

Series Circuit Kata (myjinxin2015; 7kyu)
Parallel Circuit Kata (myjinxin2015; 7kyu)
Additionally, if you would like to visualise some of the circuits by building them, you can do it online here.

Interactive Circuit Builder (used to create the images above)

*/

// solution
