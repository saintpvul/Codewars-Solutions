/*

You are given an array of strings that need to be spread among N columns. Each column's width should be the same as the length of the longest string inside it.

Separate columns with " | ", and lines with "\n"; content should be left-justified.

{"1", "12", "123", "1234", "12345", "123456"} should become:

1     
12    
123   
1234  
12345 
123456
for 1 column,

1     | 12    
123   | 1234  
12345 | 123456
for 2 columns,

1     | 12     | 123 | 1234
12345 | 123456
for 4 columns.

*/

// solution

function columnize(items, n) {
    const elements = new Array(n).fill(0);
    const rows = items.reduce((acc, cur, i) => {
        const j = i % n;

        if (j === 0) {
            acc.push([]);
        }

        acc[acc.length - 1].push(cur);
        elements[j] = Math.max(cur.length, elements[j]);

        return acc;
    }, []);

    return rows
        .map((row) =>
            row.map((col, i) => col.padEnd(elements[i], " ")).join(" | ")
        )
        .join("\n");
}
