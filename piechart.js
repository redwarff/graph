// data to be rendered
var results = [
  { name: "Watching \"let's plays\"", count: 267, color: "lightblue" },
  { name: "Playing minecraft", count: 389, color: "lightgreen" },
  { name: "Drinking alcohol", count: 114, color: "pink" },
  { name: "Spamming comment sections", count: 189, color: "silver" }
];
var header = 'Favorite leisure activity of teenagers';

var cx = document.querySelector("canvas").getContext("2d");
var total = results.reduce(function (sum, choice) {
  return sum + choice.count;
}, 0);

//rendering header
cx.font = "bold 25px Courier";
cx.textBaseline = "bottom";
cx.fillText(header, 60, 70);

//rendering body
var centerX = 350, centerY = 250;
var currentAngle = -0.5 * Math.PI;
results.forEach(function (result) {
  var sliceAngle = (result.count / total) * 2 * Math.PI;
  cx.beginPath();
  cx.arc(centerX, centerY, 100,
    currentAngle, currentAngle + sliceAngle);
  cx.lineTo(centerX, centerY);
  cx.fillStyle = result.color;
  cx.fill();
  cx.font = "bold 16px Courier";
  cx.textBaseline = "middle";
  var textAngle = currentAngle + sliceAngle / 2;
  var yoffset;
  if (textAngle > 0 && textAngle < Math.PI) yoffset = 8;
  else yoffset = -8;
  if (textAngle <= 0.5 * Math.PI) {
    cx.textAlign = "left";
    cx.fillText(result.name, centerX + 100 * Math.cos(textAngle) + 10, centerY + 100 * Math.sin(textAngle) + yoffset);
  }
  else {
    cx.textAlign = "right";
    cx.fillText(result.name, centerX + 100 * Math.cos(textAngle) - 10, centerY + 100 * Math.sin(textAngle) + yoffset);
  }
  currentAngle += sliceAngle;
});
