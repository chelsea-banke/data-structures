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

function inOrder(root) {
	let arr = []
    function rec(node){
        if(node){
            arr.push(node.data)
            rec(node.left)
            rec(node.right)
        }
    }
    rec(root)
    console.log(arr.sort((a, b)=> a - b).join(' '))
}