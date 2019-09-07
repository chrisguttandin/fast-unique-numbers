import { createCache } from '../../../src/factories/cache';
import { createGenerateUniqueNumber } from '../../../src/factories/generate-unique-number';

describe('generateUniqueNumber()', () => {

    let generateUniqueNumber;
    let lastNumberWeakMap;

    beforeEach(() => {
        lastNumberWeakMap = new WeakMap();

        generateUniqueNumber = createGenerateUniqueNumber(createCache(lastNumberWeakMap), lastNumberWeakMap);
    });

    describe('with an empty map', () => {

        let map;

        beforeEach(() => {
            map = new Map();
        });

        it('should generate a number', () => {
            expect(generateUniqueNumber(map)).to.be.a('number');
        });

        it('should generate unique numbers', () => {
            for (let i = 0; i < 1000; i += 1) {
                const number = generateUniqueNumber(map);

                expect(map.has(number)).to.be.false;

                map.set(number, 'any value');
            }
        });

        it('should generate consecutive numbers', () => {
            for (let i = 0; i < 1000; i += 1) {
                const number = generateUniqueNumber(map);

                expect(number).to.equal(i);
            }
        });

    });

    describe('with a prefilled map', () => {

        let map;

        beforeEach(() => {
            map = new Map([ [ 0, true ], [ 1, true ], [ 2, true ], [ 3, true ] ]);
        });

        it('should generate a number', () => {
            expect(generateUniqueNumber(map)).to.be.a('number');
        });

        it('should generate unique numbers', () => {
            for (let i = 0; i < 1000; i += 1) {
                const number = generateUniqueNumber(map);

                expect(map.has(number)).to.be.false;

                map.set(number, 'any value');
            }
        });

        it('should generate consecutive numbers', () => {
            for (let i = 0; i < 1000; i += 1) {
                const number = generateUniqueNumber(map);

                expect(number).to.equal(i + 4);
            }
        });

    });

    describe('with an empty set', () => {

        let set;

        beforeEach(() => {
            set = new Set();
        });

        it('should generate a number', () => {
            expect(generateUniqueNumber(set)).to.be.a('number');
        });

        it('should generate unique numbers', () => {
            for (let i = 0; i < 1000; i += 1) {
                const number = generateUniqueNumber(set);

                expect(set.has(number)).to.be.false;

                set.add(number);
            }
        });

        it('should generate consecutive numbers', () => {
            for (let i = 0; i < 1000; i += 1) {
                const number = generateUniqueNumber(set);

                expect(number).to.equal(i);
            }
        });

    });

    describe('with a prefilled set', () => {

        let set;

        beforeEach(() => {
            set = new Set([ 0, 1, 2, 3 ]);
        });

        it('should generate a number', () => {
            expect(generateUniqueNumber(set)).to.be.a('number');
        });

        it('should generate unique numbers', () => {
            for (let i = 0; i < 1000; i += 1) {
                const number = generateUniqueNumber(set);

                expect(set.has(number)).to.be.false;

                set.add(number);
            }
        });

        it('should generate consecutive numbers', () => {
            for (let i = 0; i < 1000; i += 1) {
                const number = generateUniqueNumber(set);

                expect(number).to.equal(i + 4);
            }
        });

    });

    /*
     * @todo This test does crash the browser.
     * it('should generate unique numbers which are SMIs', function () {
     *     this.timeout(0);
     *
     *     const chunkSize = 1073741824 / 1024;
     *     const set = new Set();
     *     const testChunk = (start) => {
     *         const end = start + chunkSize;
     *
     *         for (let i = start; i < end; i += 1) {
     *             const number = generateUniqueNumber(set);
     *
     *             expect(number).to.be.below(2147483648);
     *
     *             set.add(number);
     *         }
     *     };
     *
     *     let promise = Promise.resolve();
     *
     *     for (let i = 0; i < 1073741824; i += chunkSize) {
     *         promise = promise
     *             .then(() => {
     *                 testChunk(i);
     *
     *                 return new Promise((resolve) => setTimeout(resolve, 10));
     *             });
     *     }
     *
     *     return promise;
     * });
     */

    /*
     * @todo This test does crash the browser.
     * it('should generate unique numbers which above the capacity of an SMI', function () {
     *     this.timeout(0);
     *
     *     const chunkSize = 1073741824 / 1024;
     *     const set = new Set();
     *     const testChunk = (start) => {
     *         const end = start + chunkSize;
     *
     *         for (let i = start; i < end; i += 1) {
     *             const number = generateUniqueNumber(set);
     *
     *             expect(number).to.be.below(2147483648);
     *
     *             set.add(number);
     *         }
     *     };
     *
     *     let promise = Promise.resolve();
     *
     *     for (let i = 0; i < 1073741824; i += chunkSize) {
     *         promise = promise
     *             .then(() => {
     *                 testChunk(i);
     *
     *                 return new Promise((resolve) => setTimeout(resolve, 10));
     *             });
     *     }
     *
     *     return promise
     *         .then(() => {
     *             for (let i = 1073741824; i < 2147483648; i += 1) {
     *                 const number = generateUniqueNumber(set);
     *
     *                 expect(number).to.be.above(2147483648);
     *
     *                 break;
     *             }
     *         });
     * });
     */

});
