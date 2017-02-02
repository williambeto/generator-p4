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
<<<<<<< HEAD
                            '<%= app %>/bower_components/foundation-sites/scss',
                            '<%= app %>/bower_components/motion-ui/src',
                            '<%= app %>/bower_components/compass-mixins/lib'
=======
                            '<%%= app %>/bower_components/foundation-sites/scss',
                            '<%%= app %>/bower_components/motion-ui/src',
                            '<%%= app %>/bower_components/compass-mixins/lib'
>>>>>>> f9a65b9b8f1708b00a4ce217c9fbf71125a3c739
                        ]
            },
            dist: {
                options: {
                    outputStyle: 'extended'
                },
                files: {
<<<<<<< HEAD
                    '<%= app %>/css/app.css': '<%= app %>/scss/app.scss'
=======
                    '<%%= app %>/css/app.css': '<%%= app %>/scss/app.scss'
>>>>>>> f9a65b9b8f1708b00a4ce217c9fbf71125a3c739
                }
            },
            dev: {
                files: {
<<<<<<< HEAD
                    '<%= app %>/css/app.css': '<%= app %>/scss/app.scss'
=======
                    '<%%= app %>/css/app.css': '<%%= app %>/scss/app.scss'
>>>>>>> f9a65b9b8f1708b00a4ce217c9fbf71125a3c739
                }
            }
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({
<<<<<<< HEAD
                        browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']
=======
                        browsers: ['last 2 versions', 'ie >= 9']
>>>>>>> f9a65b9b8f1708b00a4ce217c9fbf71125a3c739
                    })
                ]
            },
            dist: {
<<<<<<< HEAD
                src: '<%= app %>/css/app.css'
=======
                src: '<%%= app %>/css/app.css'
>>>>>>> f9a65b9b8f1708b00a4ce217c9fbf71125a3c739
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
<<<<<<< HEAD
                '<%= app %>/js/**/*.js'
=======
                '<%%= app %>/js/**/*.js'
>>>>>>> f9a65b9b8f1708b00a4ce217c9fbf71125a3c739
            ]
        },
        clean: {
            dist: {
<<<<<<< HEAD
                src: ['<%= dist %>/*']
=======
                src: ['<%%= dist %>/*']
>>>>>>> f9a65b9b8f1708b00a4ce217c9fbf71125a3c739
            }
        },
        copy: {
            dist: {
                files: [{
                        expand: true,
<<<<<<< HEAD
                        cwd: '<%= app %>/',
                        src: ['fonts/**', '**/*.html', '**/*.php', '!**/*.scss', '!bower_components/**'],
                        dest: '<%= dist %>/'
                    }, {
                        expand: true,
                        flatten: true,
                        src: ['<%= app %>/bower_components/font-awesome/fonts/**'],
                        dest: '<%= dist %>/fonts/',
=======
                        cwd: '<%%= app %>/',
                        src: ['fonts/**', '**/*.html', '**/*.php', '!**/*.scss', '!bower_components/**'],
                        dest: '<%%= dist %>/'
                    }, {
                        expand: true,
                        flatten: true,
                        src: ['<%%= app %>/bower_components/font-awesome/fonts/**'],
                        dest: '<%%= dist %>/fonts/',
>>>>>>> f9a65b9b8f1708b00a4ce217c9fbf71125a3c739
                        filter: 'isFile'
                    }]
            }
        },
        imagemin: {
            target: {
                files: [{
                        expand: true,
<<<<<<< HEAD
                        cwd: '<%= app %>/images/',
                        src: ['**/*.{jpg,gif,svg,jpeg,png}'],
                        dest: '<%= dist %>/images/'
=======
                        cwd: '<%%= app %>/images/',
                        src: ['**/*.{jpg,gif,svg,jpeg,png}'],
                        dest: '<%%= dist %>/images/'
>>>>>>> f9a65b9b8f1708b00a4ce217c9fbf71125a3c739
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
<<<<<<< HEAD
            html: ['<%= app %>/index.html'],
            options: {
                dest: '<%= dist %>'
            }
        },
        usemin: {
            html: ['<%= dist %>/**/*.html', '<%= dist %>/**/*.php', '!<%= app %>/bower_components/**'],
            css: ['<%= dist %>/css/**/*.css'],
            options: {
                dirs: ['<%= dist %>']
=======
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
>>>>>>> f9a65b9b8f1708b00a4ce217c9fbf71125a3c739
            }
        },
        watch: {
            grunt: {
                files: ['Gruntfile.js'],
                tasks: ['sass', 'postcss']
            },
            sass: {
<<<<<<< HEAD
                files: '<%= app %>/scss/**/*.scss',
=======
                files: '<%%= app %>/scss/**/*.scss',
>>>>>>> f9a65b9b8f1708b00a4ce217c9fbf71125a3c739
                tasks: ['sass', 'postcss']
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
<<<<<<< HEAD
                        '<%= app %>/**/*.html',
                        '<%= app %>/**/*.php',
                        '!<%= app %>/bower_components/**',
                        '<%= app %>/js/**/*.js',
                        '<%= app %>/css/*.css',
                        '<%= app %>/images/**/*.{jpg,gif,svg,jpeg,png}'
=======
                        '<%%= app %>/**/*.html',
                        '<%%= app %>/**/*.php',
                        '!<%%= app %>/bower_components/**',
                        '<%%= app %>/js/**/*.js',
                        '<%%= app %>/css/*.css',
                        '<%%= app %>/images/**/*.{jpg,gif,svg,jpeg,png}'
>>>>>>> f9a65b9b8f1708b00a4ce217c9fbf71125a3c739
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
