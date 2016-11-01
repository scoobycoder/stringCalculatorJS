const getDelimiter = (numbers) => numbers.substr(numbers.indexOf('//') + 2, numbers.indexOf('//') + 1)
const removeCharacters = (numbers) => numbers.replace('\n','').replace('//','')

const add = (numbers) => {
  const result = removeCharacters(numbers).split(getDelimiter(numbers))
    .filter(Boolean)
    .reduce((total, num) => parseInt(total) + parseInt(num))

  return result
}

module.exports = {
    add
}
