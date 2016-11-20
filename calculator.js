const getDelimiter = (numbers) => numbers.substr(numbers.indexOf('//') + 2, numbers.indexOf('//') + 1)
const removeCharacters = (numbers) => numbers.replace('\n','').replace('//','')

const add = (numbers) => {
  return removeCharacters(numbers).split(getDelimiter(numbers))
    .filter(Boolean)
    .reduce((total, num) => parseInt(total) + parseInt(num))


    Promise.all([removeCharactersPromise, getArrayPromise, arrayFilterPromise, sumNumbersPromise])
      .then((res) => {
        return(res)
      }


}



const removeCharactersPromise = new Promise(function(resolve, reject) {
  () => resolve((numbers) => numbers.replace('\n','').replace('//',''))
})

const getDelimiterPromise = new Promise(function(resolve, reject) {
  () => resolve((numbers) => numbers.substr(numbers.indexOf('//') + 2, numbers.indexOf('//') + 1))
})

const getArrayPromise = new Promise(function(resolve, reject) {
  () => resolve((numbers) => numbers.split(getDelimiterPromise(numbers)))
})

const arrayFilterPromise = new Promise(function(resolve, reject) {
  () => resolve((numbers) => numbers.filter(Boolean))
})

const sumNumbersPromise = new Promise(function(resolve, reject) {
  () => resolve((numbers) => numbers.reduce((total, num) => parseInt(total) + parseInt(num)))
})

p.then((res) => {
  res += 2;
  console.log(res);
});


module.exports = {
    add
}
