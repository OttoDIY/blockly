import offset from "./offset";

export default function smartPosition(el, params) {
	if (!el) return;

	if (!params.rtl) {
		if (offset(el).left + el.offsetWidth > window.innerWidth) {
			el.classList.add(params.classMap.reversed.slice(1));
		}
	} else {
		if (offset(el).left < 0) {
			el.classList.add(params.classMap.reversed.slice(1));
		}
	}
}
