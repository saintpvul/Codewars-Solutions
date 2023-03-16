/*

You must create a method that can convert a string from any format into PascalCase. This must support symbols too.

Don't presume the separators too much or you could be surprised.

For example: (Input --> Output)

"example name" --> "ExampleName"
"your-NaMe-here" --> "YourNameHere"
"testing ABC" --> "TestingAbc"

*/

// solution

const camelize = (string) =>
    string
        .split(/([^a-zA-Z0-9])/g)
        .map((x) =>
            /^[a-zA-Z0-9]+$/.test(x)
                ? x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()
                : ""
        )
        .join("");
