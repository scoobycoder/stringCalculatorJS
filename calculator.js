const flatten = list => list
const add = (numbers) => {
  let delimiter = numbers.substr(numbers.indexOf('//') + 2, numbers.indexOf('//') + 1)
  let newNumbers = numbers.replace('\n','')
  newNumbers = newNumbers.replace('//','')

  let result = newNumbers.split(delimiter)
    .filter(Boolean)
    .reduce((total, num) => parseInt(total) + parseInt(num))

  return result
}

module.exports = {
    add
}
