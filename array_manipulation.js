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
        arr[queries[i][0]-1] += queries[i][2]
        arr[queries[i][1]] -= queries[i][2]
    }
    let max = 0
    let current = 0
    for(let i=0; i<n; i++){
        arr[i] += current
        current = arr[i]
        if(current > max){
            max = current
        } 
    }
    return max
}