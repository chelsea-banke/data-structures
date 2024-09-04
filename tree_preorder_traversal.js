/*
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function preOrder(root) {
    let arr = []
    let rec = function(curr){
        if(curr){
            arr.push(curr.data)
            if(curr.left){
                rec(curr.left)
                rec(curr.right)
            }
            else if(curr.right){
                rec(curr.right)
            }   
        }
    }
    rec(root)
    console.log(arr.join(' '))
}