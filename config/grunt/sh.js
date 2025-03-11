module.exports = (grunt) => {
    const continuous = grunt.option('continuous') === true;

    return {
        'build': {
            cmd: 'npm run build'
        },
        'test-expectation-chrome': {
            cmd: `karma start config/karma/config-expectation-chrome.js ${continuous ? '--concurrency Infinity' : '--single-run'}`
        },
        'test-expectation-firefox': {
            cmd: `karma start config/karma/config-expectation-firefox.js ${continuous ? '--concurrency Infinity' : '--single-run'}`
        },
        'test-expectation-node': {
            cmd: 'mocha --bail --parallel --recursive --require config/mocha/config-expectation.js test/expectation/node'
        },
        'test-unit-browser': {
            cmd: `karma start config/karma/config-unit.js ${continuous ? '--concurrency Infinity' : '--single-run'}`
        },
        'test-unit-node': {
            cmd: 'mocha --bail --parallel --recursive --require config/mocha/config-unit.js test/unit'
        }
    };
};
