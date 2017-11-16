grunt-showdown
--
> Showdown grunt plugin

Grunt plugin to convert Markdown documents into HTML using the [showdown](https://github.com/showdownjs/showdown) library.

<!-- TOC -->

- [Getting Started](#getting-started)
- [The "showdown" task](#the-showdown-task)
    - [Overview](#overview)
    - [Options](#options)
        - [options.showdown](#optionsshowdown)
        - [options.customExtensions](#optionscustomextensions)
    - [Usage Examples](#usage-examples)
        - [Default Options](#default-options)
        - [Custom Options](#custom-options)
- [Contributing](#contributing)
- [Release History](#release-history)

<!-- /TOC -->

## Getting Started
This plugin requires Grunt `^1.0.1` and showdown.js `^1.8.2`

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

#### options.showdown
Type: `Object`
Default value: `{}`

This is the default showdown.js options object. Please have look at the showdown.js [Wiki](https://github.com/showdownjs/showdown/wiki/Showdown-options)

At the time of writing this are the default values:

```javascript
{ 
  omitExtraWLInCodeBlocks: false,
  noHeaderId: false,
  prefixHeaderId: false,
  rawPrefixHeaderId: false,
  ghCompatibleHeaderId: false,
  rawHeaderId: false,
  headerLevelStart: false,
  parseImgDimensions: false,
  simplifiedAutoLink: false,
  excludeTrailingPunctuationFromURLs: false,
  literalMidWordUnderscores: false,
  literalMidWordAsterisks: false,
  strikethrough: false,
  tables: false,
  tablesHeaderId: false,
  ghCodeBlocks: true,
  tasklists: false,
  smoothLivePreview: false,
  smartIndentationFix: false,
  disableForced4SpacesIndentedSublists: false,
  simpleLineBreaks: false,
  requireSpaceBeforeHeadingText: false,
  ghMentions: false,
  ghMentionsLink: 'https://github.com/{u}',
  encodeEmails: true,
  openLinksInNewWindow: false,
  backslashEscapesHTMLTags: false,
  emoji: false,
  underline: false 
}
```

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
        showdown: {
          tables: true,
          strikethrough: true,
          ghCompatibleHeaderId: true,
        }
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
* 1.0.3 - Support for newer version of showdown.js and grunt
* 1.0.1 - Support cwd file option + unit tests
* 1.0.0 - Init project. Custom showdown extension support
