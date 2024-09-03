/*
 * Complete the 'reverse' function below.
 *
 * The function is expected to return an INTEGER_DOUBLY_LINKED_LIST.
 * The function accepts INTEGER_DOUBLY_LINKED_LIST llist as parameter.
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

function reverse(llist) {
    // Write your code here
    if(llist == null){
        return llist
    }
    let curr = llist
    let arr = []
    while (curr != null){
        arr.push(curr.data)
        curr = curr.next
    }
    let head = {}
    
    for(let i=arr.length-1; i>=0; i--){
        if(i == arr.length-1){
            head = {data: arr[i], prev: null, next: null}
            curr = head
        }
        else{
            curr.next = {data: arr[i], prev: curr, next: null}
            curr = curr.next
        }
    }
    return head
}