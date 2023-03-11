/*

Input: Integer n
Output: String
Example:

a(4) prints as

   A   
  A A  
 A A A 
A     A
a(8) prints as

       A       
      A A      
     A   A     
    A     A    
   A A A A A   
  A         A  
 A           A 
A             A
a(12) prints as

           A           
          A A          
         A   A         
        A     A        
       A       A       
      A         A      
     A A A A A A A     
    A             A    
   A               A   
  A                 A  
 A                   A 
A                     A
Note:

Each line's length is 2n - 1
Each line should be concatenate by line break "\n"
If n is less than 4, it should return ""
If n is odd, a(n) = a(n - 1), eg a(5) == a(4); a(9) == a(8)

*/

// solution

function a(n) {
    if (n < 4) return "";
    if (n % 2 != 0) n--;
    let a = "",
        len = 2 * n - 1,
        mid = ~~(len / 2);
    for (let i = 1; i <= n; i++) {
        let start = mid - i + 2,
            end = mid + i;
        if (i == 1) (start = mid + 1), (end = mid + 1);
        for (let j = 1; j <= len; j++) {
            if (i == ~~(n / 2 + 1)) {
                a += j >= start && j <= end && start % 2 == j % 2 ? "A" : " ";
            } else {
                a += j == start || j == end ? "A" : " ";
            }
        }
        if (i != n) a += "\n";
    }
    return a;
}
