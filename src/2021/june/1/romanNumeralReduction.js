// Have the function RomanNumeralReduction(str) read str which will be a string of roman numerals in decreasing order. 
// The numerals being used are: I for 1, V for 5, X for 10, L for 50, C for 100, D for 500 and M for 1000.
// Your program should return the same number given by str using a smaller set of roman numerals. For example: if str is "LLLXXXVVVV" this is 200, so your program should return CC because this is the shortest way to write 200 using the roman numeral system given above. If a string is given in its shortest form, just return that same string.

function romanNumeralReduction(str) {
  var greekObj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
    }
  var total = 0
  var newStr = ''
  for (let i=0; i<str.length; i++) {
    switch (str[i]) {
      case 'I':
        total = total + 1
        break;
      case 'V':
        total = total + 5
        break;
      case 'X':
        total = total + 10
        break;
      case 'L':
        total = total + 50
        break;
      case 'C':
        total = total + 100
        break;
      case 'D':
        total = total + 500
        break;
      case 'M':
        total = total  + 1000
        break;
    }
  } 
    var greek = 'MDCLXVI'
    for (let i=0; i<greek.length; i++) {
      if (total < greekObj[greek[i]]) {
        continue;
      }
      var repeat = Math.trunc(total/greekObj[greek[i]])

      newStr = newStr + greek[i].repeat(repeat)
      total = total - repeat*greekObj[greek[i]]
    }

  return newStr;
}

module.exports = romanNumeralReduction;
