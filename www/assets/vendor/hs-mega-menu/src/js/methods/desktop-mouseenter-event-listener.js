import smartPosition from "./smart-position";

import desktopShow from "./desktop-show";
import getType from "./get-type";
import desktopHide from "./desktop-hide";

export default function desktopMouseEnterEventListener(el, menu, params, itemParams) {
	return function () {
		if (itemParams.megaMenuTimeOut) {
			clearTimeout(itemParams.megaMenuTimeOut);
		}

		let $siblingInvokers = menu.closest(`${params.classMap.hasMegaMenu}, ${params.classMap.hasSubMenu}`).parentNode.querySelectorAll(`${params.classMap.hasMegaMenu}${params.classMap.hasMegaMenuActive}, ${params.classMap.hasSubMenu}${params.classMap.hasSubMenuActive}`);
		
		if ($siblingInvokers.length) {
			$siblingInvokers.forEach($el => {
					const $menu = $el.querySelector(`${params.classMap.megaMenu}, ${params.classMap.subMenu}`),
					itemDataSettings = $el.hasAttribute('data-hs-mega-menu-item-options') ? JSON.parse($el.getAttribute('data-hs-mega-menu-item-options')) : {};
				let itemSettings = {
					desktop: {
						animation: 'animated',
						animationIn: 'slideInUp',
						animationOut: 'fadeOut',
						position: null
					}
				};
				itemSettings = Object.assign({}, itemSettings, itemDataSettings);
				itemSettings.activeItemClass = function () {
					return getType($el, params) === 'mega-menu' ? params.classMap.hasMegaMenuActive : params.classMap.hasSubMenuActive;
				};
				
				$el.classList.remove(itemSettings.activeItemClass().slice(1));
				
				desktopHide($el, $menu, params, itemSettings);
			});
		}
		
		el.classList.add(itemParams.activeItemClass().slice(1));
		
		desktopShow(el, menu, params, itemParams);
		
		smartPosition(menu, params);
	};
}
