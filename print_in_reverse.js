/*
 * Complete the 'reversePrint' function below.
 *
 * The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
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

function reversePrint(llist) {
    // Write your code here
    let list = []
    let curr = llist
    while(curr != null){
        list.push(curr.data)
        curr = curr.next
    }
    for(let i=list.length-1; i>=0; i--){
        console.log(list[i])
    }
}