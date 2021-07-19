var numCount = document.getElementById('num_count');
var plusBtn = document.getElementById('button_plus');
var minusBtn = document.getElementById('button_minus');
plusBtn.onclick = function() {
  var qty = parseInt(numCount.value);
  Qty = Qty + 1;
  numCount.value = Qty;
}
minusBtn.onclick = function() {
  var qty = parseInt(numCount.value);
  Qty = Qty - 1;
  numCount.value = qty;
}