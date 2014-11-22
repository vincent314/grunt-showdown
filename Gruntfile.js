/*
 * grunt-showdown
 * https://github.com/vincent314/grunt-showdown
 *
 * Copyright (c) 2014 vincent314
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        showdown: {
            tests: {
                files: [
                    {
                        cwd: 'test/fixtures',
                        //src: ['test/fixtures/**/*.md'],
                        src: ['**/*.md'],
                        dest: 'tmp/'
                    }
                ],
                options: {
                    extensions: ['github','table'],
                    customExtensions: ['showdown-furigana-extension']
                }
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*Spec.js']
        },

        debug: {
            options: {
                open: false // do not open node-inspector in Chrome automatically
            }
        },

        mkdir: {
            tests: {
                options: {
                    create: ['tmp']
                }
            }
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-debug-task');
    grunt.loadNpmTasks('grunt-mkdir');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'mkdir', 'showdown', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
