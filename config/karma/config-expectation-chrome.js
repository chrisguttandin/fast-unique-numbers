const { env } = require('process');

module.exports = (config) => {

    config.set({

        basePath: '../../',

        browserDisconnectTimeout: 120000,

        browserDisconnectTolerance: 10,

        browserNoActivityTimeout: 300000,

        files: [
            {
                included: false,
                pattern: 'src/**',
                served: false
            },
            {
                included: true,
                pattern: require.resolve('lodash'),
                served: true,
                watched: false
            },
            {
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

            browserStack: {
                accessKey: env.BROWSER_STACK_ACCESS_KEY,
                build: `${ env.TRAVIS_REPO_SLUG }/${ env.TRAVIS_JOB_NUMBER }/expectation-chrome`,
                username: env.BROWSER_STACK_USERNAME,
                video: false
            },

            browsers: [
                'ChromeBrowserStack'
            ],

            captureTimeout: 120000,

            customLaunchers: {
                ChromeBrowserStack: {
                    base: 'BrowserStack',
                    browser: 'chrome',
                    os: 'Windows',
                    os_version: '10' // eslint-disable-line camelcase
                }
            }

        });

    } else {

        config.set({

            browsers: [
                'ChromeHeadless'
            ],

            concurrency: 1

        });

    }

};