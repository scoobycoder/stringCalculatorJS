const add = (numbers) => (numberToArray(numbers)
    .reduce((total, num) => (parseInt(total) + parseInt(num))));

const numberToArray = (numbers) => (numbers.split('\n').toString().split(','));


module.exports = {
    add
}
