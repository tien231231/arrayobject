//5.7
const mapkey = (arr,key) =>{
    let aray = []
    let opject = {}
    for(let j = 0;j<arr.length;j++){
        for(let i =0;i<key.length;i++){
        
        
        opject[key[i]]=arr[j][key[i]]
    }
    aray.push(opject)
    opject={}
    
    }
    return aray
}
console.log(mapkey([{a: 1, b: 1, c: 2, d: 4, e: 5}, {a: 2, b:1, c: 5, d: 4, e: 5}, {d: 4, e: 5, a: 22, b:11, c: 51, }],["c","b","a"]));
module.exports = mapkey