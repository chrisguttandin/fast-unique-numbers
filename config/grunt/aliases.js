const { env } = require('process');

// eslint-disable-next-line padding-line-between-statements
const filter = (predicate, ...tasks) => (predicate ? tasks : []);
const isTarget = (...targets) => env.TARGET === undefined || targets.includes(env.TARGET);
const isType = (...types) => env.TYPE === undefined || types.includes(env.TYPE);

module.exports = {
    build: ['clean:build', 'sh:build-es2019', 'sh:build-es5', 'babel:build'],
    lint: ['sh:lint-config', 'sh:lint-src', 'sh:lint-test'],
    test: [
        'build',
        ...filter(
            isType('expectation'),
            ...filter(isTarget('chrome'), 'sh:test-expectation-chrome'),
            ...filter(isTarget('firefox'), 'sh:test-expectation-firefox'),
            ...filter(isTarget('node'), 'sh:test-expectation-node')
        ),
        ...filter(
            isType('unit'),
            ...filter(isTarget('chrome', 'firefox', 'safari'), 'sh:test-unit-browser'),
            ...filter(isTarget('node'), 'sh:test-unit-node')
        )
    ]
};
