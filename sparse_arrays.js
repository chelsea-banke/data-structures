/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY stringList
 *  2. STRING_ARRAY queries
 */

function matchingStrings(stringList, queries) {
    // Write your code here
    let countArr = new Array(queries.length).fill(0)
    for(let i=0; i<queries.length; i++){
        stringList.map(string => {
            if(string == queries[i]){
                countArr[i]+=1
            }
        })
    }
    return countArr
}