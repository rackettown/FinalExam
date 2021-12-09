var slider = document.getElementById("percent");
var output = document.getElementById("amount");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function calctip(){
  var bill = document.getElementById("quantity").value;
  var percent = document.getElementById("percent").value;
  var tip = bill * percent;
  document.getElementById("tip").innerText = "$" + Math.round(tip)/100;
}

function resetMyForm(){
  document.getElementById("tip").innerText="";
  document.getElementById("amount").innerHTML="20";
}