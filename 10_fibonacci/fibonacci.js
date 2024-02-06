const fibonacci = (function () {
    let memo = [0, 1];
    let fib = function (n) {
        if (n < 0) {
            return "OOPS"
        }
        
        let result = memo[n];
        if (typeof result !== "number") {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    };
    return fib;
})();

// Do not edit below this line
module.exports = fibonacci;
