const add = (numbers) =>
    (numbers.split('\n'))
    .map((numbers) => numbers.split(','))
    // .map((numbers) => console.log(numbers))
    .reduce((total, num) => parseInt(total) + parseInt(num));

module.exports = {
    add
}
