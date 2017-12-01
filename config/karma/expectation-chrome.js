module.exports = (config) => {

    config.set({

        basePath: '../../',

        browserDisconnectTimeout: 20000,

        browserDisconnectTolerance: 10,

        browserNoActivityTimeout: 300000,

        concurrency: 1,

        files: [
            {
                included: false,
                pattern: 'src/**',
                served: false
            }, {
                included: true,
                pattern: require.resolve('lodash'),
                served: true,
                watched: false
            }, {
                included: true,
                pattern: require.resolve('benchmark'),
                served: true,
                watched: false
            },
            'test/expectation/any/**/*.js',
            'test/expectation/chrome/**/*.js'
        ],

        frameworks: [
            'mocha',
            'sinon-chai'
        ],

        mime: {
            'text/x-typescript': [ 'ts', 'tsx' ]
        },

        preprocessors: {
            'test/expectation/any/**/*.js': 'webpack',
            'test/expectation/chrome/**/*.js': 'webpack'
        },

        singleRun: true,

        webpack: {
            module: {
                loaders: [
                    {
                        loader: 'ts-loader',
                        test: /\.ts?$/
                    }
                ]
            },
            resolve: {
                extensions: [ '.js', '.ts' ]
            }
        },

        webpackMiddleware: {
            noInfo: true
        }

    });

    if (process.env.TRAVIS) {

        config.set({

            browserStack: {
                accessKey: process.env.BROWSER_STACK_ACCESS_KEY,
                username: process.env.BROWSER_STACK_USERNAME
            },

            browsers: [
                'ChromeBrowserStack'
            ],

            captureTimeout: 120000,

            customLaunchers: {
                ChromeBrowserStack: {
                    base: 'BrowserStack',
                    browser: 'chrome',
                    os: 'OS X',
                    os_version: 'Sierra' // eslint-disable-line camelcase
                }
            },

            tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER

        });

    } else {

        config.set({

            browsers: [
                'ChromeHeadless'
            ]

        });

    }

};
