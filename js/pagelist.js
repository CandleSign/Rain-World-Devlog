if (document.getElementById('pagelist')) {
	var pl = [];
	var pn = Number(window.location.pathname.split('/').pop().split('.').shift());
	for (var j=pn-5; j < pn+5; j++) {
		if (j > 0 && j < 96) {
			pl.push(j);
					};
	};
	if (pl[0] > 2) {
		pl.unshift(1, '...');
	} else if (pl[0] > 1) {
		pl.unshift(1);
	};
	if (pl[0] < 94) {
		pl.push('...', 95);
	} else if (pl[0] < 95) {
		pl.push(95);
	};
	var pl2 = [];
	pl.forEach(
		function (v, i) {
			var endtxt1 = v;
			if (v != '...') {
				var endtxt1 = v;
				if (Number(v) == pn) {
					endtxt1 = '[' + endtxt1 + ']';
				} else {
					if (v < 10) {
						endtxt1 = '<a href="/Rain-World-Devlog/Pages/00' + v + '.html">' + endtxt1 + '</a>';
					} else {
						endtxt1 = '<a href="/Rain-World-Devlog/Pages/0' + v + '.html">' + endtxt1 + '</a>';
					};
				};
			};
			pl2[i] = endtxt1;
		}
	);
	var endtxt2 = pl2.join(' ');
	if (pn > 1) {
		var n = pn-1
		endtxt2 = '<a href="/Rain-World-Devlog/Pages/00' + n + '.html"><</a> ' + endtxt2;
	};
	if (pn < 95) {
		var n = pn+1
		endtxt2 = endtxt2 + ' <a href="/Rain-World-Devlog/Pages/00' + n + '.html">></a>'
	};
	document.getElementById('pagelist').innerHTML = endtxt2;
}
