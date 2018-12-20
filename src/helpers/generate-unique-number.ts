const LAST_NUMBER_WEAK_MAP = new WeakMap<(Map<number, any> | Set<number>), number>();
/*
 * The value of the constant Number.MAX_SAFE_INTEGER equals (2 ** 53 - 1) but it
 * is fairly new.
 */
const MAX_SAFE_INTEGER = (Number.MAX_SAFE_INTEGER === undefined) ? 9007199254740991 : Number.MAX_SAFE_INTEGER;

const cache = (collection: (Map<number, any> | Set<number>), nextNumber: number) => {
    LAST_NUMBER_WEAK_MAP.set(collection, nextNumber);

    return nextNumber;
};

export const generateUniqueNumber = (collection: (Map<number, any> | Set<number>)): number => {
    const lastNumber = LAST_NUMBER_WEAK_MAP.get(collection);

    /*
     * Let's try the cheapest algorithm first. It might fail to produce a new
     * number, but it is so cheap that it is okay to take the risk. Just
     * increase the last number by one or reset it to 0 if we reached the upper
     * bound of SMIs (which stands for small integers). When the last number is
     * unknown it is assumed that the collection contains zero based consecutive
     * numbers.
     */
    let nextNumber = (lastNumber === undefined) ?
        collection.size :
        (lastNumber > 2147483648) ?
            0 :
            lastNumber + 1;

    if (!collection.has(nextNumber)) {
        return cache(collection, nextNumber);
    }

    /*
     * If there are less than half of 2 ** 31 numbers stored in the collection,
     * the chance to generate a new random number in the range from 0 to 2 ** 31
     * is at least 50%. It's benifitial to use only SMIs because they perform
     * much better in any environment based on V8.
     */
    if (collection.size < 1073741824) {
        while (collection.has(nextNumber)) {
            nextNumber = Math.floor(Math.random() * 2147483648);
        }

        return cache(collection, nextNumber);
    }

    // Quickly check if there is a theoretical chance to generate a new number.
    if (collection.size > MAX_SAFE_INTEGER) {
        throw new Error('Congratulations, you created a collection of unique numbers which uses all available integers!');
    }

    // Otherwise use the full scale of safely usable integers.
    while (collection.has(nextNumber)) {
        nextNumber = Math.floor(Math.random() * MAX_SAFE_INTEGER);
    }

    return cache(collection, nextNumber);
};
