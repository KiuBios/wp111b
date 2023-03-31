function mmul(a, b) {
    if (a[0].length !== b.length) {
      throw "Error: number of columns in matrix a must match number of rows in matrix b";
    }
    var result = [];
    for (var i = 0; i < a.length; i++) {
      var row = [];
      for (var j = 0; j < b[0].length; j++) {
        var sum = 0;
        for (var k = 0; k < b.length; k++) {
          sum += a[i][k] * b[k][j];
        }
        row.push(sum);
      }
      result.push(row);
    }
    return result;
  }
  var a = [[1, 2], [3, 4]];
  var b = [[5, 6], [7, 8]];
  var c = mmul(a, b);
  console.log(c); // 會輸出 [[19, 22], [43, 50]]
    