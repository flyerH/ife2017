/**
 * Created by He on 2017/3/15.
 */
'use strict';
function Observer(data, parent) {
    this.data = data;
    this.walk(data, parent);
}
let oberseredList = {};
Observer.prototype = {
    walk: function (obj, parent) {
        let val;
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                val = obj[key];
                if (typeof val === 'object') {
                    new Observer(val, key);
                }
                this.convert(key, val, parent);
            }
        }
    },
    $watch: function (ele, fn) {
        oberseredList[ele] = fn;
    },
    convert: function (key, val, parent) {
        Object.defineProperty(this.data, key, {
            enumerable: true,
            configurable: true,
            get: function () {
                console.log('你访问了' + key);
                return val
            },
            set: function (newVal) {
                console.log('你设置了' + key + ',新的值为' + newVal);
                if (oberseredList[parent])
                    oberseredList[parent](newVal);
                if (newVal === val) return;
                if (typeof newVal == "object") {
                    new Observer(newVal);
                }
                val = newVal;
            }
        })
    }
}

let app2 = new Observer({
        name: {
            firstName: 'shaofeng',
            lastName: 'liang'
        },
        test: {
            one: '1',
            two: '2'
        },
        age: 25
    })
    ;

app2.$watch('name', function (newName) {
    console.log('我的姓名发生了变化，可能是姓氏变了，也可能是名字变了。')
});

app2.$watch('test', function (newName) {
    console.log('测试内容发生变化，某个成员发生了变化。')
});

app2.data.name.firstName = 'hahaha';
// 输出：我的姓名发生了变化，可能是姓氏变了，也可能是名字变了。
app2.data.name.lastName = 'blablabla';
// 输出：我的姓名发生了变化，可能是姓氏变了，也可能是名字变了。

app2.data.test.one;
app2.data.test.two = '3';
