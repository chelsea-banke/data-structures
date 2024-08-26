/*
 * Complete the 'reverse' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
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

function reverse(llist) {
    // Write your code here
    let list = []
    let curr = llist
    while(curr != null){
        list.push(curr.data)
        curr = curr.next
    }
    curr = llist
    for(let i=list.length-1; i>=0; i--){
        curr.data = list[i]
        curr = curr.next
    }
    return llist
}