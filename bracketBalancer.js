function bracketBalancer(string) {
  // const openers = ["[", "{", "("];
  // const closers = ["]", "}", ")"];
  const brackets = string.split("");
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{"
  };
  var stack = [];
  this.isBalanced = function() {
    if (Object.keys(pairs).includes(brackets[0]) || brackets.length == 1) {
      return false;
    }
    for (var i = 0; i < brackets.length; i++) {
      if (Object.values(pairs).includes(brackets[i])) {
        stack.push(brackets[i]);
      } else if (stack.length == 0) {
        return false
      } else if (pairs[brackets[i]] == stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
    return true;
  };
}

module.exports = bracketBalancer;
