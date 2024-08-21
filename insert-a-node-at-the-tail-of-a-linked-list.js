// Complete the insertNodeAtTail function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
    let curr = head
    if(head == null){
        head = {data: data, next: null}
    }
    while(curr != null){
        if(curr.next == null){
            curr.next = {data: data, next: null}
            break
        }
        curr = curr.next
    } 
    return head
}