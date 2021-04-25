// по умолчанию
var index = 1;
showCards(index); 

function plus() {
    showCards(index += 1);
}

// картинка в текущий момент
function currentCards(n) {
    showCards(index = n);
}

function showCards(n) {
    var i;
    var cards = document.getElementsByClassName("item");
    if (n > cards.length) {
      index = 1
    }
    if (n < 1) {
        index = cards.length
    }
    for (i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    cards[index - 1].style.display = "block";
}