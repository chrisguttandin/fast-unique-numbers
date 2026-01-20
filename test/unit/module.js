import { addUniqueNumber, generateUniqueNumber } from '../../src/module';
import { describe, expect, it } from 'vitest';

describe('module', () => {
    it('should export the addUniqueNumber function', () => {
        expect(addUniqueNumber).to.be.a('function');
    });

    it('should export the generateUniqueNumber function', () => {
        expect(generateUniqueNumber).to.be.a('function');
    });
});
