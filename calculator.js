const delimiter = (numbers) => numbers.substr(numbers.indexOf('//') + 2, numbers.indexOf('//') + 1)
const newNumbers = (numbers) => numbers.replace('\n','').replace('//','')

const add = (numbers) => {
  const result = newNumbers(numbers).split(delimiter(numbers))
    .filter(Boolean)
    .reduce((total, num) => parseInt(total) + parseInt(num))

  return result
}

module.exports = {
    add
}
