(function(){
    var factorial;
    function factorial(n) {
        if (n == 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    factorial = function(n) {
        if (n == 0) {
            return 1;
        }
        return n * factorial(n - 1);
    };
})();