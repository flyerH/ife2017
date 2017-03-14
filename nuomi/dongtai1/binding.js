/**
 * Created by He on 2017/3/14.
 */
function Observer(data) {
    this.data = data;
    this.walk(data);
}
Observer.prototype = {
    walk : function (obj) {
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
    convert : function (key, val) {
        Object.defineProperty(this.data, key, {
            enumerable: true,
            configurable: true,
            get: function () {
                console.log('你访问了' + key);
                return val
            },
            set: function (newVal) {
                console.log('你设置了' + key);
                console.log('新的' + key + ' = ' + newVal)
                if (newVal === val) return;
                val = newVal
            }
        })
    }
}

let app1 = new Observer({
    name: 'youngwind',
    age: 25
});

let app2 = new Observer({
    university: 'bupt',
    major: 'computer'
});

