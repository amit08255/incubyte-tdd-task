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

    return number.split(delimiter)
        .map((num) => parseInt(num.trim(), 10))
        .reduce((prev, current) => prev + current, 0);
};

module.exports = add;
