function count(list) {
    var cmap = {};
    for (var i = 0; i < list.length; i++) {
      var word = list[i];
      if (cmap[word] === undefined) {
        cmap[word] = 1;
      } else {
        cmap[word]++;
      }
    }
    return cmap;
  }
  var list = ['a', 'dog', 'chase', 'a', 'cat'];
  var cmap = count(list);
  console.log(cmap);
    