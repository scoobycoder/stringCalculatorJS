const add = (numbers) => {
  const delimiter = () => numbers.substr(numbers.indexOf('//') + 2, numbers.indexOf('//') + 1)
  const newNumbers = () => numbers.replace('\n','').replace('//','')

  const result = newNumbers().split(delimiter())
    .filter(Boolean)
    .reduce((total, num) => parseInt(total) + parseInt(num))

  return result
}

module.exports = {
    add
}
