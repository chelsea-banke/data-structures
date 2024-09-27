function decodeHuffman(root, s){
    let arr = []
    let curr = root
    for (let i in s){
        if (i == '0'){
            curr =  curr.left           
        }
        else if(i == '1'){
            curr = curr.right
        }
        if (!(curr.left && curr.right)){
            arr.push(curr.data)
            curr = root
        }
    }
    console.log(arr.join(''))
}