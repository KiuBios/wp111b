function vadd(a, b) {
    if (a.length !== b.length) {
      throw "Error: vectors must have the same length";
    }
    var result = [];
    for (var i = 0; i < a.length; i++) {
      result.push(a[i] + b[i]);
    }
    return result;
  }
  var a = [1, 2, 3];
  var b = [4, 5, 6];
  var c = vadd(a, b);
  console.log(c); // 會輸出 [5, 7, 9]
    