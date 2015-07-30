/*jshint node:true*/

// Generated on 2015-07-02 using
// generator-webapp 0.6.2
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// If you want to recursively match all subfolders, use:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Automatically load required grunt tasks
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

    // Configurable paths
    var config = {
        app: 'app',
        dist: 'dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

            // Project settings
            config: config,

            // Watches files for changes and runs tasks based on the changed files
            watch: {
                bower: {
                    files: ['bower.json'],
                    tasks: ['wiredep']
                },
                js: {
                    files: ['<%= config.app %>/components/{,*/}*.js'],
                    tasks: ['concat']
                },
                handlebars: {
                    files: ['<%= config.app %>/components/{,*/}*.hbs'],
                    tasks: ['handlebars']

                },
                jstest: {
                    files: ['test/spec/{,*/}*.js'],
                    tasks: ['test:watch']
                },
                gruntfile: {
                    files: ['Gruntfile.js']
                },
                sass: {
                    files: ['<%= config.app %>/{,*/}/{,*/}*.{scss,sass}'],
                    tasks: ['sass:server', 'postcss']
                },
                styles: {
                    files: ['<%= config.app %>/styles/{,*/}*.css'],
                    tasks: ['newer:copy:styles', 'postcss']
                }
            },

            browserSync: {
                options: {
                    notify: false,
                    background: true
                },
                livereload: {
                    options: {
                        files: [
                            '<%= config.app %>/{,*/}*.html',
                            '.tmp/styles/{,*/}*.css',
                            '<%= config.app %>/images/{,*/}*',
                            '<%= config.app %>/scripts/{,*/}*.js'
                        ],
                        port: 9000,
                        server: {
                            baseDir: ['.tmp', config.app],
                            routes: {
                                '/bower_components': './bower_components'
                            }
                        }
                    }
                },
                test: {
                    options: {
                        port: 9001,
                        open: false,
                        logLevel: 'silent',
                        host: 'localhost',
                        server: {
                            baseDir: ['.tmp', './test', config.app],
                            routes: {
                                '/bower_components': './bower_components'
                            }
                        }
                    }
                },
                dist: {
                    options: {
                        background: false,
                        server: '<%= config.dist %>'
                    }
                }
            },

            // Empties folders to start fresh
            clean: {
                dist: {
                    files: [{
                        dot: true,
                        src: [
                            '.tmp',
                            '<%= config.dist %>/*',
                            '!<%= config.dist %>/.git*'
                        ]
                    }]
                },
                server: '.tmp'
            },

            // Make sure code styles are up to par and there are no obvious mistakes
            jshint: {
                options: {
                    jshintrc: '.jshintrc',
                    reporter: require('jshint-stylish')
                },
                all: [
                    'Gruntfile.js',
                    '<%= config.app %>/scripts/{,*/}*.js',
                    '!<%= config.app %>/scripts/vendor/*',
                    '!<%= config.app %>/scripts/prism.js',
                    '!<%= config.app %>/scripts/ui-templates.js',
                    '!<%= config.app %>/scripts/ui-components.js',
                    'test/spec/{,*/}*.js'
                ]
            },

            // Mocha testing framework configuration options
            mocha: {
                all: {
                    src: ['/test/index.html']
                },
                options: {
                    run: true,
                    urls: ['http://<%= browserSync.test.options.host %>:<%= browserSync.test.options.port %>/index.html']
            }
        },

        concat: {
            options: {
                stripBanners: true,
                separator: ';',
            },
            dist: {
                src: ['app/components/*/*.js'],
                dest: 'app/scripts/ui-components.js',
            }
        },

        // Compiles Sass to CSS and generates necessary files if requested
        sass: {
            options: {
                sourceMap: true,
                sourceMapEmbed: true,
                sourceMapContents: true,
                includePaths: ['bower_components']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/styles',
                    src: ['*.{scss,sass}'],
                    dest: '.tmp/styles',
                    ext: '.css'
                }]
            },
            server: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/styles',
                    src: ['*.{scss,sass}'],
                    dest: '.tmp/styles',
                    ext: '.css'
                }]
            }
        },

        postcss: {
            options: {
                map: true,
                processors: [
                    // Add vendor prefixed styles
                    require('autoprefixer-core')({
                        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
                    })
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the HTML file
        wiredep: {
            app: {
                src: ['<%= config.app %>/index.html'],
                exclude: ['bootstrap.js'],
                ignorePath: /^<%= config.app %>\/|\.\.\//
            },
            sass: {
                src: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
                ignorePath: /(\.\.\/){1,2}bower_components\//
            }
        },

        // Renames files for browser caching purposes
        filerev: {
            dist: {
                src: [
                    '<%= config.dist %>/scripts/{,*/}*.js',
                    '<%= config.dist %>/styles/{,*/}*.css',
                    '<%= config.dist %>/images/{,*/}*.*',
                    '<%= config.dist %>/styles/fonts/{,*/}*.*',
                    '<%= config.dist %>/*.{ico,png}'
                ]
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: {
                dest: '<%= config.dist %>'
            },
            html: '<%= config.app %>/index.html'
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {
                assetsDirs: [
                    '<%= config.dist %>',
                    '<%= config.dist %>/images',
                    '<%= config.dist %>/styles'
                ]
            },
            html: ['<%= config.dist %>/{,*/}*.html'],
            css: ['<%= config.dist %>/styles/{,*/}*.css']
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/images',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= config.dist %>/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= config.dist %>/images'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    removeAttributeQuotes: true,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    // true would impact styles with attribute selectors
                    removeRedundantAttributes: false,
                    useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.dist %>',
                    src: '{,*/}*.html',
                    dest: '<%= config.dist %>'
                }]
            }
        },

        // By default, your `index.html`'s <!-- Usemin block --> will take care
        // of minification. These next options are pre-configured if you do not
        // wish to use the Usemin blocks.
        // cssmin: {
        //   dist: {
        //     files: {
        //       '<%= config.dist %>/styles/main.css': [
        //         '.tmp/styles/{,*/}*.css',
        //         '<%= config.app %>/styles/{,*/}*.css'
        //       ]
        //     }
        //   }
        // },
        // uglify: {
        //   dist: {
        //     files: {
        //       '<%= config.dist %>/scripts/scripts.js': [
        //         '<%= config.dist %>/scripts/scripts.js'
        //       ]
        //     }
        //   }
        // },
        // concat: {
        //   dist: {}
        // },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>',
                    dest: '<%= config.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        'images/{,*/}*.webp',
                        '{,*/}*.html',
                        'fonts/{,*/}*.*'
                    ]
                }, {
                    expand: true,
                    dot: true,
                    cwd: '.',
                    src: 'bower_components/*',
                    dest: '<%= config.dist %>'
                }]
            }
        },

        // Generates a custom Modernizr build that includes only the tests you
        // reference in your app
        modernizr: {
            dist: {
                devFile: 'bower_components/modernizr/modernizr.js',
                outputFile: '<%= config.dist %>/scripts/vendor/modernizr.js',
                files: {
                    src: [
                        '<%= config.dist %>/scripts/{,*/}*.js',
                        '<%= config.dist %>/styles/{,*/}*.css',
                        '!<%= config.dist %>/scripts/vendor/*'
                    ]
                },
                uglify: true
            }
        },

        handlebars: {
            compile: {
                options: {

                    // configure a namespace for your templates
                    namespace: 'ui.component.template',
                    wrapped: true,
                    partialsUseNamespace: true,

                    // convert file path into a function name
                    // in this example, I convert grab just the filename without the extension
                    processName: function(filePath) {
                        var pieces = filePath.split('/');
                        return pieces[pieces.length - 1].split('.')[0];
                    },
                    processPartialName: function(filePath) { // input:  templates/_header.hbs
                        var pieces = filePath.split('/');
                        return pieces[pieces.length - 1].split('.')[0]; // output: _header.hbs
                    }

                },

                // output file: input files
                files: {
                    'app/scripts/ui-templates.js': 'app/components/*/*.hbs'
                }
            }
        },

        // Run some tasks in parallel to speed up build process
        concurrent: {
            server: [
                'sass:server'
            ],
            test: [],
            dist: [
                'sass',
                'imagemin',
                'svgmin'
            ]
        }
    });


grunt.registerTask('serve', 'start the server and preview your app', function(target) {

    if (target === 'dist') {
        return grunt.task.run(['build', 'browserSync:dist']);
    }

    grunt.task.run([
        'clean:server',
        'wiredep',
        'handlebars',
        'concat',
        'concurrent:server',
        'postcss',
        'browserSync:livereload',
        'watch'
    ]);
});

grunt.registerTask('server', function(target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run([target ? ('serve:' + target) : 'serve']);
});

grunt.registerTask('test', function(target) {
    if (target !== 'watch') {
        grunt.task.run([
            'clean:server',
            'concurrent:test',
            'postcss'
        ]);
    }

    grunt.task.run([
        'browserSync:test',
        'mocha'
    ]);
});

grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'postcss',
    'concat',
    'cssmin',
    'handlebars',
    'uglify',
    'copy:dist',
    'modernizr',
    'filerev',
    'usemin',
    'htmlmin'
]);

grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
]);
};
