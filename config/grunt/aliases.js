const { env } = require('process');

module.exports = {
    build: [
        'clean:build',
        'sh:build-es2018',
        'sh:build-es5',
        'babel:build'
    ],
    lint: [
        'eslint',
        // @todo Use grunt-lint again when it support the type-check option.
        'sh:lint'
    ],
    performance: [
        'karma:performance'
    ],
    test: [
        'build',
        ...(env.TARGET === 'chrome' && [ 'expectation', undefined ].includes(env.TYPE))
            ? [
                'karma:expectation-chrome'
            ]
            : (env.TARGET === 'firefox' && [ 'expectation', undefined ].includes(env.TYPE))
                ? [
                    'karma:expectation-firefox'
                ]
                : (env.TARGET === undefined && [ 'expectation', undefined ].includes(env.TYPE))
                    ? [
                        'karma:expectation-chrome',
                        'karma:expectation-firefox'
                    ]
                    : [ ],
        ...([ 'chrome', 'firefox', 'safari', undefined ].includes(env.TARGET) && [ 'unit', undefined ].includes(env.TYPE))
            ? [
                'karma:unit'
            ]
            : [ ],
        ...([ 'node', undefined ].includes(env.TARGET) && [ 'expectation', undefined ].includes(env.TYPE))
            ? [
                'sh:test-expectation'
            ]
            : [ ],
        ...([ 'node', undefined ].includes(env.TARGET) && [ 'unit', undefined ].includes(env.TYPE))
            ? [
                'sh:test-unit'
            ]
            : [ ]
    ]
};
