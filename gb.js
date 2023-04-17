//5.5
const gb = (arr,index) =>{
  let opjectkq = {}
  let arrayvalue = []
  let target 
  for(let i =0;i<arr.length;i++){
    target = arr[i][index]
    if((target in opjectkq)){
      opjectkq[target].push(arr[i])
      }
    else if(!(target in opjectkq)){
      
      arrayvalue.push(arr[i])
      opjectkq[target]=arrayvalue
      arrayvalue=[]
    }
  }
  
  return opjectkq
}

console.log( gb([{a: 1, b: 2}, {a: 2, b: 3}, {a: 1, b: 3},{a:1,b:6}], 'a') );

module.exports = gb