/**
 * Created by He on 2017/3/14.
 */
'use strict';
function Observer(data) {
    this.data = data;
    this.walk(data);
}
let oberseredList = {};
Observer.prototype = {
    walk: function (obj) {
        let val;
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                val = obj[key];
                if (typeof val === 'object') {
                    new Observer(val);
                }
                this.convert(key, val);
            }
        }
    },
    $watch: function (ele, fn) {
        oberseredList[ele]=fn;
    },
    convert: function (key, val) {
        Object.defineProperty(this.data, key, {
            enumerable: true,
            configurable: true,
            get: function () {
                console.log('你访问了' + key);
                return val
            },
            set: function (newVal) {
                console.log('你设置了' + key + ',新的值为' + newVal);
                console.log();
                if (oberseredList[key])
                oberseredList[key](newVal);
                if (newVal === val) return;
                if (typeof newVal == "object") {
                    new Observer(newVal);
                }               
                val = newVal;
            }
        })
    }
}

let obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4
    }
}

var test = new Observer(obj);
obj.c.d;

let app1 = new Observer({
    name: 'youngwind',
    age: 26
});

app1.data.name = {
    lastName: 'liang',
    firstName: 'shaofeng'
};

app1.data.name.lastName;
app1.data.name.firstName = 'lalala';

app1.$watch('age', function (age) {
    console.log(`我的年纪变了，现在已经是：${age}岁了`);
});

app1.data.age = 120;
