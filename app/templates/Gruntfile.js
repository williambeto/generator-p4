'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        app: 'app',
        dist: 'dist',
        sass: {
            options: {
                includePaths:
                        [
                            '<%%= app %>/bower_components/foundation-sites/scss',
                            '<%%= app %>/bower_components/motion-ui/src',
                            '<%%= app %>/bower_components/compass-mixins/lib'
                        ]
            },
            dist: {
                options: {
                    outputStyle: 'extended'
                },
                files: {
                    '<%%= app %>/css/app.css': '<%%= app %>/scss/app.scss'
                }
            },
            dev: {
                files: {
                    '<%%= app %>/css/app.css': '<%%= app %>/scss/app.scss'
                }
            }
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions', 'ie >= 9']
                    })
                ]
            },
            dist: {
                src: '<%%= app %>/css/app.css'
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%%= app %>/js/**/*.js'
            ]
        },
        clean: {
            dist: {
                src: ['<%%= dist %>/*']
            }
        },
        copy: {
            dist: {
                files: [{
                        expand: true,
                        cwd: '<%%= app %>/',
                        src: ['fonts/**', '**/*.html', '**/*.php', '!**/*.scss', '!bower_components/**'],
                        dest: '<%%= dist %>/'
                    }, {
                        expand: true,
                        flatten: true,
                        src: ['<%%= app %>/bower_components/font-awesome/fonts/**'],
                        dest: '<%%= dist %>/fonts/',
                        filter: 'isFile'
                    }]
            }
        },
        imagemin: {
            target: {
                files: [{
                        expand: true,
                        cwd: '<%%= app %>/images/',
                        src: ['**/*.{jpg,gif,svg,jpeg,png}'],
                        dest: '<%%= dist %>/images/'
                    }]
            }
        },
        uglify: {
            options: {
                preserveComments: false,
                mangle: false
            }
        },
        useminPrepare: {
            html: ['<%%= app %>/index.html'],
            options: {
                dest: '<%%= dist %>'
            }
        },
        usemin: {
            html: ['<%%= dist %>/**/*.html', '<%%= dist %>/**/*.php', '!<%%= app %>/bower_components/**'],
            css: ['<%%= dist %>/css/**/*.css'],
            options: {
                dirs: ['<%%= dist %>']
            }
        },
        watch: {
            grunt: {
                files: ['Gruntfile.js'],
                tasks: ['sass', 'postcss']
            },
            sass: {
                files: '<%%= app %>/scss/**/*.scss',
                tasks: ['sass', 'postcss']
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        '<%%= app %>/**/*.html',
                        '<%%= app %>/**/*.php',
                        '!<%%= app %>/bower_components/**',
                        '<%%= app %>/js/**/*.js',
                        '<%%= app %>/css/*.css',
                        '<%%= app %>/images/**/*.{jpg,gif,svg,jpeg,png}'
                    ]
                },
                options: {
                    proxy: 'local.dev',
                    watchTask: true
                }
            }
        }

    });

    grunt.registerTask('compile-sass', ['sass', 'postcss']);
    grunt.registerTask('grunt-browser-sync');
    grunt.registerTask('default', ['compile-sass', 'browserSync', 'watch']);
    grunt.registerTask('publish', ['compile-sass', 'clean:dist', 'useminPrepare', 'copy:dist', 'newer:imagemin', 'concat', 'cssmin', 'uglify', 'usemin']);
};
