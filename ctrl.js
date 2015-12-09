var alphabet = [
  ["I", "T", "L", "I", "S", "B", "F", "A", "M", "P", "M"],
  ["A", "C", "Q", "U", "A", "R", "T", "E", "R", "D", "C"],
  ["T", "W", "E", "N", "T", "Y", "F", "I", "V", "E", "X"],
  ["H", "A", "L", "F", "B", "T", "E", "N", "F", "T", "O"],
  ["P", "A", "S", "T", "E", "R", "U", "N", "I", "N", "E"],
  ["O", "N", "E", "S", "Y", "W", "C", "H", "R", "E", "E"],
  ["F", "O", "U", "R", "F", "I", "V", "E", "T", "W", "O"],
  ["E", "I", "G", "H", "T", "E", "L", "E", "V", "E", "N"],
  ["S", "E", "V", "E", "N", "T", "W", "E", "L", "V", "E"],
  ["T", "E", "N", "S", "E", "O", "C", "L", "O", "C", "K"]
];
var text = [];

for (i = 0; i < alphabet.length; i++) {
  var isStart = true
      text.push("<span>" + alphabet[i][0] + "</span>");
      text.push("<span>" + alphabet[i][1] + "</span>");
  for (var j = 2; j < alphabet[i].length; j++) {
      text.push("<span>" + alphabet[i][j] + "</span>");
    if (alphabet[i][j-2] == "Y" && alphabet[i][j-1] == "W" && alphabet[i][j] == "C" && isStart) {
      console.log('hey i get it');
        text.splice(-3,3);
        for (var g = j-2; g <= j; g++) {
          console.log('i push ' + alphabet[i][g]);
          text.push("<span class='light'>" + alphabet[i][g] + "</span>");
        }

    }


  }
  text.push("<br>");
}

document.getElementById("test").innerHTML = text.join(" ");
