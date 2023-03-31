function repeat(f, n) {
    var result = [];
    for (var i = 0; i < n; i++) {
      result.push(f());
    }
    return result;
  }
  var randomNumbers = repeat(Math.random, 10);
  console.log(randomNumbers);
    