const chuck =(arr,index)=>{
    let kq = []
    let temp = []
    for (let i = 0; i < arr.length; i++) {
       
            temp.push(arr[i])
            
        if(temp.length==index){
            kq.push(temp)
            temp = []
        }
        
    }
    kq.push(temp)
    return kq
}
console.log(chuck([1,2,3,4,5,4,6,7],3))

module.exports = chuck