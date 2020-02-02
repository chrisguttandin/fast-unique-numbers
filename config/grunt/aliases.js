const { env } = require('process');

module.exports = {
    build: [
        'clean:build',
        'sh:build-es2018',
        'sh:build-es5',
        'babel:build'
    ],
    lint: [
        'sh:lint-config',
        'sh:lint-src',
        'sh:lint-test'
    ],
    test: [
        'build',
        ...(env.TARGET === 'chrome' && [ 'expectation', undefined ].includes(env.TYPE))
            ? [
                'sh:test-expectation-chrome'
            ]
            : (env.TARGET === 'firefox' && [ 'expectation', undefined ].includes(env.TYPE))
                ? [
                    'sh:test-expectation-firefox'
                ]
                : (env.TARGET === 'node' && [ 'expectation', undefined ].includes(env.TYPE))
                    ? [
                        'sh:test-expectation-node'
                    ]
                    : (env.TARGET === undefined && [ 'expectation', undefined ].includes(env.TYPE))
                        ? [
                            'sh:test-expectation-chrome',
                            'sh:test-expectation-firefox',
                            'sh:test-expectation-node'
                        ]
                        : [ ],
        ...([ 'chrome', 'firefox', 'safari', undefined ].includes(env.TARGET) && [ 'unit', undefined ].includes(env.TYPE))
            ? [
                'sh:test-unit-browser'
            ]
            : [ ],
        ...([ 'node', undefined ].includes(env.TARGET) && [ 'unit', undefined ].includes(env.TYPE))
            ? [
                'sh:test-unit-node'
            ]
            : [ ]
    ]
};
