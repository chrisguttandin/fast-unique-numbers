import { createCache } from '../../../src/factories/cache';

describe('cache()', () => {
    let cache;
    let lastNumberWeakMap;

    beforeEach(() => {
        lastNumberWeakMap = new WeakMap();

        cache = createCache(lastNumberWeakMap);
    });

    describe('with a map', () => {
        let map;

        beforeEach(() => {
            map = new Map();
        });

        it('should return the given number', () => {
            expect(cache(map, 29)).to.equal(29);
        });

        it('should insert the map and the number to the lastNumberWeakMap', () => {
            cache(map, 29);

            expect(lastNumberWeakMap.get(map)).to.equal(29);
        });
    });

    describe('with a set', () => {
        let set;

        beforeEach(() => {
            set = new Set();
        });

        it('should return the given number', () => {
            expect(cache(set, 29)).to.equal(29);
        });

        it('should insert the set and the number to the lastNumberWeakMap', () => {
            cache(set, 29);

            expect(lastNumberWeakMap.get(set)).to.equal(29);
        });
    });
});
