const getDelimiter = (numbers) => numbers.substr(numbers.indexOf('//') + 2, numbers.indexOf('//') + 1)
const removeCharacters = (numbers) => numbers.replace('\n','').replace('//','')

function noNegativesAllowed(number) {
  if (number < 0) {
    return 'negatives not allowed'
  }
  else {
    return number;
  }
}

const add = (numbers) => {
  try {
    return removeCharacters(numbers).split(getDelimiter(numbers))
      .filter(Boolean)
      .filter(noNegativesAllowed)
      .reduce((total, num) => parseInt(total) + parseInt(num))
  } catch (ReferenceError) {
    throw ReferenceError
  }
}

module.exports = {
    add
}
