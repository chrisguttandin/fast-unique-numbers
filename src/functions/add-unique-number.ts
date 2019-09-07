import { generateUniqueNumber } from './generate-unique-number';

export const addUniqueNumber = (set: Set<number>): number => {
    const number = generateUniqueNumber(set);

    set.add(number);

    return number;
};
