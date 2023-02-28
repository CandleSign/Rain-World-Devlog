var h = document.getElementsByClassName('header')[0];
if (h) {
	var ls = 0;
	window.addEventListener("scroll",
		function () {
			var cs = window.pageYOffset;
			if (cs > ls) {
				h.style.top = '-100px';
			} else {
				h.style.top = '0px';
			};
			ls = cs;
		}
	);
};
