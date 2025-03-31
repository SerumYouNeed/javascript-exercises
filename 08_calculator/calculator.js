const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  let i = 0;
	for ( const x of a) { 
    i += x; 
  }
  return i
};

const multiply = function(a) {
  if (a.length > 0) {
    let i = a[0];
    for ( let x = 1; x < a.length; x++) {
      i *= a[x];
    }
    return i;
  }
  return [];  
};

const power = function(a, b) {
  let pow = a;
	for ( let x = 1; x < b; x++) {
    pow *= a;
  }
  return pow;
};

const factorial = function(a) {
	if ( a === 0 || a === 1) {
    return 1;
  }
  let fact = 1
  for (let i = 1; i <= a; i++) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
