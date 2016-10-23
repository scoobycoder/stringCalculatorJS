const add = (numbers) => (numberToArray(numbers).reduce(getSum));

const numberToArray = (numbers) => (numbers.split('\n').toString().split(','));

const getSum = (total, num) => (parseInt(total) + parseInt(num));

module.exports = {
    add
}
