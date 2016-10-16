function add(numbers) {
  let numbs = numberToArray(numbers);

  return numbs.reduce(getSum);
}

function numberToArray(numbers) {
  return numbers.split('\n').toString().split(',');
}

function getSum(total, num) {
   return parseInt(total) + parseInt(num);
}

module.exports = {
    add
}
