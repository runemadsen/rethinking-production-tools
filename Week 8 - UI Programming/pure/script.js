var label = document.getElementById('label');
var red = document.getElementById('red');
var green = document.getElementById('green');
var blue = document.getElementById('blue');

red.addEventListener('click', buttonClicked)
green.addEventListener('click', buttonClicked)
blue.addEventListener('click', buttonClicked)

function buttonClicked(e) {
  
  // get the color from the id name
  var color = e.target.attributes.id.value;

  // update label
  label.innerHTML = "The current color is " + color;

}
