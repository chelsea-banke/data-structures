/*
 * Complete the 'deleteNode' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER position
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

function deleteNode(llist, position) {
    // Write your code here
    if(position==0){
        return llist.next
    }
    let curr = llist
    for(let i=1; i<=position; i++){
        if(i==position){
            curr.next = curr.next.next
        }
        else{
            curr = curr.next
        }
    }
    return llist
}