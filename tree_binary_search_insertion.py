class Node:
    def __init__(self, info):
        self.info = info  
        self.left = None  
        self.right = None 
        self.level = None 

    def __str__(self):
        return str(self.info) 

def preOrder(root):
    if root == None:
        return
    print (root.info, end=" ")
    preOrder(root.left)
    preOrder(root.right)
    
class BinarySearchTree:
    def __init__(self): 
        self.root = None

#Node is defined as
#self.left (the left child of the node)
#self.right (the right child of the node)
#self.info (the value of the node)

    def insert(self, val):
        #Enter you code here.
        if self.root:
            def recc(node, val):
                if node:
                    if val < node.info:
                        if (recc(node.left, val)):
                            node.left = Node(val)
                    else:
                        if (recc(node.right, val)):
                            node.right = Node(val)
                else:
                    return True
            recc(self.root, val)   
        else:
            self.root = Node(val)       
        return self.root
        
tree = BinarySearchTree()
t = int(input())

arr = list(map(int, input().split()))

for i in range(t):
    tree.insert(arr[i])

preOrder(tree.root)
