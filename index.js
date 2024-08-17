function parseNumbersWithDelimeter(input) {
    const regex = /^\/\/(.+?)\n(.*)$/gms;

    const match = input.match(regex);

    if (match) {
        const prefix = input.split('\n', 1)[0];
        const delimiter = prefix.replace('//', '').trim();
        const numbers = input.replace(prefix, '').trim();

        return {
            delimiter,
            numbers,
        };
    }
    throw new Error(`Invalid input format: ${input}`);
}

const add = (numString) => {
    if (!numString) {
        return 0;
    }

    const parsedNumber = numString.startsWith('//') ? parseNumbersWithDelimeter(numString) : null;
    const number = parsedNumber ? parsedNumber.numbers : numString;
    const delimiter = parsedNumber ? RegExp(`${parsedNumber.delimiter}|\n`) : /,|\n/;

    const negativeNumbers = [];

    const numberList = number.split(delimiter)
        .map((num) => {
            const intValue = parseInt(num.trim(), 10);

            if (intValue < 0) {
                negativeNumbers.push(intValue);
            }

            return intValue;
        });

    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }

    return numberList.reduce((prev, current) => prev + current, 0);
};

module.exports = add;
