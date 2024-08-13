/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
    // Write your code here
    let max
    for (let i=0; i<4; i++){
        for (let j=0; j<4; j++){
            let sum = arr[i][0+j]+arr[i][1+j]+arr[i][2+j] + arr[i+1][1+j] + arr[i+2][0+j]+arr[i+2][1+j]+arr[i+2][2+j]
            if((sum > max) || (i==0 && j==0)){
                max = sum
            }
        }
    }
    return max
}