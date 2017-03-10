/**
 * Created by He on 2017/3/6.
 */
var chessboard = document.querySelector('.chessboard');
var button = document.getElementsByTagName('button')[0];
var index = 1;
var pos = 56;
var dir_arr = [' ', 'forward', 'turnRight', 'back', 'turnLeft'];
for (var i = 1; i <= 10; i++) {
    var tr = document.createElement('TR');
    var span = document.createElement('span');
    tr.style.position = 'relative';
    span.innerHTML = i;
    span.className = 'title';
    tr.appendChild(span);
    for (var j = 0; j < 10; j++) {
        var td = document.createElement('TD');
        var div = document.createElement('div');
        div.id = 'div' + index;
        index++;
        td.appendChild(div);
        tr.appendChild(td);
    }
    chessboard.appendChild(tr);
}

addHandler(button, 'click', inputOrder);

function inputOrder() {
    var order = document.getElementsByTagName('input')[0].value.toUpperCase();
    changeD(order);
}
//改变方向
function changeD(order) {
    var div = document.getElementById('div' + pos);
    var next_div = null;

    switch (order) {
        case 'TRA TOP':
            pos = error(pos - 10);
            doit();
            break;
        case 'TRA RIG':
            if (pos % 10 == 0)
                error(0);
            pos++;
            doit();
            break;
        case 'TRA BOT':
            pos = error(pos + 10)
            doit();
            break;
        case 'TRA LEF':
            if (--pos % 10 == 0)
                error(0);
            doit();
            break;
        case 'MOV LEF' :
            div.className = dir_arr[4];
            changeD('TRA LEF');
            break;
        case 'MOV RIG' :
            div.className = dir_arr[2];
            changeD('TRA RIG');
            break;
        case 'MOV BOT' :
            div.className = dir_arr[3];
            changeD('TRA BOT');
            break;
        case 'MOV TOP':
            div.className = dir_arr[1];
            changeD('TRA TOP');
            break;
    }

    function doit() {
            next_div = document.getElementById('div' + pos);
            next_div.style.backgroundColor = 'red';
            next_div.className = div.className;
            div.className = 'none';
    }
}
function error(pos) {       //边界判断
    if (pos < 1 || pos > 100) {
        alert('超出边界！');
        parent.location.reload();
    } else
        return pos;

}

addHandler(document, 'keydown', keyboard);

function keyboard(e) {
    var event = getEvent(e);
    var except=/(37|38|39|40|65|68|83|87)+/;        //取消WASD及方向键的默认功能，避免网页滚动
    if (except.test(event.keyCode)){
        e.preventDefault();
    }
    switch (event.keyCode) {
        case 65:
            changeD('TRA LEF');
            break;
        case 68:
            changeD('TRA RIG');
            break;
        case 83:
            changeD('TRA BOT');
            break;
        case 87:
            changeD('TRA TOP');
            break;

        case 37:
            changeD('MOV LEF');
            break;
        case 38:
            changeD('MOV TOP');
            break;
        case 39:
            changeD('MOV RIG');
            break;
        case 40:
            changeD('MOV BOT');
            break;


    }
}

window.onload = function () {
    var div = document.getElementById('div' + pos);
    div.className = dir_arr[1];
}


