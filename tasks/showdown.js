/*
 * grunt-showdown
 * https://github.com/vincent314/grunt-showdown
 *
 * Copyright (c) 2014 vincent314
 * Licensed under the MIT license.
 */

'use strict';
var Showdown = require('showdown');
var path = require('path');

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('showdown', 'Showdown grunt plugin', function () {
        console.log('Inside task');

        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            fileExtension:'md',
            extensions:{}
        });

        var showdown = new Showdown.converter(options.extensions);
        // Iterate over all specified file groups.
        this.files.forEach(function (f) {
            if(!grunt.file.exists(f.dest) || !grunt.file.isDir(f.dest)){
                grunt.log.warn('Destination directory not found');
                return false;
            }

            // Concat specified files.
            f.src.filter(function (filepath) {
                console.log("src=" + filepath);
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).forEach(function (filepath) {
                var result = showdown.makeHtml(grunt.file.read(filepath));

                console.log(result);

                var destPath = f.dest + "/" + path.basename(filepath, '.' + options.fileExtension);
                grunt.file.write(destPath + ".html", result);
            });
//      }).map(function(filepath) {
//        // Read file source.
//        return grunt.file.read(filepath);
//      }).join(grunt.util.normalizelf(options.separator));

//      // Handle options.
//      src += options.punctuation;
//
//      // Write the destination file.
//      grunt.file.write(f.dest, src);
//
//      // Print a success message.
//      grunt.log.writeln('File "' + f.dest + '" created.');
        });
    });

};
