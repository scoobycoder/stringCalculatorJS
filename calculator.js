const flatten = list => list
const add = (numbers) => {

  const result = numbers.split('\n')
    .map((numbers) => numbers.split(','))
    .reduce(
        (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
    )
    .reduce((total, num) => parseInt(total) + parseInt(num))
  return result
}


module.exports = {
    add
}
