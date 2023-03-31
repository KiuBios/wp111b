function vdot(a, b) {
    if (a.length !== b.length) {
      throw "Error: vectors must have the same length";
    }
    var result = 0;
    for (var i = 0; i < a.length; i++) {
      result += a[i] * b[i];
    }
    return result;
  }
  var a = [1, 2, 3];
  var b = [4, 5, 6];
  var c = vdot(a, b);
  console.log(c); // 會輸出 32
    