/*

Task
Given a plane and numbers on or around that plane, return the coordinates of those numbers.

Input
plane: a string, representing a plane in 2D perspective. The string is delimited by newline '\n' and each line has the same length. The string contains numbers, ranging from 0 to at most 9. There will be at least 1 and at most 10 numbers in the string. Numbers will not contain gaps and always start with 0. If, for instance, there are 3 numbers, they will be [0, 1, 2]. Those numbers can be in the plane or around it. The coordinate system around the plane is the same as in the plane.
Output
return an array of 2-ples, with each 2-ple representing the Y- and X-coordinates of the corresponding number in that array. For instance, [[0, 0], [1, 0]] represents coordinates [0, 0] for number 0 and coordinates [1, 0] for number 1.
Coordinate System
The plane is a 2D perspective of a 2D plane, with Y-coordinates going ↗ (length) an X-coordinates going → (width).

2D perspective of a plane

    / / / /       Y-coords ↗
   / / / /        X-coords →
  / / / /
The zero point [0, 0] is located at the bottom left edge, this point is anchored to our view of the plane.

Zero point

    / / / /       p -> [0, 0]
   / / / /       
  /p/ / /
Points across the Y-axis have the same X-coordinate.

Points across Y-axis
  
    /2/ / /       0 -> [0, 0]
   /1/ / /        1 -> [1, 0]
  /0/ / /         2 -> [2, 0]
      
Points across the X-axis have the same Y-coordinate.

Points across Y-axis
  
    / / / /       0 -> [0, 0]
   / / / /        1 -> [0, 1]
  /0/1/2/         2 -> [0, 2]
      
Points can be outside the plane, but only their X-coordinates, the Y-range is fixed. We should look at it from a rectangular frame. All points within that frame are eligible, if they do not collide with a raster or location where an extended raster would be.

Points outside of the plane                 Rectangular frame around the plane
  
   1/ / / /     0 -> [1, -1]                +-/-/-/-/       - -> all valid locations for points
  0/ / / /3     1 -> [2, -1]                -/-/-/-/-       + -> all invalid locations for points 
  / / / /2      2 -> [0, 3]                 /-/-/-/-+
                3 -> [1, 3]
      
You will always receive a valid plane and valid points. Examples of invalid situations:

Points cannot be on the raster, or outside the plane where the raster would be if we extend the plane
  
    / / 1 /     0 -> invalid, point on raster
   0 / / /      1 -> invalid, point on raster  
  / / / / 2     2 -> invalid, point on raster  
  
Points cannot be out of bounds of Y-axis

     1          1 -> invalid, Y too big
   / / /
  / / /
  0             0 -> invalid, Y too low
  
The plane is not aligned properly to the bottom-left edge

   / / /
  / / /
0/ / /          0 -> invalid, the raster should be here

*/

// solution
