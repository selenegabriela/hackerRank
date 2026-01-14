// ========== TreeNode ==========
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// ========== Build tree from array (LeetCode style) ==========
// Usa null para indicar ausencia de nodo
function buildTree(arr) {
    if (!arr.length) return null;

    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (i < arr.length) {
        let current = queue.shift();

        if (arr[i] != null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;

        if (i < arr.length && arr[i] != null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
}

// ========== Your solution (fixed) ==========
const goodNodes = (root) => {
    let count = 0;

    const dfs = (root,maxVal) => {
        if(!root) return null;

        if(root.val >= maxVal) count++;

        maxVal = Math.max(maxVal,root.val);

        dfs(root.left,maxVal);
        dfs(root.right,maxVal);
    }

    dfs(root,root.val);
    return count;
};

// ========== Quick test ==========
const tree = buildTree([3, 1, 4, 3, null, 1, 5]); 
console.log(goodNodes(tree)); // debería imprimir 4
