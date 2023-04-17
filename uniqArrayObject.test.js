//5.4(notdone)

/**
 *
 * @param {Array} arr
 * @returns
 */
const uniq = (arr) => {
  let kq = []
  let t = []
  for(let i = 0;i<arr.length;i++){
    console.log(JSON.stringify(arr[i]));

  }
  return kq

};
console.log(uniq([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }] ));
module.exports = uniq