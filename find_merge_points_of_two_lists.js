/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function findMergeNode(headA, headB) {
    let ca = headA
    while(ca != null){
        let cb = headB
        while(cb != null){
            if(ca == cb){
                return cb.data
            }
            cb = cb.next
        }
        ca = ca.next
    }
}