/**
 * 1
 * @param {Array} arr
 * @returns
 */
function reverse(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]) 
  }
  return reversed;
}

console.log(reverse([1,2,3,5,6]));
module.exports = reverse
