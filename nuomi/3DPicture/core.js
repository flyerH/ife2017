/*!
 * Created by He on 2017/6/11.
 * E-mail:408348116@qq.com
 */
function getRandomColor()
{
    var c = '#';
    var cArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    for(var i = 0; i < 6;i++)
    {
        var cIndex = Math.round(Math.random()*15);
        c += cArray[cIndex];
    }
    return c;
}
var getBox=document.getElementsByClassName("box")[0];
var getPic=getBox.getElementsByTagName("div");
for(var i=0,l=getPic.length;i<l;++i){
    getPic[i].style.backgroundColor=getRandomColor();
}
getBox.onmouseover=function () {
    getBox.style.animationPlayState="paused";
}
getBox.onmouseout=function () {
    getBox.style.animationPlayState="running";
}
