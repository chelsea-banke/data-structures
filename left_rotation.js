/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {
    // Write your code here
    let rotArr = new Array(arr.length).fill(0)
    for(let i=0; i<arr.length; i++){
        let rot = i-d
        if(rot < 0){
            rotArr[rot + arr.length] = arr[i]
        }
        else{
            rotArr[rot] = arr[i]
        }
    }
    return rotArr
}