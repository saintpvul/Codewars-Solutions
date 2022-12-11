/*

Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

*/

// solution

const initializeNames = (name) =>
  name.split(" ").length > 2
    ? name
        .split(" ")
        .map((e, i) =>
          i > 0 && i < name.split(" ").length - 1 ? e.slice(0, 1) + "." : e
        )
        .join(" ")
    : name;
