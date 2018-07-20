function bracketBalancer(string) {
  const openers = ["[", "{", "("];
  const closer = ["]", "}", ")"];
  const stack = string.split("");
  this.isBalanced = function() {
    if (
      stack[0] == closer[0] ||
      stack[0] == closer[1] ||
      stack[0] == closer[2]
    ) {
      return false;
    }
  };
}

module.exports = bracketBalancer;
