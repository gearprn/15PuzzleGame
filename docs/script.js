/* global declaration*/
var tile;
var empty_x;
var empty_y;

window.onload = function () {
    console.log('Loaded!');
    var board = document.getElementById('game');
    tile = board.getElementsByTagName('div');

    for (var i = 0; i < 16; i++) {
        if (i == 15) {
            tile[i].id = 'emptyTile';
            tile[i].style.left = (i%4*100)+'px';
            tile[i].style.top = (parseInt(i/4)*100) + 'px';
        }
        else {
            tile[i].className = 'tile';
            tile[i].style.left = (i%4*100)+'px';
            tile[i].style.top = (parseInt(i/4)*100) + 'px';
        }

        tile[i].onclick = function() {
            if (this.innerHTML == "") {
                console.log("you click on empty tile")
            }
            else {
                console.log("click on tile", this.innerHTML);
                checkMove(this.innerHTML-1);
            }
        }
    }
    console.log('Set all position!');
}

function checkMove(position) {

    var board = document.getElementById('game');
    tile = board.getElementsByTagName('div');

    var tempTop = parseInt(tile[position].style.top);
    var tempLeft = parseInt(tile[position].style.left);

    empty_x = parseInt(document.getElementById('emptyTile').style.left);
    empty_y = parseInt(document.getElementById('emptyTile').style.top);

    if (empty_x - 100 == tempLeft && empty_y == tempTop) {
            swap(empty_x, empty_y, tempLeft, tempTop, position);
            empty_x -= 100;
    }
    else if (empty_x + 100 == tempLeft && empty_y == tempTop) {
        swap(empty_x, empty_y, tempLeft, tempTop, position);
        empty_x += 100;
    }
    else if (empty_y - 100 == tempTop && empty_x == tempLeft) {
        swap(empty_x, empty_y, tempLeft, tempTop, position);
        empty_y -= 100;
    }
    else if (empty_y + 100 == tempTop && empty_x == tempLeft) {
        swap(empty_x, empty_y, tempLeft, tempTop, position);
        empty_y += 100;
    }
}

function swap(empty_x, empty_y, left, top, position) {
    var tempTop = top;
    var tempLeft = left;

    tile[position].style.top = empty_y + 'px';
    tile[position].style.left = empty_x + 'px';

    document.getElementById('emptyTile').style.top = tempTop+'px';
    document.getElementById('emptyTile').style.left = tempLeft+'px';

    checkWin();
}

function checkWin() {

    var board = document.getElementById('game');
    tile = board.getElementsByTagName('div');
    var check = 1;

    for (var i = 0; i < 15; i++) {
        if (tile[i].style.left != (i%4*100)+"px") {
                    check = 0;
        }
        if (tile[i].style.top != (parseInt(i/4)*100)+"px") {
                    check = 0;
        }
    }
    if (check) {
        console.log("you win!");
        alertWin();
    }
    else {
        console.log("all tile isn't it's position, Not win yet!");
    }
}

function alertWin() {
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function shuffle() {
    reset();
    var board = document.getElementById('game');
    tile = board.getElementsByTagName('div');

    for (var i = 0; i < 30; i++) {
        var posi_a = Math.floor(Math.random()*15);
        var posi_b = Math.floor(Math.random()*15);
        while (posi_a == posi_b) {
            var posi_b = Math.floor(Math.random()*15);
        }
        var top_a = tile[posi_a].style.top;
        var left_a = tile[posi_a].style.left;

        tile[posi_a].style.top = tile[posi_b].style.top;
        tile[posi_a].style.left = tile[posi_b].style.left;

        tile[posi_b].style.top = top_a;
        tile[posi_b].style.left = left_a;
    }
    console.log("Done all shuffle!");
}

function reset() {

    var board = document.getElementById('game');
    tile = board.getElementsByTagName('div');

    for (var i = 0; i<16; i++) {
        tile[i].style.left = (i%4*100)+'px';
        tile[i].style.top = (parseInt(i/4)*100) + 'px';
    }
    console.log('Reset position!...... Done!');
}

// for check position only!
function position() {
    console.log("start checking!")
    var board = document.getElementById('game');
    tile = board.getElementsByTagName('div');

    for (var i = 0; i < 15; i++) {
        console.log("Tile", i, "at position", "top:",tile[i].style.top, "left:", tile[i].style.left);
    }
    console.log("Done Check!")
}