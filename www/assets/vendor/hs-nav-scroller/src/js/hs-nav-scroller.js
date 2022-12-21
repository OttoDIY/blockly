/*
* HSNavScroller Plugin
* @version: 2.0.0 (Sat, 06 Jul 2021)
* @requires: Velocity 1.5.2 or later
* @author: HtmlStream
* @license: Htmlstream Libraries (https://htmlstream.com/)
* Copyright 2021 Htmlstream
*/


import Velocity from "velocity-animate"

const dataAttributeName = 'data-hs-nav-scroller-options'
const defaults = {
  type: 'horizontal',
  target: '.active',
  offset: 0,
  delay: 20
}

export default class HsNavScroller {
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

  _init () {
    const that = this;

    for (let i = 0; i < that.collection.length; i += 1) {
      let _$el
      let _options

      if (that.collection[i].hasOwnProperty('$initializedEl')) {
        continue
      }

      _$el = that.collection[i].$el;
      _options = that.collection[i].options

      if (_options.type == 'vertical') {
        Velocity(_$el, 'scroll', {
          container: _$el,
          offset: _$el.querySelector(_options.target).offsetTop - _options.offset,
          duration: _options.delay,
          axis: 'y'
        })
      } else if (_options.type == 'horizontal') {
        _options.nav = _$el.querySelector('.nav');
        _options.prev = _$el.querySelector('.hs-nav-scroller-arrow-prev');
        _options.next = _$el.querySelector('.hs-nav-scroller-arrow-next');
        _options.activeElementLeftPosition = _options.nav.querySelector(_options.target).offsetLeft;
        _options.scrollMaxLeft = parseInt((_options.nav.scrollWidth.toFixed() - _options.nav.clientWidth).toFixed());
        _options.scrollPosition = _options.nav.scrollLeft;

        if (_options.scrollPosition <= 0) {
          _options.prev.style.display = 'none'
        }

        if (_options.scrollMaxLeft <= 0) {
          _options.next.style.display = 'none'
        }

        that.onResize(_$el, _options)
        window.addEventListener('resize', () => that.onResize(_$el, _options))

        const navRect = _options.nav.getBoundingClientRect(),
          prevRect = _options.prev.getBoundingClientRect(),
          nextRect = _options.next.getBoundingClientRect()

        if (_options.activeElementLeftPosition > navRect.width / 2) {
          Velocity(_options.nav, 'scroll', {
            container: _options.nav,
            offset: _options.activeElementLeftPosition - _options.offset - prevRect.width,
            duration: _options.delay,
            axis: 'x'
          })
        }

        _options.next.addEventListener('click', () => {
          Velocity(_options.nav, 'scroll', {
            container: _options.nav,
            offset: _options.scrollPosition + _options.nav.clientWidth - nextRect.width,
            duration: _options.delay,
            axis: 'x'
          })
        })

        _options.prev.addEventListener('click', () => {
          Velocity(_options.nav, 'scroll', {
            container: _options.nav,
            offset: _options.scrollPosition - _options.nav.clientWidth + prevRect.width,
            duration: _options.delay,
            axis: 'x'
          })
        })

        _options.nav.addEventListener('scroll', () => {
          var scrollMaxLeft = (parseInt(_options.nav.scrollWidth.toFixed()) - parseInt(_options.nav.clientWidth)).toFixed(),
            scrollPosition = _options.nav.scrollLeft

          // Hide or Show Back Arrow
          if (scrollPosition <= 0) {
            _options.prev.style.display = 'none'
          } else {
            _options.prev.style.display = 'flex'
          }

          // Hide or Show Next Arrow
          if (scrollPosition >= scrollMaxLeft) {
            _options.next.style.display = 'none'
          } else {
            _options.next.style.display = 'flex'
          }
        })
      }
    }
  }

  onResize($el, settings) {
    const scrollMaxLeft = (parseInt(settings.nav.scrollWidth.toFixed()) - parseInt(settings.nav.clientWidth.toFixed())),
      scrollPosition = settings.nav.scrollLeft

    if (scrollPosition <= 0) {
      settings.prev.style.display = 'none'
    } else {
      settings.prev.style.display = 'flex'
    }

    if (scrollMaxLeft <= 0) {
      settings.next.style.display = 'none'
    } else {
      settings.next.style.display = 'flex'
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
