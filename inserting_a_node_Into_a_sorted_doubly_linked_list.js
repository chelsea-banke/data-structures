
/*
 * Complete the 'sortedInsert' function below.
 *
 * The function is expected to return an INTEGER_DOUBLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_DOUBLY_LINKED_LIST llist
 *  2. INTEGER data
 */

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */

function sortedInsert(llist, data) {
    // Write your code here
    let curr = llist
    if(curr.data > data){
        curr = {data: data, prev: null, next: curr}
        curr.next.prev = curr
        return curr
    }
    while(curr != null){
        if(curr.prev && curr.prev.data < data && curr.data > data){
            curr.prev.next = {data: data, prev: curr.prev, next: curr}
            curr = curr.prev.next
            curr.next.prev = curr
            break
        }   
        if(curr.next == null && curr.data < data){
            curr.next = {data: data, prev: curr, next: null}
            break
        }
        curr = curr.next
    }
    
    return llist
}