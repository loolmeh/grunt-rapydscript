(function(){
    var grunt;
    grunt = require("grunt");
    exports.rapydscript = {
        compile: function(test) {
            var pyj, js;
            pyj = grunt.file.read("test/fixtures/test.js");
            js = grunt.file.read("test/expected/test.js");
            test.equal(pyj, js, "should compile to js");
            test.done();
        }
    };
})();