//5.8 
/**
 *
 * @param {Array} arr
 * @param {Number} id
 * @param {Number} order
 * @returns
 */
const swithorder = (arr, id, order) => {
  let temp;
  let pid;
  let porder;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == id) {
      pid = i;

      temp = {...arr[i]};
    }
    if (arr[i].order == order) {
      porder = i;
    }
  }
  arr[pid].id = arr[porder].id 
  arr[porder].id = temp.id 
  return(arr);
};
console.log(swithorder([
  { id: 10, order: 0 },
  { id: 12, order: 1 },
  { id: 9, order: 2 },
  { id: 3, order: 3 },
],
10,
3));



module.exports = swithorder;
