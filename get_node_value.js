/*
 * Complete the 'getNode' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER positionFromTail
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function getNode(llist, positionFromTail) {
    // Write your code here
    let arr = []
    let curr = llist
    while(curr != null){
        arr.push(curr.data)
        curr = curr.next
    }
    return arr[arr.length-1 - positionFromTail]
}