import { addUniqueNumber, generateUniqueNumber } from '../../src/module';

describe('module', () => {
    it('should export the addUniqueNumber function', () => {
        expect(addUniqueNumber).to.be.a('function');
    });

    it('should export the generateUniqueNumber function', () => {
        expect(generateUniqueNumber).to.be.a('function');
    });
});
