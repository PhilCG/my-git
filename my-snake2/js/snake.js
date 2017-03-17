//Roading
var back_w = $(window).width(),
    back_h = $(window).height(),
    x = parseInt((back_w - 50) / 25),
    y = parseInt((back_h - 50) / 25),
    w = 25 * x,
    h = 25 * y,
    xy = x * y,
    time = 0,
    length = 3,
    pause = 0,
    head = x + 4,
    head0 = head,
    dire = 4, //1up 2down 3left 4right
    dire0 = 4;


$(function main() {
    css();
    create_grid();
    keyboard();
    create_snake();
    create_food();
    timer;
});


$(window).resize(function() {
    console.log('Oh Boy..');
    end();
});


//Base Setting
function css() {
    $('#back').css({
        'width': back_w,
        'height': back_h
    });
    $('#font').css({
        'width': w,
        'height': h
    });
};

function create_grid() {
    $('#font').empty();
    for (i = 0; i < xy; i++) {
        var _i = (i + 1).toString(),
            grid = document.createElement('div');
        document.getElementById('font').appendChild(grid);
        $(grid).addClass('grid').addClass(_i);
    };
};

function keyboard() {
    document.onkeydown = function(event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 38) { //up
            if (dire0 != 2) {
                dire = 1;
                console.log('up');
            };
        };
        if (e && e.keyCode == 40) { //down
            if (dire0 != 1) {
                dire = 2;
                console.log('down');
            };

        };
        if (e && e.keyCode == 37) { //left 
            if (dire0 != 4) {
                dire = 3;
                console.log('left');
            };

        };
        if (e && e.keyCode == 39) { //right
            if (dire0 != 3) {
                dire = 4;
                console.log('right');
            };
        };
        if (e && e.keyCode == 32) { //pause
            pause_go();
        };
    };
}

//Element Setting
function create_snake() {
    $('.' + (x + 4)).addClass('head t0');
    $('.' + (x + 3)).addClass('snake t-1');
    $('.' + (x + 2)).addClass('snake t-2');
    console.log('create_snake');

};

function create_food() {
    var random = parseInt(Math.random() * xy);
    console.log(random);

    $('.' + random).addClass('food');
    if ($('.food').is('.snake') || $('.food').is('.head')) {
        console.log('oops');
        $('.food').removeClass('food');
        create_food();
    }
    console.log('create_food');
};


//Play
var timer = window.setInterval('loop()', 300);

function loop() {
    move();
    check();
    pause = 0;
}

function pause_go() {
    pause === 0 ? end() : timer = window.setInterval('loop()', 300);
}

function end() {
    window.clearInterval(timer);
    pause = 1;
}

//move
function move() {
    dire0 = dire;
    time = time + 1;
    $('.head').removeClass('head').addClass('snake');
    //direction
    if (dire === 1) {
        head = head - x;
    };
    if (dire === 2) {
        head = head + x;
    };
    if (dire === 3) {
        head = head - 1;
    };
    if (dire === 4) {
        head = head + 1;
    };
    $('.' + head).addClass('head').addClass('t' + (time));
    $('.t' + (time - length)).removeClass('snake');
}


//event
function check() {
    //wall
    if (head < 0 || head > xy) {
        alert('hit the wall');
        end();
    };
    if (head % x === 0 && head0 % x === 1) {
        alert('hit the wall a');
        end();
    };
    if (head % x === 1 && head0 % x === 0) {
        alert('hit the wall b');
        end();
    };
    //self
    if ($('.head').is('.snake')) {
        alert('ouch..GAME OVER');
        end();
    };
    //food
    if ($('.head').is('.food')) {
        console.log('nice!');
        $('.food').removeClass('food');
        create_food();
        length = length + 2;
        $('#back').css('color', '#fa' + parseInt(9999 * Math.random()));
    };
    head0 = head;
}







"use strict";

window.onkeydown = function(ctx, snake, food, direction, move, draw) {
    return function(loop, newFood, timer) {
        return Array.from({
            length: 400
        }).forEach(function(_e, i) {
            return draw(ctx, i, "black");
        }) || (timer = setInterval(function() {
            return loop(newFood) || clearInterval(timer) || console.log(timer) || alert('Game Over');
        }, 200)) && function(e) {
            return direction = snake[1] - snake[0] == (move = [-1, -20, 1, 20][(e || event).keyCode - 37] || direction) ? direction : move;
        };
    }(function(newFood) {
        return snake.unshift(move = snake[0] + direction) && snake.indexOf(move, 1) > 0 || move < 0 || move > 399 || direction == 1 && move % 20 == 0 || direction == -1 && move % 20 == 19 ? false : (draw(ctx, move, "green") || move == food ? newFood() & draw(ctx, food, "red") : draw(ctx, snake.pop(), "Black")) !== [];
    }, function() {
        return Array.from({ length: 8000 }).some(function(e) {
            return snake.indexOf(food = ~~(Math.random() * 400)) === -1;
        });
    });
}(document.getElementById('canvas').getContext('2d'), [42, 41], 43, 1, null, function(ctx, node, color) {
    return (ctx.fillStyle = color) & ctx.fillRect(node % 20 * 20 + 1, ~~(node / 20) * 20 + 1, 18, 18);
});
