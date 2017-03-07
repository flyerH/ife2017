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

addHandler(button, 'click', changeD);

//改变方向
function changeD() {
    var p = document.getElementById('p' + pos);
    var td = document.getElementById('td' + pos);
    var next_p = null;
    var next_td = null;
    var order = document.getElementsByTagName('input')[0].value.toUpperCase();

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
            break;
        case 'TUN LEF' :
            if (dir==1)
                dir=4;
            else
            dir = (--dir) % 4;
            p.className = dir_arr[dir];
            break;
        case 'TUN RIG' :
            dir = (++dir) % 4;
            p.className = dir_arr[dir];
            break;
        case 'TUN BAC' :
            dir = (dir + 2) % 4;
            p.className = dir_arr[dir];
            break;
    }
}
var t = 3 % 4;
console.log(t);
function error(pos) {
    if (pos < 1 || pos > 100) {
        alert('超出边界！');
        parent.location.reload();
    } else
        return pos;

}

window.onload = function () {
    var start = document.getElementById('td' + pos);
    p = document.getElementById('p' + pos);
    p.className = 'forward';
    start.appendChild(p);
    start.style.backgroundColor = 'red';
    dir = 1;
}


