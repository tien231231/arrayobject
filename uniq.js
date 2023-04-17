//5.3 uniq
/**
 *
 * @param {Array} arr
 * @returns
 */
const uniq = (arr) => {
  let kq = []
  for(let i = 0;i<arr.length;i++){
    if(!kq.includes(arr[i])){
      kq.push(arr[i])
    }
  }
  return kq

};
console.log(uniq([1,2,3,3,3,4,5]));
module.exports = uniq