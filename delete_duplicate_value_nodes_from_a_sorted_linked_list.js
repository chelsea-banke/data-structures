/*
 * Complete the 'removeDuplicates' function below.
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

function removeDuplicates(llist) {
    // Write your code here
    let ullist = null
    let c1 = llist
    let c2 = null
    let prev
    let count = 0
    while(c1 != null){
        if(count == 0){
            ullist = {data: c1.data, next: null}
            c2 = ullist
            prev = c1.data
            c1 = c1.next
            count++
        }
        else{
            let curr = c1.data
            if(curr != prev){
                c2.next = {data: curr, next:null}
                c2 = c2.next
                prev = curr
            }
            c1 = c1.next
        }
    }
    return ullist
}