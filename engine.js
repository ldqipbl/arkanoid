var _renderer = (function () {
	return window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.oRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function (callback) {
		setTimeout(callback, 1000 / 60);
	};
})();

var _engine = function (game) {
	console.log('Игровой цыкл не инициализирован');
};

var startGame = function (game) {
	if (typeof game == 'function') {
		_engine = game;
	};
	gameLoop();
};

var setGame = function (game) {
	if (typeof game == 'function') {
		_engine = game;
	};
};

var gameLoop = function () {
	_engine();
	_renderer(gameLoop);
};