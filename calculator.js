function add(numbers) {
  return numbers.reduce(getSum);
}

function getSum(total, num) {
   return parseInt(total) + parseInt(num);
}

module.exports = {
    add
}
