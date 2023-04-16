function monthToIndex(month) {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months.indexOf(month) + 1;
}
var monthIndex = monthToIndex('October');
console.log(monthIndex);