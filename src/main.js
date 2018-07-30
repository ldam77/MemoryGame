import { memoryGame } from './memory';
import { Card } from './memory';
import './styles.css';
import cardBack from './img/back.jpg';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';

var cards = [
  new Card(img1, 1),
  new Card(img2, 2),
  new Card(img3, 3),
  new Card(img4, 4),
  new Card(img5, 5),
  new Card(img1, 6),
  new Card(img2, 7),
  new Card(img3, 8),
  new Card(img4, 9),
  new Card(img5, 10)
];




$(document).ready(function() {
  var rowCount = 0;
  var currentRow = 1;
  for(var i = 1; i <= cards.length; i++) {
  
    $("div.row"+currentRow).append(
      // "<h1>BOO!</h1>"
      "<div class='col-md-2' id='"+i+"'><img class='cardback' id='"+i+"pic' alt='back'></div>"
    );
    rowCount++;
    if (rowCount === 5) {
      rowCount = 0;
      currentRow++;
    }

    $("#"+i).click(function() {
      memoryGame(this.id, cards[this.id-1].img);
    });
  }

  $(".cardback").attr("src", cardBack);
});
