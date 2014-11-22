# grunt-showdown

> Showdown grunt plugin

Grunt plugin to convert Markdown documents into HTML using the [showdown](https://github.com/showdownjs/showdown) library.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-showdown --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-showdown');
```

## The "showdown" task

### Overview
In your project's Gruntfile, add a section named `showdown` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  showdown: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.extensions
Type: `Array[String]`
Default value: `[]`

List of [built-in showdown extensions](https://github.com/showdownjs/showdown/tree/master/src/extensions) in String format.

This list is directly passed to the showdown library.

#### options.customExtensions
Type: `Array[String]`
Default value: `[]`

List of custom showdown extensions which will be loaded as node modules and passed to the showdown converter.

### Usage Examples

#### Default Options
In this example, the default options are used to convert markdown document with no extra showdown extension.

```js
grunt.initConfig({
  showdown: {
    options: {
        extensions: ['github','table'],
        customExtensions: ['showdown-furigana-extension']
    },
    files: [
        {
            cwd: 'src/md',
            src: ['**/*.md'],
            dest: 'dist/'
        }
    ],
  },
});
```

#### Custom Options
In this example, custom options are used to do convert markdown documents with built-in `github` and `table` extensions,
plus a custom extension `showdown-furigana-extension`.

```js
grunt.initConfig({
  showdown: {
    options: {
        extensions: ['github','table'],
        customExtensions: ['showdown-furigana-extension']
    },
    files: [
        {
            cwd: 'src/md',
            src: ['**/*.md'],
            dest: 'dist/'
        }
    ],
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 1.0.1 - Support cwd file option + unit tests
* 1.0.0 - Init project. Custom showdown extension support
