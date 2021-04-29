var canvas;
var width;
var height;
var ctx;


var init = function () {
	canvas = document.getElementById('canvas');
	width = canvas.width;
	height = canvas.height;
	ctx = canvas.getContext('2d');
};

var fillAll = function (color) {
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, width, height);
};

var drawRect = function (x, y, w, h, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, w, h);
};

var clearAll = function () {
	ctx.clearRect(0, 0, width, height);
};

var drawCircle = function (x, y, r, color) {
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI * 2, false);
	ctx.fill();
};

var isCollision = function (x1, y1, w1, h1, x2, y2, w2, h2) {

	return (x1 < x2 + w2 &&
			x1 + w1 > x2 && 
			y1 < y2 + h2 &&
			h1 + y1 > y2);

};