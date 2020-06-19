describe('Array/Map/Set modifications', () => {
    it('should show certain performance characteristics', function (done) {
        this.timeout(0);

        /*
         * The initial value of 0.9999999999999999 is used to make sure that
         * we reach the maximum of the random values.
         */
        const randomValues = [0.9999999999999999];
        const numberOfValues = 10000;

        for (let i = 1; i < numberOfValues; i += 1) {
            randomValues.push(Math.random());
        }

        // eslint-disable-next-line no-undef
        const suite = new Benchmark.Suite('random number', {
            onComplete: () => {
                const indexAndMeans = _.range(0, suite.length) // eslint-disable-line no-undef
                    .map((index) => ({ index, mean: suite[index].stats.mean }));
                const [meanOfFastestArrayBenchmark] = indexAndMeans
                    .slice(0, 4)
                    .sort((a, b) => a.mean - b.mean)
                    .map(({ mean }) => mean);
                const [meanOfFastestMapBenchmark, , meanOfSlowestMapBenchmark] = indexAndMeans
                    .slice(4, 8)
                    .sort((a, b) => a.mean - b.mean)
                    .map(({ mean }) => mean);
                const [meanOfFastestSetBenchmark, , meanOfSlowestSetBenchmark] = indexAndMeans
                    .slice(8, 12)
                    .sort((a, b) => a.mean - b.mean)
                    .map(({ mean }) => mean);
                const meanOfFastestMapOrSetBenchmark = Math.min(meanOfFastestMapBenchmark, meanOfFastestSetBenchmark);
                const meanOfSlowestMapOrSetBenchmark = Math.max(meanOfSlowestMapBenchmark, meanOfSlowestSetBenchmark);

                // Expect the usage of a Map or Set to be always faster as using an Array.
                expect(meanOfSlowestMapBenchmark).to.be.below(meanOfFastestArrayBenchmark);
                expect(meanOfSlowestSetBenchmark).to.be.below(meanOfFastestArrayBenchmark);

                // Expect all the Map and Set benchmarks to not differ much.
                expect(meanOfSlowestMapOrSetBenchmark - meanOfFastestMapOrSetBenchmark).to.be.below(0.005);

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
