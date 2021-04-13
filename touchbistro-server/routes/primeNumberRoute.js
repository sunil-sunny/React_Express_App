var express = require('express');
var router = express.Router();

/*Acceps the number and return the median numbers of all the prime numbers less than input number*/
router.get('/:id', function (req, res) {

  const inputNumber = req.params.id;

  if (inputNumber > 0) {
    let primes = getPrimeValues(inputNumber);
    let output = [];
    var middle = Math.floor(primes.length / 2);
    if (primes.length % 2 === 0) {
      output.push(primes[middle - 1]);
      output.push(primes[middle]);
    } else {
      output.push(primes[middle]);
    }
    res.status(200).json({
      output
    })
  } else {
    res.status(422).json({
      message: 'Enter a number which is greater than 0'
    })
  }

})

var getPrimeValues = (input) => {

  var inputAray = [], upperLimit = Math.sqrt(input), primeValues = [];

  //Fill the array with true wil the size of input
  for (var i = 0; i < input; i++) {

    if (i == 0 || i == 1) {
      inputAray.push(false);
    } else {
      inputAray.push(true);
    }

  }

  //Below logic removes the primes starting from 2 and at the same time, it makes the values false to all its multiples
  for (var i = 2; i <= upperLimit; i++) {
    if (inputAray[i]) {
      for (var j = i * i; j < input; j += i) {
        inputAray[j] = false;
      }
    }
  }

  //All the true values in input array is pushed to primeValues array which returns the list of prime numbers
  for (var i = 2; i < input; i++) {
    if (inputAray[i]) {
      primeValues.push(i);
    }
  }

  return primeValues;
};

module.exports = router;
