
// Complete the CompareLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function CompareLists(llist1, llist2) {
    let c1 = llist1
    let c2 = llist2
    while(true){
        if(c1==null || c2==null){
            if(c1 == c2){
                return 1
            }
            else{
                return 0
            }
        }
        else{
            if(c1.data == c2.data){
                c1 = c1.next
                c2 = c2.next
            }
            else{
                return 0
            }
        }
    }
}