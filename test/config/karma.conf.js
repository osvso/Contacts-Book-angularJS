module.exports = function (config) {
    config.set({
        basePath: '../',
        frameworks: ['jasmine'],
        files: [
            '../libs/angular/angular.js',
            '../libs/angular/angular-mocks.js',
            '../libs/angular/ui-bootstrap-tpls-0.6.0.js',
            '../js/**/*.js',
            '../test/unit/*.js'
        ] ,
        autoWatch: true,
        browsers: ['Chrome'],
        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }
    })
}