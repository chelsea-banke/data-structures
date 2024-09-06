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

function postOrder(root) {
    let arr = []
	function rec(node){
        if(node){
            if(node.left){
                rec(node.left)
            }
            if(node.right){
                rec(node.right)
            }
            arr.push(node.data)
        }
    }
    rec(root)
    console.log(arr.join(' '))
}