function madd(a, b) {
    if (a.length !== b.length || a[0].length !== b[0].length) {
      throw "Error: matrices must have the same dimensions";
    }
    var result = [];
    for (var i = 0; i < a.length; i++) {
      var row = [];
      for (var j = 0; j < a[i].length; j++) {
        row.push(a[i][j] + b[i][j]);
      }
      result.push(row);
    }
    return result;
  }
  var a = [[1, 2], [3, 4]];
  var b = [[5, 6], [7, 8]];
  var c = madd(a, b);
  console.log(c); // 會輸出 [[6, 8], [10, 12]]
    