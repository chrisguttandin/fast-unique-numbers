import { beforeEach, describe, expect, it } from 'vitest';
import { createAddUniqueNumber } from '../../../src/factories/add-unique-number';
import { stub } from 'sinon';

describe('addUniqueNumber()', () => {
    let addUniqueNumber;
    let generateUniqueNumber;
    let set;

    beforeEach(() => {
        generateUniqueNumber = stub();
        set = new Set();

        addUniqueNumber = createAddUniqueNumber(generateUniqueNumber);

        generateUniqueNumber.returns(17);
    });

    it('should return the number returned by generateUniqueNumber()', () => {
        expect(addUniqueNumber(set)).to.equal(17);
    });

    it('should add the number returned by generateUniqueNumber() to the given set', () => {
        addUniqueNumber(set);

        expect(set.size).to.equal(1);
        expect(set.has(17)).to.be.true;
    });
});
