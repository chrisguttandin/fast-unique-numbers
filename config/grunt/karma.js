module.exports = {
    'performance': {
        configFile: 'config/karma/config-performance.js',
        singleRun: true
    },
    'test': {
        configFile: 'config/karma/config.js',
        singleRun: true
    },
    'test-chrome': {
        configFile: 'config/karma/expectation-chrome.js'
    },
    'test-firefox': {
        configFile: 'config/karma/expectation-firefox.js'
    }
};
