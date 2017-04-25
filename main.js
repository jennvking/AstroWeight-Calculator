// 2D Array with planets/gravity
var planetsArr = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupitor', 2.64],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9],
];

//Reverse array and create a dynamically generated dropdown
planetsArr = planetsArr.reverse();
var sel = document.getElementById('planets')
for (var i = 0; i < planetsArr.length; i += 1) {
  var opt = document.createElement('option');
  opt.label = planetsArr[i][0];
  opt.value = planetsArr[i][1];
  sel.appendChild(opt);
}

//Create a function to calculate the weight on any selected planet
function calculateWeight() {
  var planetIndex = document.getElementById('planets').selectedIndex;
  var weight = document.getElementById('userWeight').value;
  var gravity = document.getElementById('planets')[planetIndex].value;
  var calcu = weight * gravity;
  var result = Math.round(calcu * 100) / 100;
  return result;
}

//Use onclick to call the calweight function and return the result
document.getElementById('Submit').onclick = function handleClickEvent(ev) {
  var planetIndex = document.getElementById('planets').selectedIndex;
  var planetName = document.getElementById('planets').options[planetIndex].label;
  var planetWeight = calculateWeight();
  document.getElementById('output').innerHTML = '<p>Your weight would be ' + planetWeight + ' lbs on ' + planetName + '.</p>';
}
