(function(){
    var path, num_cpus, async, chalk, spawn, which;
    path = require("path");
    num_cpus = require("os").cpus().length || 1;
    async = require("async");
    chalk = require("chalk");
    spawn = require("win-spawn");
    which = require("which");
    module.exports = function(grunt) {
        var check_binary;
        check_binary = function(cmd, msg) {
            try {
                which.sync(cmd);
            } catch (_$rapyd$_Exception) {
                return grunt.warn(msg + "\n");
            }
        };
        grunt.registerMultiTask("rapydscript", "Compile rapydscript to javascript.", function() {
            var cb, options;
            options = this.options({
                IE8: false,
                bare: false,
                prettify: true,
                namespace: false,
                autobind: false,
                omitbase: false,
                comments: true,
                runtests: false,
                stats: true,
                verbose: true,
                doc_strings: false
            });
            cb = this.async();
            options = this.options();
            check_binary("rapydscript", "You need to have rapydscript installed.");
            async.eachLimit(this.files, num_cpus, function(file, next) {
                var input, output, args, bin, cp, src;
                var _$rapyd$_Iter0 = file.src;
                for (var _$rapyd$_Index0 = 0; _$rapyd$_Index0 < _$rapyd$_Iter0.length; _$rapyd$_Index0++) {
                    src = _$rapyd$_Iter0[_$rapyd$_Index0];
                    if (typeof src !== "string") {
                        grunt.log.warn("uh I think you have a messed up configuration, src should be a string");
                        return next();
                    }
                    if (!grunt.file.exists(src)) {
                        grunt.log.warn("Source file" + src + "not found.");
                        return next();
                    }
                    if (path.basename(src)[0] === "_") {
                        return next();
                    }
                    input = src;
                    output = file.dest.replace(/pyj$/, "js");
                    args = [ input, "-o", output ];
                    if (!options.IE8) {
                        args.push("--screw-ie8");
                    }
                    if (options.bare) {
                        args.push("-b");
                    }
                    if (options.namespace) {
                        args.push("-n");
                    }
                    if (options.autobind) {
                        args.push("-i");
                    }
                    if (options.prettify) {
                        args.push("-p");
                    }
                    if (options.omitbase) {
                        args.push("-m");
                    }
                    if (options.comments) {
                        args.push("--comments");
                    }
                    if (options.runtests) {
                        args.push("-t");
                    }
                    if (options.stats) {
                        args.push("--stats");
                    }
                    if (options.verbose) {
                        args.push("-v");
                    }
                    bin = "rapydscript";
                    grunt.verbose.writeln("Command: " + bin + " " + args.join(" "));
                    cp = spawn(bin, args, {
                        stdio: "inherit"
                    });
                    cp.on("error", function(err) {
                        grunt.warn(err);
                    });
                    cp.on("close", function(code) {
                        if (code > 0) {
                            return grunt.warn("Exited with error code " + code);
                        }
                        grunt.verbose.writeln("File " + chalk.cyan(output) + " created.");
                        if (options.doc_strings) {
                            spawn("sed", [ "-i", "/^\\s*\".*\";$/d", output ], {
                                stdio: "inherit"
                            });
                            grunt.verbose.writeln("sed " + [ "-i", "/^\\s*\".*\";$/d", output ].join(" "));
                        }
                        next();
                    });
                }
            }, cb);
        });
    };
})();