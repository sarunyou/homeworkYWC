var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numRow = 10;
var numCol = 11;
text = []


function generateLetters() {
  for (var row = 0; row < numRow; row++) {
    for (var column = 0; column < numCol; column++) {
      var letter = possible.charAt(Math.floor(Math.random() * possible.length));
      text.push("<span>" + letter + "</span>");
    }
    text.push("<br>");
  }
};

function changeRowColToIndex(row, col) {
  return (row * 12) + col;
};

function createLightWordVertical(word) {
  var indexWord = 0;
  var useCol = Math.floor(Math.random() * numCol);
  var useRow = Math.floor(Math.random() * (numRow - word.length));
  for (var row = useRow; row < useRow + word.length; row++) {
    text[changeRowColToIndex(row, useCol)] = "<span class='light'>" + word.charAt(indexWord) + "</span>";
    indexWord += 1;
  }
};

function createLightWordHorizontal(word) {
  var indexWord = 0;
  var useCol = Math.floor(Math.random() * (numCol - word.length));
  var useRow = Math.floor(Math.random() * (numRow));
  console.log('useCol =' + useCol + ' useRow = ' + useRow);
  for (var col = useCol; col < useCol + word.length; col++) {
    text[changeRowColToIndex(useRow, col)] = "<span class='light'>" + word.charAt(indexWord) + "</span>";
    indexWord += 1;
  }
};

function genNewLetters() {
  wordLight = document.getElementById("wordInput").value.toUpperCase();
  text = []
  generateLetters();
  if (Math.random() > 0.5)
    createLightWordVertical(wordLight);
  else
    createLightWordHorizontal(wordLight);
  document.getElementById("test").innerHTML = text.join(" ");


}
genNewLetters();
