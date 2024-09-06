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

function treeHeight(root) {
    let max = 0
    function rec(node, h){
        if(node){
            h+=1
            rec(node.left, h)
            rec(node.right, h)
        }
        else{
            if(h-1 > max){
                max = h-1
            }
        }
    }
    rec(root, max)
    return max
}