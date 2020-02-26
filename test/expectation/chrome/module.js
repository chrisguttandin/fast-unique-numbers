describe('Array/Map/Set modifications', () => {

    it('should show certain performance characteristics', function (done) {
        this.timeout(0);

        /*
         * The initial value of 0.9999999999999999 is used to make sure that
         * we reach the maximum of the random values.
         */
        const randomValues = [ 0.9999999999999999 ];
        const numberOfValues = 10000;

        for (let i = 1; i < numberOfValues; i += 1) {
            randomValues.push(Math.random());
        }

        const suite = new Benchmark.Suite('random number', { // eslint-disable-line no-undef
            onComplete: () => {
                const indexOfFastestBenchmark = _ // eslint-disable-line no-undef
                    .range(0, suite.length)
                    .map((index) => ({ index, mean: suite[index].stats.mean }))
                    .sort((a, b) => a.mean - b.mean)
                    .map(({ index }) => index)[0];

                expect(indexOfFastestBenchmark).to.oneOf([ 7, 11 ]);

                done();
            }
        });

        suite
            .add('values below Number.MAX_SAFE_INTEGER stored in an Array', () => {
                const uniqueNumbersAsArray = [];

                for (let i = 0; i < numberOfValues; i += 1) {
                    const number = Math.floor(randomValues[i] * Number.MAX_SAFE_INTEGER);

                    if (!uniqueNumbersAsArray.includes(number)) {
                        uniqueNumbersAsArray.push(number);
                    }
                }
            })
            .add('values below 2 ** 32 stored in an Array', () => {
                const uniqueNumbersAsArray = [];

                for (let i = 0; i < numberOfValues; i += 1) {
                    const number = Math.floor(randomValues[i] * 4294967296);

                    if (!uniqueNumbersAsArray.includes(number)) {
                        uniqueNumbersAsArray.push(number);
                    }
                }
            })
            .add('values below 2 ** 31 stored in an Array', () => {
                const uniqueNumbersAsArray = [];

                for (let i = 0; i < numberOfValues; i += 1) {
                    const number = Math.floor(randomValues[i] * 2147483648);

                    if (!uniqueNumbersAsArray.includes(number)) {
                        uniqueNumbersAsArray.push(number);
                    }
                }
            })
            .add('values below 2 ** 30 stored in an Array', () => {
                const uniqueNumbersAsArray = [];

                for (let i = 0; i < numberOfValues; i += 1) {
                    const number = Math.floor(randomValues[i] * 1073741824);

                    if (!uniqueNumbersAsArray.includes(number)) {
                        uniqueNumbersAsArray.push(number);
                    }
                }
            })
            .add('values below Number.MAX_SAFE_INTEGER stored in a Map', () => {
                const uniqueNumbersAsMap = new Map();

                for (let i = 0; i < numberOfValues; i += 1) {
                    const number = Math.floor(randomValues[i] * Number.MAX_SAFE_INTEGER);

                    if (!uniqueNumbersAsMap.has(number)) {
                        uniqueNumbersAsMap.set(number, true);
                    }
                }
            })
            .add('values below 2 ** 32 stored in a Map', () => {
                const uniqueNumbersAsMap = new Map();

                for (let i = 0; i < numberOfValues; i += 1) {
                    const number = Math.floor(randomValues[i] * 4294967296);

                    if (!uniqueNumbersAsMap.has(number)) {
                        uniqueNumbersAsMap.set(number, true);
                    }
                }
            })
            .add('values below 2 ** 31 stored in a Map', () => {
                const uniqueNumbersAsMap = new Map();

                for (let i = 0; i < numberOfValues; i += 1) {
                    const number = Math.floor(randomValues[i] * 2147483648);

                    if (!uniqueNumbersAsMap.has(number)) {
                        uniqueNumbersAsMap.set(number, true);
                    }
                }
            })
            .add('values below 2 ** 30 stored in a Map', () => {
                const uniqueNumbersAsMap = new Map();

                for (let i = 0; i < numberOfValues; i += 1) {
                    const number = Math.floor(randomValues[i] * 1073741824);

                    if (!uniqueNumbersAsMap.has(number)) {
                        uniqueNumbersAsMap.set(number, true);
                    }
                }
            })
            .add('values below Number.MAX_SAFE_INTEGER stored in a Set', () => {
                const uniqueNumbersAsSet = new Set();

                for (let i = 0; i < numberOfValues; i += 1) {
                    const number = Math.floor(randomValues[i] * Number.MAX_SAFE_INTEGER);

                    if (!uniqueNumbersAsSet.has(number)) {
                        uniqueNumbersAsSet.add(number);
                    }
                }
            })
            .add('values below 2 ** 32 stored in a Set', () => {
                const uniqueNumbersAsSet = new Set();

                for (let i = 0; i < numberOfValues; i += 1) {
                    const number = Math.floor(randomValues[i] * 4294967296);

                    if (!uniqueNumbersAsSet.has(number)) {
                        uniqueNumbersAsSet.add(number);
                    }
                }
            })
            .add('values below 2 ** 31 stored in a Set', () => {
                const uniqueNumbersAsSet = new Set();

                for (let i = 0; i < numberOfValues; i += 1) {
                    const number = Math.floor(randomValues[i] * 2147483648);

                    if (!uniqueNumbersAsSet.has(number)) {
                        uniqueNumbersAsSet.add(number);
                    }
                }
            })
            .add('values below 2 ** 30 stored in a Set', () => {
                const uniqueNumbersAsSet = new Set();

                for (let i = 0; i < numberOfValues; i += 1) {
                    const number = Math.floor(randomValues[i] * 1073741824);

                    if (!uniqueNumbersAsSet.has(number)) {
                        uniqueNumbersAsSet.add(number);
                    }
                }
            })
            .run({ async: true });
    });

});
