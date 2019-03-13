alert("JS still Working na kub");
var tile;
var empty_x = '300px';
var empty_y = '300px';

window.onload = function () {
    console.log('Loaded!');

    var board = document.getElementById('game');
    tile = board.getElementsByTagName('div');

    for (var i = 0; i<tile.length; i++) {
        tile[i].className = 'tile';
        tile[i].style.left = (i%4*100)+'px';
        tile[i].style.top = (parseInt(i/4)*100) + 'px';

        tile[i].onmouseover = function() {
            this.style.background = "hsl(120, 66%, 30%)";
        }

        tile[i].onmouseout = function() {
            this.style.background = "hsl(180, 66%, 33%)";
        }

        tile[i].onclick = function() {
           //do the swap but i have fucking no idea!
        }
    }

    console.log('Set all position!');

}

function reset() {

    var board = document.getElementById('game');
    tile = board.getElementsByTagName('div');

    for (var i = 0; i<tile.length; i++) {
        tile[i].className = 'tile';
        tile[i].style.left = (i%4*100)+'px';
        tile[i].style.top = (parseInt(i/4)*100) + 'px';
    }

    console.log('Reset all position!');

}

function shuffle() {

    var board = document.getElementById('game');
    tile = board.getElementsByTagName('div');

    for (var i = 0; i<30; i++) {
        var posi_a = Math.floor(Math.random()*15);
        var posi_b = Math.floor(Math.random()*15);
        while (posi_a == posi_b) {
            var posi_b = Math.floor(Math.random()*15);
        }
        var top_a = tile[posi_a].style.top;
        var left_a = tile[posi_a].style.left;
        var top_b = tile[posi_b].style.top;
        var left_b = tile[posi_b].style.left;

        tile[posi_a].style.top = top_b;
        tile[posi_a].style.left = left_b;

        tile[posi_b].style.top = top_a;
        tile[posi_b].style.left = left_a;

    }
    console.log("Done all shuffle!");
    position();

}

function position() {

    var board = document.getElementById('game');
    tile = board.getElementsByTagName('div');

    for (var i = 0; i < 15; i++) {
        console.log("Tile", i, "at position", "top:",tile[i].style.top, "left:", tile[i].style.left);
    }
}

/*function check() {

    var board = document.getElementById('game');
    tile = board.getElementsByTagName('div');
    var chk = 1;

    for (var i = 0; i < 15; i++) {
        if (tile[i].style.left != (i%4*100)+"px") {
            //console.log("Tile", i, "is not it it position column:", tile[i].style.left, "!=", (i%4*100)+"px")
            chk = 0;
        }
        if (tile[i].style.top != (parseInt(i/4)*100)+"px") {
            //console.log("Tile", i, "is not it it position row:", tile[i].style.top, "!=", (parseInt(i/4)*100)+"px")
            chk = 0;
        }
    }
    if (chk) {
        console.log("all tile is in it's position, ready to play!");
    }
    else {
       console.log("all tile isn't it's position, Not win yet!");
    }

}*/

/* checkwin()

each tile has it own top and left if we check each one we can know is it in it's own position
ex tile 0 == 0 left 0 top
check by

for (var i = 0; i < 15; i++) {
    if (tile[i].style.left != (i%4*100)) {
    return 0;
}
    if (tile[i].style.top = (parseInt(i/4)*100)) {
        return 0;
    }
}*/