function bracketBalancer(string) {
  // const openers = ["[", "{", "("];
  // const closers = ["]", "}", ")"];
  const stack = string.split("");
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{"
  };
  var previous_openers = [];
  this.isBalanced = function() {
    if (Object.keys(pairs).includes(stack[0]) || stack.length == 1) {
      return false;
    }
    for (var i = 0, len = stack.len; i < len; i++) {
      if (Object.values(pairs).includes(stack[i])) {
        previous_openers.push(stack[i]);
      } else if (pairs[stack[i]] == previous_openers[previous_openers.length - 1]) {
        previous_openers.pop();
      } else {
        return false;
      }
    }
    return true;
  };
}

module.exports = bracketBalancer;
