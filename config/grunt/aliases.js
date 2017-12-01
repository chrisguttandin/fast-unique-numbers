module.exports = {
    build: [
        'clean:build',
        'sh:build-es2015',
        'sh:build-es5',
        'sh:build-esm',
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
        'karma:test',
        'karma:test-chrome',
        'karma:test-firefox',
        'build',
        'mochaTest:test'
    ]
};
