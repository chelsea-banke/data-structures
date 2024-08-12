/*
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function reverseArray(a) {
    // Write your code here
    let r = new Array(a.length).fill(0)
    let i = 1
    a.map(e=>{
            r[a.length-i]=e
            i++
        }
    )
    return r
}