'use strict';

class PraiseButton {};
class Thrumb extends PraiseButton{};

Thrumb.prototype.addNum = function (dom) {   
    dom.style.display = 'block';
    dom.classList.add('showAnimate');
}
Thrumb.prototype.removeNum = function (dom) {   
    dom.style.display = 'none';
    dom.classList.remove('showAnimate');
}
let sub = new Thrumb;
let handBox = document.getElementById('handleMain')
let numBox = document.getElementById('num');
handleMain.addEventListener('click', function () {
	sub.addNum(numBox);
    window.setTimeout(function () {
    	sub.removeNum(numBox);
    }, 600);
}) 
