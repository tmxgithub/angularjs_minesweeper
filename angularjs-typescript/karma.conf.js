// Karma configuration
// Generated on Wed Feb 12 2014 23:43:57 GMT+0900 (JST)

module.exports = function (config) {
	config.set({

		// base path, that will be used to resolve files and exclude
		basePath: './',


		// frameworks to use
		frameworks: ['mocha'],

		preprocessors: {
			'**/*.js': ['sourcemap'],
			'scripts/**/*.js': ['coverage']
		},

		// list of files / patterns to load in the browser
		files: [
			'bower_components/es5-shim/es5-shim.js',
			'bower_components/jquery/dist/jquery.js',
			'bower_components/angular/angular.js',
			'bower_components/angular-route/angular-route.js',
			'scripts/**/*.js',
			'bower_components/power-assert/build/power-assert.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'testEspowered/**/*.js'
		],


		// list of files to exclude
		exclude: [
			'src/main/webapp/scripts/main.min.js'
		],


		// test results reporter to use
		// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		reporters: ['progress', 'junit', 'coverage'],

		// optionally, configure the reporter
		coverageReporter: {
			dir: 'coverage/',
			reporters: [
				{
					type: 'html'
				},
				{
					type: 'cobertura', file: 'clover.xml'
				}
			]
		},

		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera (has to be installed with `npm install karma-opera-launcher`)
		// - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
		// - PhantomJS
		// - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
		browsers: ['Chrome', 'PhantomJS'],


		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,


		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: false
	});
};
