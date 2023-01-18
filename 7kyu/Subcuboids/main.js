/*

Your Task
You have a cuboid with dimensions x,y,z ∈ ℕ. The values of x, y, and z are between 1 and 10^9. A subcuboid of this cuboid has dimensions length, width, height ∈ ℕ where 1≤length≤x, 1≤width≤y, 1≤height≤z. If two subcuboids have the same length, width, and height, but they are at different positions within the cuboid, they are distinct. Find the total number of subcuboids for the given cuboid.

Examples
See sample tests and the image below

27 subcuboids for a 2×2×2 cuboid
subcuboids(2,2,2)

*/

// solution

function subcuboids(x, y, z) {
  return (z * y * x * (z + 1n) * (y + 1n) * (x + 1n)) / 8n;
}
