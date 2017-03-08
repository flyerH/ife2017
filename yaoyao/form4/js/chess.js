/**
 * Created by He on 2017/3/6.
 */
var chessboard = document.querySelector('.chessboard');
var button = document.getElementsByTagName('button')[0];
var index = 1;
var pos = 56;
var dir = null;
var dir_arr = [' ', 'forward', 'turnRight', 'back', 'turnLeft'];
for (var i = 1; i <= 10; i++) {
    var tr = document.createElement('TR');
    var span = document.createElement('span');
    span.innerHTML = i;
    span.className = 'title';
    tr.appendChild(span);
    for (var j = 0; j < 10; j++) {
        var td = document.createElement('TD');
        var p = document.createElement('p');
        td.style.position = 'relative';
        p.style.position = 'absolute';
        p.id = 'p' + index;
        td.id = 'td' + index++;
        td.appendChild(p);
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
    var p = document.getElementById('p' + pos);
    var td = document.getElementById('td' + pos);
    var next_p = null;
    var next_td = null;

    switch (order) {
        case 'GO':
            p.style.backgroundColor = 'white';
            td.style.backgroundColor = 'white';
            if (dir == 1) {
                pos = error(pos - 10);
                next_p = document.getElementById('p' + pos);
                next_td = document.getElementById('td' + pos);
                next_p.className = p.className;
                next_td.style.backgroundColor = 'red';
            }
            if (dir == 2) {
                if (pos % 10 == 0)
                    error(0);
                pos++;
                next_p = document.getElementById('p' + pos);
                next_td = document.getElementById('td' + pos);
                next_p.className = p.className;
                next_td.style.backgroundColor = 'red';
            }
            if (dir == 3) {
                pos = error(pos + 10)
                next_p = document.getElementById('p' + pos);
                next_td = document.getElementById('td' + pos);
                next_p.className = p.className;
                next_td.style.backgroundColor = 'red';
            }
            if (dir == 4) {
                if (--pos % 10 == 0)
                    error(0);
                next_p = document.getElementById('p' + pos);
                next_td = document.getElementById('td' + pos);
                next_p.className = p.className;
                next_td.style.backgroundColor = 'red';
            }
            next_p.style.backgroundColor = 'blue';
            break;
        case 'TUN LEF' :
            if (dir == 1)
                dir = 4;
            else
                dir = (--dir) % 4;
            p.className = dir_arr[dir];
            break;
        case 'TUN RIG' :
            dir = (dir + 1) % 4;
            if (dir == 0)
                dir = 4;
            p.className = dir_arr[dir];
            break;
        case 'TUN BAC' :
            dir = (dir + 2) % 4;
            if (dir == 0)
                dir = 4;
            p.className = dir_arr[dir];
            break;
    }
}
function error(pos) {
    if (pos < 1 || pos > 100) {
        alert('超出边界！');
        parent.location.reload();
    } else
        return pos;

}

addHandler(document, 'keydown', keyboard);

function keyboard(e) {
    var event = getEvent(e);
    switch (event.keyCode) {
        case 38:
            e.preventDefault();
            changeD('GO');
            break;
        case 40:
            e.preventDefault();
            changeD('TUN BAC');
            break;
        case 37:
            e.preventDefault();
            changeD('TUN LEF');
            break;
        case 39:
            e.preventDefault();
            changeD('TUN RIG');
            break;
    }
}

window.onload = function () {
    var start = document.getElementById('td' + pos);
    p = document.getElementById('p' + pos);
    p.className = 'forward';
    p.style.backgroundColor = 'blue';
    start.appendChild(p);
    start.style.backgroundColor = 'red';
    dir = 1;
}


