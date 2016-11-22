const getDelimiter = (numbers) => numbers.substr(numbers.indexOf('//') + 2, numbers.indexOf('//') + 1)
const removeCharacters = (numbers) => numbers.replace('\n','').replace('//','')

function noNegativesAllowed(number) {
  if (number < 0) {
    return new Error('negatives not allowed')
  }
  else {
    return number
  }
}

const add = (numbers) => {
  try {
    return removeCharacters(numbers).split(getDelimiter(numbers))
      .filter(Boolean)
      .filter(noNegativesAllowed)
      .reduce((total, num) => parseInt(total) + parseInt(num))
  } catch (Error) {
    console.log(Error)
    throw Error
  }
}

module.exports = {
    add
}
