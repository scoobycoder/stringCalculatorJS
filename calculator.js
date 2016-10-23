const add = (numbers) => ((numbers.split('\n').toString().split(',')))
    .reduce((total, num) => (parseInt(total) + parseInt(num)));

module.exports = {
    add
}
