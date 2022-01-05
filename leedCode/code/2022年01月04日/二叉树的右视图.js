var rightSideView = function(root) {
    if(root==null)
        return []
    var arr=[]
    var res=[]
    arr.push(root)

    while(arr.length>0){
        res.push(arr[arr.length-1].val)
        var len=arr.length
        while(len>0){
            var now=arr.shift()
            if(now.left!=null)
                arr.push(now.left)
            if(now.right!=null)
                arr.push(now.right)
            len--
        }
    }
    return res

};