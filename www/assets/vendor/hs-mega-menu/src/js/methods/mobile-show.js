import slideDown from "./slideDown"

export default function mobileShow(el, menu, params, itemParams) {
	if (!menu) {
		return this
	}
	
	el.classList.add(itemParams.activeItemClass().slice(1))

	slideDown(menu, params.mobileSpeed)
}
