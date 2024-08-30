// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
    if (head1 == null && head2 != null){
        return head2
    }
    else if (head2 == null && head1 != null){
        return head1
    }
    else{
        let c1 = head1
        let c2 = head2
        let arr = []
        while(c1!=null || c2!=null){
            if(c1 == null){
                arr.push(c2.data)
                c2 = c2.next
            }
            else if(c2 == null){
                arr.push(c1.data)
                c1 = c1.next   
            }
            else{
                arr.push(c1.data)
                arr.push(c2.data)
                c1 = c1.next
                c2 = c2.next
            }
        }
        arr = arr.sort((a, b) => a-b)
        let head3 = {data: arr[0], next:null}
        let c3 = head3
        for(let i=1; i<arr.length; i++){
            c3.next = {data: arr[i], next: null}
            c3 = c3.next
        }
        return head3
    }
}