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
