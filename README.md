# grunt-rapydscript

> Grunt plugin task to handle compiling rapydscript to javascript.

## Getting Started
This plugin requires Grunt and RapydScript.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install git://github.com/loolmeh/grunt-rapydscript.git --save-dev
npm install -g rapydscript
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-rapydscript');
```

## The "rapydscript" task

### Overview
In your project's Gruntfile, add a section named `rapydscript` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  rapydscript: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.IE8
Type: `Boolean`
Default value: `false`

Sets the following flag:

```
--screw-ie8              Pass this flag if you don't care about full
                         compliance with Internet Explorer 6-8 quirks (by
                         default RapydScript will try to be IE-proof).

```

#### options.bare
Type: `Boolean`
Default value: `false`

Sets the following flag:

```
-b, --bare               Remove the module wrapper that prevents RapydScript
                         scope from bleeding into other JavaScript logic.
```

#### options.namespace
Type: `Boolean`
Default value: `false`

Sets the following flag:

```
-n, --namespace-imports  Import files into separate modules like Python
                         instead of concatenating them [experimental].
```

#### options.autobind
Type: `Boolean`
Default value: `false`

Sets the following flag:

```
-i, --auto-bind          Automatically bind function methods to functions
                           themselves instead of using @bound decorator
                           [experimental].
```

#### options.prettify
Type: `Boolean`
Default value: `true`

Sets the following flag:

```
-p, --prettify           Prettify output/specify output options.
```

#### options.omitbase
Type: `Boolean`
Default value: `false`

Sets the following flag:

```
-m, --omit-baselib       Omit baselib functions (use this if you have a
                           different way of ensuring they're imported, such as
                           including baselib.js).
```

#### options.runtests
Type: `Boolean`
Default value: `false`

Sets the following flag:

```
-t, --test               Run RapydScript tests
```

#### options.comments
Type: `Boolean`
Default value: `true`

Sets the following flag:

```
  --comments               Preserve copyright comments in the output. By
                           default this works like Google Closure, keeping
                           JSDoc-style comments that contain "@license" or
                           "@preserve". You can optionally pass one of the
                           following arguments to this flag:
                           - "all" to keep all comments
                           - a valid JS regexp (needs to start with a slash) to
                           keep only comments that match.
                           Note that currently not *all* comments can be kept
                           when compression is on, because of dead code removal
                           or cascading statements into sequences.      [string]
```

#### options.stats
Type: `Boolean`
Default value: `true`

Sets the following flag:

```
--stats                  Display operations run time on STDERR.
```

#### options.verbose
Type: `Boolean`
Default value: `true`

Sets the following flag:

```
-v, --verbose            Verbose
```

### Usage Examples

#### Example Config

see the Gruntfile.js in this project for a working default config.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
- 2014-08-10    v0.0.1  initial release

## License
Copyright (c) 2014 loolmeh. Licensed under the MIT license.
