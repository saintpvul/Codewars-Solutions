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
