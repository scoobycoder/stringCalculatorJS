function add(numbers) {
  return numbers.split(',').reduce(getSum);
}

function getSum(total, num) {
   return parseInt(total) + parseInt(num);
}

module.exports = {
    add
}
