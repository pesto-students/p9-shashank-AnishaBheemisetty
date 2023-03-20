
var maxDepth = function(root) {
    return helper(root, 0);
  };
  
  var helper = function (root, level) {
    if (!root) return level;
    return Math.max(helper(root.left, level + 1), helper(root.right, level + 1));
  };
  
  
  
  