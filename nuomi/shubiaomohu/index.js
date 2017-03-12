/**
 * Created by He on 2017/3/12.
 */
var base =document.querySelector('.base');
var img = document.getElementsByTagName('IMG')[0];
var bor = document.querySelector('.bor');
addHandler(base,'mouseover',function () {
    document.getElementById('welcome').style.display ='inline-block';
    document.getElementById('enter').style.display ='inline-block';
    img.style.WebkitFilter="blur(4px)"
    bor.style.borderWidth ='5px 3px';
    bor.style.borderColor ='white';
    bor.style.borderStyle = 'solid';
})
addHandler(base,'mouseout',function () {
    document.getElementById('welcome').style.display ='none';
    document.getElementById('enter').style.display ='none';
    img.style.WebkitFilter="blur(0px)"
    bor.style.borderWidth='0 0';
})