module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-firefox-launcher'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage-istanbul-reporter'),
        require('@angular-devkit/build-angular/plugins/karma'),
        'karma-spec-reporter'
      ],
      client: {
        clearContext: false
      },
      coverageIstanbulReporter: {
        dir: require('path').join(__dirname, './coverage/crew-app'),
        reports: ['html', 'lcovonly', 'text-summary'],
        fixWebpackSourcePaths: true
      },
      reporters: ['progress', 'kjhtml'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['ChromiumNoSandbox', 'Chrome'],
      customLaunchers: {
        ChromiumNoSandbox: {
          base: 'ChromeHeadless',
          flags: ['--no-sandbox', '--headless', '--disable-gpu', '--disable-translate', '--disable-extensions']
        }
      },
      singleRun: false,
      restartOnFileChange: true,
      browserNoActivityTimeout: 999999
    });
  };
  