const getDelimiter = (numbers) => numbers.substr(numbers.indexOf('//') + 2, numbers.indexOf('//') + 1)
const removeCharacters = (numbers) => numbers.replace('\n','').replace('//','')
const ignoreNumberOver1000 = (number) => number >= 1000 ? 0 : number

const add = (numbers) => {
  return removeCharacters(numbers).split(getDelimiter(numbers))
    .filter(Boolean)
    .filter(ignoreNumberOver1000)
    .reduce((total, num) => parseInt(total) + parseInt(num))
}

module.exports = {
    add
}
