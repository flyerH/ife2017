/**
 * Created by He on 2017/3/6.
 */
function addHandler(element,type,handler) {
    if (element.addEventListener){
        element.addEventListener(type,handler,false);
    }else if (element.attachEvent){
        element.attachEvent("on"+type,handler);
    }else {
        element["on"+type] = null;
    }
}

function getEvent(event) {
    return event = event ? event : window.event;
}

function getTarget(event) {
    return target = event.target || event.srcElement;
}
