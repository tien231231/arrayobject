// console.log(uniqArrayObject([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }] ));
//5.6
/**
 *
 * @param {String} str
 * @returns
 */
const trim = (str) => {
  let aray =  str.split(" ")
  let kq = []
  for(let i = 0;i<aray.length;i++){
    if(aray[i].length>1){
      kq.push(aray[i])
    }
  }
  return kq.join(" ")
};
console.log(trim("   hello     tien"));
module.exports = trim