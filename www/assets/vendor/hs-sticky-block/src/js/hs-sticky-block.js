/*
* HSStickyBlock Plugin
* @version: 3.0.0 (Wed, 24 Nov 2021)
* @author: HtmlStream
* @event-namespace: .HSStickyBlock
* @license: Htmlstream Libraries (https://htmlstream.com/)
* Copyright 2021 Htmlstream
*/

const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n),
  offset = el => {
    el = typeof el === "object" ? el : document.querySelector(el)

    return {
      top: el ? window.pageYOffset + el.getBoundingClientRect().top : 0,
      left: el ? el.getBoundingClientRect().left : 0
    }
  },
  css = (el, style) => {
    el = typeof el === "object" ? el : document.querySelector(el)

    for (const property in style) {
      el.style.setProperty(property, style[property], 'important')
      // el.style[property] = style[property]
    }
  }

const dataAttributeName = 'data-hs-sticky-block-options'
const defaults = {
  parentSelector: null,
  parentWidth: null,
  parentPaddingLeft: null,
  parentOffsetLeft: null,

  targetSelector: null,
  targetHeight: 0,

  stickyHeight: null,
  stickyOffsetTop: 0,
  stickyOffsetBottom: 0,

  windowOffsetTop: 0,

  startPoint: null,
  endPoint: null,

  resolutionsList: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },
  breakpoint: 'lg',

  styles: {
    position: 'fixed'
  },

  classMap: {
    kill: 'hs-kill-sticky'
  }
}

export default class HSStickyBlock {
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

    console.log(123)

    for (let i = 0; i < that.collection.length; i += 1) {
      let _$el
      let _options

      if (that.collection[i].hasOwnProperty('$initializedEl')) {
        continue
      }

      _$el = that.collection[i].$el;
      _options = that.collection[i].options

      Array('resize', 'scroll').forEach(evt =>
        window.addEventListener(evt, () => this.update(_$el, _options), false)
      )
    }
  }

  update($el, settings) {
    const that = this
    that._setRules($el, settings);
  }

  _updateOptions($el, settings) {
    const parentSelector = document.querySelector(settings.parentSelector),
      targetSelector = document.querySelector(settings.targetSelector)

    settings.windowOffsetTop = window.pageYOffset
    settings.startPointPos = offset(settings.startPoint).top;
    settings.endPointPos = offset(settings.endPoint).top;

    settings.parentWidth = parentSelector ? parentSelector.clientWidth : 0
    settings.parentPaddingLeft = parentSelector ? parseInt(window.getComputedStyle(parentSelector).paddingLeft) : 0
    settings.parentOffsetLeft = offset(parentSelector).left

    settings.targetHeight = targetSelector ? targetSelector.offsetHeight : 0;

    settings.stickyHeight = $el.offsetHeight;
  }

  _setRules($el, settings) {
    const that = this

    that._kill($el, settings);

    that._updateOptions($el, settings);
    if (!$el.classList.contains(settings.classMap.kill)) {
      if (settings.windowOffsetTop
        >= (settings.startPointPos - settings.targetHeight - settings.stickyOffsetTop)
        && settings.windowOffsetTop <= (settings.endPointPos - settings.targetHeight - settings.stickyOffsetTop)) {
        that._add($el, settings);
        that._top($el, settings);
      } else {
        that._reset($el);
      }

      if (settings.windowOffsetTop >= (settings.endPointPos - settings.targetHeight - settings.stickyHeight - settings.stickyOffsetTop - settings.stickyOffsetBottom)) {
        that._bottom($el, settings);
      }
    }
  }

  _add($el, settings) {
    css($el, {
      position: settings.styles.position,
      left: settings.parentOffsetLeft + settings.parentPaddingLeft + 'px',
      width: settings.parentWidth + 'px'
    })
  }

  _top($el, settings) {
    css($el, {
      top: settings.stickyOffsetTop + settings.targetHeight + 'px'
    })
  }

  _bottom($el, settings) {
    css($el, {
      top: settings.endPointPos - settings.windowOffsetTop - settings.stickyHeight - settings.stickyOffsetBottom + 'px'
    })
  }

  _reset($el, settings) {
    css($el, {
      position: '',
      top: '',
      bottom: '',
      left: '',
      width: ''
    })
  }

  _kill($el, settings) {
    const that = this

    if (window.innerWidth < settings.resolutionsList[settings.breakpoint]) {
      $el.classList.add(settings.classMap.kill);
      that._reset($el);
    } else {
      $el.classList.remove(settings.classMap.kill);
    }
  }

  addToCollection (item, options, id) {
    this.collection.push({
      $el: item,
      id: id || null,
      options: Object.assign(
        {},
        defaults,
        item.hasAttribute(dataAttributeName)
          ? JSON.parse(item.getAttribute(dataAttributeName))
          : {},
        options,
      ),
    })
  }

  getItem (item) {
    if (typeof item === 'number') {
      return this.collection[item].$initializedEl;
    } else {
      return this.collection.find(el => {
        return el.id === item;
      }).$initializedEl;
    }
  }
}
