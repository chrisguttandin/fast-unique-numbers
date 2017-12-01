import { generateUniqueNumber } from '../../src/module';

describe('module', () => {

    describe('generateUniqueNumber()', () => {

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

});
