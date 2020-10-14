module.exports = function check (str, bracketsConfig) {
    let openBrackets = [];
    let closeBrackets = [];
    bracketsConfig.map (bracketsPair => {
        openBrackets.push(bracketsPair[0]);
        closeBrackets.push(bracketsPair[1]);
    });

    let stack = [];
    for (let item of str) {
        if (stack[0] === item) {
            stack.shift();
        } else if ((openBrackets.indexOf(item) > -1)) {
            stack.unshift(closeBrackets[openBrackets.indexOf(item)]);
        } else {
            return false;
        }
    }
    return (stack.length === 0);
}