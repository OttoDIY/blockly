export default function getType(el, params) {
	if (!el) {
		return false;
	}
	
	return el.classList.contains(params.classMap.hasSubMenu.slice(1)) ? 'sub-menu' : (el.classList.contains(params.classMap.hasMegaMenu.slice(1)) ? 'mega-menu' : null);
}
