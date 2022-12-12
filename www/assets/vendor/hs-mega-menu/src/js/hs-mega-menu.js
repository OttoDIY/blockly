/*
* HSMegaMenu Plugin
* @version: 2.0.1 (Sun, 1 Nov 2021)
* @author: HtmlStream
* @event-namespace: .HSMegaMenu
* @license: Htmlstream Libraries (https://htmlstream.com/)
* Copyright 2021 Htmlstream
*/

import objectAssignDeep from "./methods/object-assign-deep";

import getType from "./methods/get-type";
import smartPosition from "./methods/smart-position";

import desktopCSSAnimationEnable from "./methods/desktop-css-animation-enable";
import desktopMouseEnterEventListener from "./methods/desktop-mouseenter-event-listener";
import desktopMouseLeaveEventListener from "./methods/desktop-mouseleave-event-listener";
import desktopClickEventListener from "./methods/desktop-click-event-listener";

import mobileClickEventListener from "./methods/mobile-click-event-listener";

const dataAttributeName = 'data-hs-mega-menu-options'
const defaults = {
  eventType: 'hover',
  direction: 'horizontal',
  breakpoint: 'lg',
  rtl: false,
  isMenuOpened: false,
  sideBarRatio: 1 / 4,
  pageContainer: document.getElementsByTagName('body'),
  mobileSpeed: 400,
  duration: 300,
  delay: 0,

  itemOptions: {
    megaMenuTimeOut: null,
    desktop: {
      animation: 'animated',
      animationIn: 'slideInUp',
      animationOut: false,
      position: null,
      maxWidth: null
    }
  },

  classMap: {
    rtl: '.hs-rtl',
    reversed: '.hs-reversed',
    initialized: '.hs-menu-initialized',
    mobileState: '.hs-mobile-state',
    invoker: '.hs-mega-menu-invoker',

    subMenu: '.hs-sub-menu',
    hasSubMenu: '.hs-has-sub-menu',
    hasSubMenuActive: '.hs-sub-menu-opened',

    megaMenu: '.hs-mega-menu',
    hasMegaMenu: '.hs-has-mega-menu',
    hasMegaMenuActive: '.hs-mega-menu-opened'
  }
}

export default class HSMegaMenu {
  constructor(el, options, id) {
    this.collection = []
    const that = this
    let elems

    if (el instanceof HTMLElement) {
      elems = [el]
    } else if (el instanceof Object) {
      elems = el
    } else {
      elems = document.querySelectorAll(el)
    }

    for (let i = 0; i < elems.length; i += 1) {
      that.addToCollection(elems[i], options, id || elems[i].id)
    }

    if (!that.collection.length) {
      return false
    }

    // initialization calls
    that._init()

    return this
  }

  _init() {
    const that = this;

    for (let i = 0; i < that.collection.length; i += 1) {
      let _$el
      let _options

      if (that.collection[i].hasOwnProperty('$initializedEl')) {
        continue
      }

      _$el = that.collection[i].$el
      _options = that.collection[i].options

      _options.state = null;

      // Resolution list
      var resolutionsList = {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200
      };

      // Keycodes
      var ESC_KEYCODE = 27,
        TAB_KEYCODE = 9,
        ENTER_KEYCODE = 13,
        SPACE_KEYCODE = 32,
        ARROW_UP_KEYCODE = 38,
        ARROW_DOWN_KEYCODE = 40,
        ARROW_RIGHT_KEYCODE = 39,
        ARROW_LEFT_KEYCODE = 37;

      // Prevent scroll
      const preventScroll = (keycode) => {
        return e => {
          if (e.which === keycode) {
            e.preventDefault();
          }
        };
      }

      // Get Item Settings
      const getItemSettings = ($el) => {
        if (!$el) return false;

        let dataSettings = $el.hasAttribute('data-hs-mega-menu-item-options') ? JSON.parse($el.getAttribute('data-hs-mega-menu-item-options')) : {},
          itemSettings = _options.itemOptions;
        itemSettings = Object.assign({}, itemSettings,dataSettings);
        itemSettings.activeItemClass = () => {
          return getType($el, _options) === 'mega-menu' ? _options.classMap.hasMegaMenuActive : _options.classMap.hasSubMenuActive;
        };

        return itemSettings;
      }

      const stateDetection = () => {
        if (window.innerWidth < resolutionsList[_options.breakpoint]) {
          this.state = 'mobile';
        } else {
          this.state = 'desktop';
        }
      }

      stateDetection()

      // State Detection
      window.addEventListener('resize', () => {
        stateDetection()
      })

      // Set RTL
      if (_options.rtl) {
        _$el.addClass(_options.classMap.rtl.slice(1));
      }

      // Init Menu Items
      _$el.querySelectorAll(`${_options.classMap.hasMegaMenu}, ${_options.classMap.hasSubMenu}`).forEach(el => {
        this.MegaMenuItem(el, el.querySelector(_options.classMap[getType(el, _options) === 'mega-menu' ? 'megaMenu' : 'subMenu']), _options);
      });

      // Add Initialized Classes
      _$el.classList.add(`${_options.classMap.initialized.slice(1)}`, `hs-menu-${_options.direction}`);

      // *****
      // Start: ACCESSIBILITY
      // *****
      var myPreventScrollSpace = preventScroll(SPACE_KEYCODE),
        myPreventScrollDown = preventScroll(ARROW_DOWN_KEYCODE),
        myPreventScrollUp = preventScroll(ARROW_UP_KEYCODE);

      let $items,
        index,
        state = null;

      document.addEventListener('keyup', () => {
        window.removeEventListener('keydown', myPreventScrollSpace, false);
        window.removeEventListener('keydown', myPreventScrollUp, false);
        window.removeEventListener('keydown', myPreventScrollDown, false);
      });

      document.addEventListener('keyup', e => {
        if (!e.target.closest(`${_options.classMap.hasMegaMenu}, ${_options.classMap.hasSubMenu}`)) return false

        //
        // Start: PREVENT SCROLL
        //
        e.preventDefault();
        e.stopPropagation();

        window.addEventListener('keydown', myPreventScrollSpace, false);
        window.addEventListener('keydown', myPreventScrollUp, false);
        window.addEventListener('keydown', myPreventScrollDown, false);

        //
        // End: PREVENT SCROLL
        //

        //
        // Start: ELEMENT DETECTION
        //
        if (e.target.classList.contains(_options.classMap.invoker.slice(1)) && !e.target.closest([`${_options.classMap.subMenu}, ${_options.classMap.megaMenu}`])) {
          // console.log('Top level');

          if (state !== 'topLevel') {
            state = 'topLevel';
          }

          $items = [].slice.call(e.target.parentNode.parentNode.querySelectorAll(_options.classMap.invoker)).filter(item => {
            if (!item.closest([`${_options.classMap.subMenu}, ${_options.classMap.megaMenu}`])) {
              return item.offsetParent !== null;
            }
          });
        } else if (e.target.closest([`${_options.classMap.subMenu}, ${_options.classMap.megaMenu}`]) && e.target.parentNode.querySelector(`${_options.classMap.subMenu}, ${_options.classMap.megaMenu}`)) {
          // console.log('Has submenu and not top level');

          if (state !== 'hasSubmenu') {
            state = 'hasSubmenu';
          }

          $items = [].slice.call(e.target.parentNode.parentNode.querySelectorAll(_options.classMap.invoker)).filter(item => {
            return item.offsetParent !== null;
          });
        } else {
          // console.log('Just element');

          if (state !== 'simple') {
            state = 'simple';
          }

          $items = [].slice.call(e.target.closest([`${_options.classMap.subMenu}, ${_options.classMap.megaMenu}`]).querySelectorAll('a, button')).filter(item => {
            return item.offsetParent !== null;
          });
        }

        //
        // End: ELEMENT DETECTION
        //

        index = $items.indexOf(e.target);

        //
        // Start: TOP LEVEL
        //

        // Left
        if (
          state === 'topLevel' &&
          e.which === ARROW_LEFT_KEYCODE &&
          index > 0
        ) {
          index--;
        }

        // Right
        if (
          state === 'topLevel' &&
          e.which === ARROW_RIGHT_KEYCODE &&
          index < ($items.length - 1)
        ) {
          index++;
        }

        // Open Sub
        if (
          state === 'topLevel' &&
          (
            e.which === ARROW_DOWN_KEYCODE ||
            e.which === SPACE_KEYCODE ||
            e.which === ENTER_KEYCODE
          )
        ) {
          if (!e.target.parentNode.querySelector([`${_options.classMap.megaMenu}.${_options.itemOptions.desktop.animationIn}, ${_options.classMap.subMenu}.${_options.itemOptions.desktop.animationIn}`])) {

            desktopMouseEnterEventListener(e.target.parentNode, e.target.parentNode.querySelector(([`${_options.classMap.subMenu}, ${_options.classMap.megaMenu}`])), _options, getItemSettings(e.target.parentNode))();

          } else if (e.target.parentNode.querySelector([`${_options.classMap.megaMenu}.${_options.itemOptions.desktop.animationIn}, ${_options.classMap.subMenu}.${_options.itemOptions.desktop.animationIn}`])) {

            e.target.parentNode.querySelector([`${_options.classMap.megaMenu}.${_options.itemOptions.desktop.animationIn}, ${_options.classMap.subMenu}.${_options.itemOptions.desktop.animationIn}`]).querySelectorAll('a')[0].focus()

            return;
          }
        }

        // Close Siblings
        if (
          state === 'topLevel' &&
          (
            e.which === TAB_KEYCODE ||
            e.which === ARROW_RIGHT_KEYCODE ||
            e.which === ARROW_LEFT_KEYCODE
          ) &&
          e.target.closest(`${_options.classMap.hasMegaMenu}, ${_options.classMap.hasSubMenu}`).parentNode.querySelector(`${_options.classMap.megaMenu}.${_options.itemOptions.desktop.animationIn}, ${_options.classMap.subMenu}.${_options.itemOptions.desktop.animationIn}`)
        ) {
          desktopMouseLeaveEventListener(e.target.closest(`${_options.classMap.hasMegaMenu}, ${_options.classMap.hasSubMenu}`), e.target.closest(`${_options.classMap.hasMegaMenu}, ${_options.classMap.hasSubMenu}`).parentNode.querySelector(`${_options.classMap.hasMegaMenuActive} > ${_options.classMap.megaMenu}, ${_options.classMap.hasSubMenuActive} > ${_options.classMap.subMenu}`), _options, getItemSettings(e.target.closest(`${_options.classMap.hasMegaMenu}, ${_options.classMap.hasSubMenu}`)))();
        }

        //
        // End: TOP LEVEL
        //

        //
        // Start: HAS SUB-MENU BUT NOT TOP LEVEL
        //

        // Up
        if (
          state === 'hasSubmenu' &&
          e.which === ARROW_UP_KEYCODE &&
          index > 0
        ) {
          index--;
        }

        // Down
        if (
          state === 'hasSubmenu' &&
          e.which === ARROW_DOWN_KEYCODE &&
          index < ($items.length - 1)
        ) {
          index++;
        }

        // Open Sub
        if (
          state === 'hasSubmenu' &&
          (
            e.which === ARROW_LEFT_KEYCODE ||
            e.which === ARROW_RIGHT_KEYCODE ||
            e.which === SPACE_KEYCODE ||
            e.which === ENTER_KEYCODE
          )
        ) {
          if (!e.target.parentNode.querySelector([`${_options.classMap.megaMenu}.${_options.itemOptions.desktop.animationIn}, ${_options.classMap.subMenu}.${_options.itemOptions.desktop.animationIn}`])) {
            desktopMouseEnterEventListener(e.target.parentNode, e.target.parentNode.querySelector(([`${_options.classMap.subMenu}, ${_options.classMap.megaMenu}`])), _options, getItemSettings(e.target.parentNode))();
          } else if (e.target.parentNode.querySelector([`${_options.classMap.megaMenu}.${_options.itemOptions.desktop.animationIn}, ${_options.classMap.subMenu}.${_options.itemOptions.desktop.animationIn}`])) {
            e.target.parentNode.querySelector([`${_options.classMap.megaMenu}.${_options.itemOptions.desktop.animationIn}, ${_options.classMap.subMenu}.${_options.itemOptions.desktop.animationIn}`]).querySelectorAll('a')[0].focus()

            return;
          }
        }

        // Close Siblings
        if (
          state === 'hasSubmenu' &&
          (
            e.which === TAB_KEYCODE ||
            e.which === ARROW_DOWN_KEYCODE ||
            e.which === ARROW_UP_KEYCODE
          ) &&
          e.target.closest([`${_options.classMap.hasMegaMenu}, ${_options.classMap.hasSubMenu}`]).parentNode.querySelectorAll(`${_options.classMap.megaMenu}.${_options.itemOptions.desktop.animationIn}, ${_options.classMap.subMenu}.${_options.itemOptions.desktop.animationIn}`).length
        ) {
          desktopMouseLeaveEventListener(e.target.closest([`${_options.classMap.hasMegaMenu}, ${_options.classMap.hasSubMenu}`]), e.target.closest([`${_options.classMap.hasMegaMenu}, ${_options.classMap.hasSubMenu}`]).parentNode.querySelector(`${_options.classMap.hasMegaMenuActive} > ${_options.classMap.megaMenu}, ${_options.classMap.hasSubMenuActive} > ${_options.classMap.subMenu}`), _options, getItemSettings(e.target.closest([`${_options.classMap.hasMegaMenu}, ${_options.classMap.hasSubMenu}`])))();
        }

        //
        // End: HAS SUB-MENU BUT NOT TOP LEVEL
        //

        //
        // Start: SIMPLE
        //

        // Left, Up
        if (
          state === 'simple' &&
          (
            e.which === ARROW_UP_KEYCODE
          ) &&
          index > 0
        ) {
          index--;
        }

        // Right, Down
        if (
          state === 'simple' &&
          (
            e.which === ARROW_DOWN_KEYCODE
          ) &&
          index < ($items.length - 1)
        ) {
          index++;
        }

        // Close Siblings
        if (
          state === 'simple' &&
          (
            e.which === ARROW_RIGHT_KEYCODE ||
            e.which === ARROW_LEFT_KEYCODE
          ) &&
          e.target.closest(_options.classMap.hasSubMenu).parentNode.querySelector(_options.classMap.subMenu)
        ) {
          e.target.closest(_options.classMap.hasSubMenu).querySelector(_options.classMap.invoker).focus();

          desktopMouseLeaveEventListener(e.target.closest(_options.classMap.hasSubMenu), e.target.closest(_options.classMap.hasSubMenu).parentNode.querySelector(`${_options.classMap.hasSubMenuActive} > ${_options.classMap.subMenu}`), _options, getItemSettings(e.target.closest(_options.classMap.hasSubMenu)))();

          return;
        }

        //
        // End: SIMPLE
        //

        // Close Self
        if (
          e.which === ESC_KEYCODE &&
          this.state === 'desktop' &&
          document.querySelector(`${_options.classMap.megaMenu}.${_options.itemOptions.desktop.animationIn}, ${_options.classMap.subMenu}.${_options.itemOptions.desktop.animationIn}`)
        ) {
          desktopMouseLeaveEventListener(
            document.querySelector(`${_options.classMap.hasMegaMenuActive}, ${_options.classMap.hasSubMenuActive}`),
            document.querySelector(`${_options.classMap.megaMenu}.${_options.itemOptions.desktop.animationIn}, ${_options.classMap.subMenu}.${_options.itemOptions.desktop.animationIn}`),
            _options,
            getItemSettings(document.querySelector(`${_options.classMap.hasMegaMenuActive}, ${_options.classMap.hasSubMenuActive}`))
          )();

          return;
        }

        // Reset index
        if (index < 0) {
          index = 0;
        }

        $items[index].focus();
      });

      document.addEventListener('keyup', e => {
        // Close All
        if (
          e.which === TAB_KEYCODE &&
          document.querySelector(`${_options.classMap.megaMenu}.${_options.itemOptions.desktop.animationIn}, ${_options.classMap.subMenu}.${_options.itemOptions.desktop.animationIn}`)
        ) {
          desktopMouseLeaveEventListener(
            document.querySelector(`${_options.classMap.hasMegaMenuActive}, ${_options.classMap.hasSubMenuActive}`),
            document.querySelector(`${_options.classMap.megaMenu}.${_options.itemOptions.desktop.animationIn}, ${_options.classMap.subMenu}.${_options.itemOptions.desktop.animationIn}`),
            _options,
            getItemSettings(document.querySelector(`${_options.classMap.hasMegaMenuActive}, ${_options.classMap.hasSubMenuActive}`))
          )();
        }
      });

      // *****
      // End: ACCESSIBILITY
      // *****

      that.collection[i].$initializedEl = _options
    }
  }

  MegaMenuItem(el, menu, params) {
    var context = this,
      settings = params,
      itemDataSettings = el.hasAttribute('data-hs-mega-menu-item-options') ? JSON.parse(el.getAttribute('data-hs-mega-menu-item-options')) : {},
      $el = el,
      $menu = menu;
    let itemSettings = {
      eventType: itemDataSettings.eventType ? itemDataSettings.eventType : settings.eventType,
      megaMenuTimeOut: null,
      desktop: {
        animation: 'animated',
        animationIn: 'slideInUp',
        animationOut: false,
        position: null,
        maxWidth: null
      }
    };

    itemSettings = objectAssignDeep({}, settings, itemSettings, itemDataSettings);
    itemSettings.activeItemClass = () => {
      return getType($el, itemSettings) === 'mega-menu' ? itemSettings.classMap.hasMegaMenuActive : itemSettings.classMap.hasSubMenuActive;
    };

    // Set Menu Breakpoint Class
    $menu.classList.add(getType($el, itemSettings) === 'mega-menu' ? `hs-mega-menu-desktop-${itemSettings.breakpoint}` : `hs-sub-menu-desktop-${itemSettings.breakpoint}`);

    // Listeners
    let myDesktopCSSAnimationEnable = desktopCSSAnimationEnable($menu, itemSettings),
      myDesktopMouseEnterEventListener = desktopMouseEnterEventListener($el, $menu, settings, itemSettings),
      myDesktopMouseLeaveEventListener = desktopMouseLeaveEventListener($el, $menu, settings, itemSettings),
      myDesktopClickEventListener = desktopClickEventListener($el, $menu, settings, itemSettings),

      myMobileClickEventListener = mobileClickEventListener($el, $menu, settings, itemSettings);

    let mobileListeners = () => {
        // Remove Desktop Listeners
        $menu.removeEventListener('animationend', myDesktopCSSAnimationEnable, false);
        $menu.removeEventListener('webkitAnimationEnd', myDesktopCSSAnimationEnable, false);
        $el.removeEventListener('mouseenter', myDesktopMouseEnterEventListener, false);
        $el.removeEventListener('mouseleave', myDesktopMouseLeaveEventListener, false);
        // $el.children(settings.classMap.invoker)[0].removeEventListener('focus', myDesktopMouseEnterEventListener, false);

        $el.querySelector(itemSettings.classMap.invoker).removeEventListener('click', myDesktopClickEventListener, false);

        // Add Mobile Listeners
        $el.querySelector(itemSettings.classMap.invoker).addEventListener('click', myMobileClickEventListener, false);
      },
      desktopListeners = () => {
        // Remove Mobile Listeners
        $el.querySelector(itemSettings.classMap.invoker).removeEventListener('click', myMobileClickEventListener, false);

        // Add Desktop Listeners
        $menu.addEventListener('animationend', myDesktopCSSAnimationEnable, false);
        $menu.addEventListener('webkitAnimationEnd', myDesktopCSSAnimationEnable, false);

        if (itemSettings.eventType === 'hover') {
          $el.addEventListener('mouseenter', myDesktopMouseEnterEventListener, false);
          $el.addEventListener('mouseleave', myDesktopMouseLeaveEventListener, false);
        }

        if (itemSettings.eventType === 'click') {
          $el.querySelector(itemSettings.classMap.invoker).addEventListener('click', myDesktopClickEventListener, false);
        }
      };

    if (itemSettings.desktop.maxWidth) {
      $menu.style.maxWidth = itemSettings.desktop.maxWidth
    }

    if (itemSettings.desktop.position) {
      $menu.classList.add(`hs-position-${itemSettings.desktop.position}`);
    }

    // Document Events
    document.addEventListener('click', e => {
      if (!e.target.closest([itemSettings.classMap.subMenu, itemSettings.classMap.megaMenu, itemSettings.classMap.invoker]) && context.state === 'desktop') {
        $el.classList.remove(itemSettings.activeItemClass().slice(1));

        $menu.classList.remove(itemSettings.desktop.animationIn);

        if (itemSettings.animationOut) {
          $menu.classList.add(itemSettings.desktop.animationOut);
        } else {
          $menu.style.display = 'none';
        }
      }
    });

    // Resize and Scroll Events
    window.addEventListener('resize', () => {
      if (context.state === 'desktop') {
        smartPosition($menu, itemSettings);
      }
    });

    const resizeDetection = () => {
      if (context.state === 'mobile') {
        $menu.classList.remove(itemSettings.desktop.animation)
        $menu.style.animationDuration = ''

        mobileListeners()
      } else if (context.state === 'desktop') {
        $menu.classList.add(itemSettings.desktop.animation)
        $menu.style.animationDuration = `${itemSettings.duration}ms`

        desktopListeners()
      }
    }

    resizeDetection()

    // State Detection
    window.addEventListener('resize', () => {
      resizeDetection()
    })
  }

  addToCollection(item, options, id) {
    this.collection.push({
      $el: item,
      id: id || null,
      options: objectAssignDeep(
        {},
        defaults,
        item.hasAttribute(dataAttributeName)
          ? JSON.parse(item.getAttribute(dataAttributeName))
          : {},
        options,
      ),
    });
  }

  getItems() {
    const that = this;
    let newCollection = [];

    for (let i = 0; i < that.collection.length; i += 1) {
      newCollection.push(that.collection[i].$initializedEl);
    }

    return newCollection;
  }

  getItem(ind) {
    return this.collection[ind].$initializedEl;
  }
}
