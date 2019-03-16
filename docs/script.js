alert("JS still Working na kub");
        var tile;
        var empty_x = 300;
        var empty_y = 300;

        window.onload = function () {
            console.log('Loaded!');

            var board = document.getElementById('game');
            tile = board.getElementsByTagName('div');

            for (var i = 0; i<15; i++) {
                tile[i].className = 'tile';
                tile[i].style.left = (i%4*100)+'px';
                tile[i].style.top = (parseInt(i/4)*100) + 'px';

                tile[i].onmouseover = function() {
                    this.style.background = "#001d79";
                }

                tile[i].onmouseout = function() {
                    this.style.background = "#1b0947";
                }

                tile[i].onclick = function() {
                    console.log("click on tile", this.innerHTML);
                    checkMove(this.innerHTML-1)
                    checkWin();
                }
            }
            console.log('Set all position!');
        }

        function reset() {
            empty_x = 300;
            empty_y = 300;
            var board = document.getElementById('game');
            tile = board.getElementsByTagName('div');

            for (var i = 0; i<15; i++) {
                tile[i].className = 'tile';
                tile[i].style.left = (i%4*100)+'px';
                tile[i].style.top = (parseInt(i/4)*100) + 'px';
            }

            console.log('Reset position!...... Done!');

        }

        function shuffle() {
            reset();
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

                tile[posi_a].style.top = tile[posi_b].style.top;
                tile[posi_a].style.left = tile[posi_b].style.left;

                tile[posi_b].style.top = top_a;
                tile[posi_b].style.left = left_a;

            }
            console.log("Done all shuffle!");
            //position();
        }

        function checkMove(position) {

            var board = document.getElementById('game');
            tile = board.getElementsByTagName('div');

            var tempTop = parseInt(tile[position].style.top);
            var tempLeft = parseInt(tile[position].style.left);

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

            empty_y = tempTop;
            empty_x = tempLeft;

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
                alert("youwin!");
                console.log("you win!");
            }
            else {
               console.log("all tile isn't it's position, Not win yet!");
            }
        }

        function position() {

            var board = document.getElementById('game');
            tile = board.getElementsByTagName('div');

            for (var i = 0; i < 15; i++) {
                console.log("Tile", i, "at position", "top:",tile[i].style.top, "left:", tile[i].style.left);
            }
        }