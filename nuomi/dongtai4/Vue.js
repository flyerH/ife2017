/**
 * Created by He on 2017/4/24.
 * E-mail:408348116@qq.com
 */
"use strict";
function Vue(selector, data) {
    const app = document.querySelector(selector);
        app.innerHTML = app.innerHTML.replace(/\{\{(.*?)\}\}/g, function (a, key) {
            key = key.split(".");
            let lh=key.length;
            let temp=data;
            for (let i = 0; i < lh; ++i) {
                if (temp[key[i]] !== undefined) {
                    temp=temp[key[i]];
                }else
                    return;
            }
            return temp;
        });
}
let data = {
    user: {
        name: 'youngwind',
        age: 25
    }
};
document.getElementsByTagName("BUTTON")[0].onclick=function(){
    let out=new Vue("#app", data);
    document.getElementById("info").innerText="页面渲染后的 html 模板片段";
    this.disabled=true;
};
