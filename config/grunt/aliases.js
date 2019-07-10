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
        'karma:test',
        'karma:test-chrome',
        'karma:test-firefox',
        'build',
        'sh:test-expectation',
        'sh:test-unit'
    ]
};
