export default function desktopCSSAnimationEnable(menu, itemParams) {
	return function (e) {
		if (menu.classList.contains(itemParams.desktop.animationOut)) {
			menu.classList.remove(itemParams.desktop.animationOut)
			menu.style.display = 'none'
		}
		
		e.preventDefault();
		e.stopPropagation();
	};
}
