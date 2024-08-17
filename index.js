const add = (number) => {
    if (!number) {
        return 0;
    }

    return number.split(',')
        .map((num) => parseInt(num.trim(), 10))
        .reduce((prev, current) => prev + current, 0);
};

module.exports = add;
