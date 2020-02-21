const { env } = require('process');

module.exports = (config) => {

    config.set({

        basePath: '../../',

        files: [
            'test/unit/**/*.js'
        ],

        frameworks: [
            'mocha',
            'sinon-chai'
        ],

        mime: {
            'text/x-typescript': [ 'ts', 'tsx' ]
        },

        preprocessors: {
            'src/**/*.ts': 'webpack',
            'test/unit/**/*.js': 'webpack'
        },

        webpack: {
            mode: 'development',
            module: {
                rules: [ {
                    test: /\.ts?$/,
                    use: {
                        loader: 'ts-loader'
                    }
                } ]
            },
            resolve: {
                extensions: [ '.js', '.ts' ]
            }
        },

        webpackMiddleware: {
            noInfo: true
        }

    });

    if (env.TRAVIS) {

        config.set({

            browsers: (env.TARGET === 'chrome')
                ? [
                    'ChromeSauceLabs'
                ]
                : (env.TARGET === 'firefox')
                    ? [
                        'FirefoxSauceLabs'
                    ]
                    : (env.TARGET === 'safari')
                        ? [
                            'SafariSauceLabs'
                        ]
                        : [
                            'ChromeSauceLabs',
                            'FirefoxSauceLabs',
                            'SafariSauceLabs'
                        ],

            captureTimeout: 120000,

            customLaunchers: {
                ChromeSauceLabs: {
                    base: 'SauceLabs',
                    browserName: 'chrome',
                    platform: 'OS X 10.11'
                },
                FirefoxSauceLabs: {
                    base: 'SauceLabs',
                    browserName: 'firefox',
                    platform: 'OS X 10.11'
                },
                SafariSauceLabs: {
                    base: 'SauceLabs',
                    browserName: 'safari',
                    platform: 'OS X 10.11'
                }
            }

        });

    } else {

        config.set({

            browsers: [
                'ChromeHeadless',
                'ChromeCanaryHeadless',
                'FirefoxHeadless',
                'FirefoxDeveloperHeadless',
                'Opera',
                'Safari'
            ],

            concurrency: 2

        });

    }

};