module.exports = () => {
    return {
        'build': {
            cmd: 'npm run build'
        },
        'test-expectation-chrome': {
            cmd: 'npm run test:expectation-chrome'
        },
        'test-expectation-firefox': {
            cmd: 'npm run test:expectation-firefox'
        },
        'test-expectation-node': {
            cmd: 'npm run test:expectation-node'
        },
        'test-unit-browser': {
            cmd: 'npm run test:unit-browser'
        },
        'test-unit-node': {
            cmd: 'npm run test:unit-node'
        }
    };
};
