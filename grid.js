var grid = {

	nodes : [],

	add : function (x, y, w, h, c) {
		var tmp = new _Enemy(x, y, w, h, c);
		this.nodes.push(tmp);
	},

	generate : function (count, w, h, color) {

		var dw = 5;
		var dx = dw;
		var dCountX = Math.ceil(width / (w + dw))-1;
		var dAllW = Math.ceil((width - (w + dw) * dCountX) / 2);
		var dy = dAllW;

		for (var i = 0; i < count; i++) {

			for (var j = 0; j < dCountX; j++) {

				if (j == 0){
					dx =+ Math.ceil(dAllW - dw/2);
				};

				this.add(dx, dy, w, h, color);
				dx += w + dw;

			};

			dy += h + dw;
			dx = dw;

		};
	},

	create : function (map) {

		var dOffsetX = (width - (map.tiles[0].length * (map.width + map.offset))) / 2;

		for (var t1 in map.tiles) {

			for (var t2 in map.tiles[t1]) {

				var tile = map.tiles[t1][t2];
				var dx = dOffsetX + t2 * (map.width + map.offset);
				var dy = map.offset + t1 * (map.height + map.offset);

				if (tile == 1) {
					this.add(dx, dy, map.width, map.width, map.color);
				};

			};

		};
	},

	clear : function () {
		this.nodes = [];
	},

	destroy : function (id) {
		this.nodes.splice(id, 1);
	},

	draw : function () {
		for (en in this.nodes) {
			this.nodes[en].draw();
		};
	},
};


var _Enemy = function (x, y, w, h, color) {
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.color = color;
};

_Enemy.prototype.draw = function () {
	drawRect(this.x, this.y, this.width, this.height, this.color);
};

