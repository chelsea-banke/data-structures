/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n, queries) {
    // Write your code here
    let arr = new Array(n).fill(0)
    for(let i=0; i<queries.length; i++){
        for(let j=queries[i][0]-1; j<queries[i][1]; j++){
            arr[j]+=queries[i][2]
        }
    }
    return Math.max(...arr)
}