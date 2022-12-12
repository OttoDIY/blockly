import scrollTo from "../utils/scrollTo"

const dataAttributeName = 'data-hs-go-to-options'
const defaults = {
  pageContainerSelector: 'html, body',
  targetSelector: null,
  compensationSelector: null,

  animationInit: 'animated',
  animationIn: 'fadeInUp',
  animationOut: 'fadeOutDown',
  duration: 800,

  offsetTop: 0,
  position: {
    init: null,
    hide: null,
    show: null
  },

  isReferencedToOtherPage: null,
  preventEventClass: 'hs-go-to-prevent-event'
}

export default class HSGoTo {
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

      const _compensationSelector = document.querySelector(_options.compensationSelector),
      _targetSelector = document.querySelector(_options.targetSelector),
      _pageContainerSelector = document.querySelector(_options.pageContainerSelector)

      _options.targetOffsetTop = () => {
        if (_compensationSelector) {
          return _targetSelector ? _targetSelector.offsetTop - _compensationSelector.innerHeight : 0
        } else {
          return _targetSelector ? _targetSelector.offsetTop : 0
        }
      }

      this.prepareObject(_$el, _options)

      // Set Position
      if (_options.position) {
        this.setPosition(_$el, _options)
      }

      // Click Events
      _$el.addEventListener('click', e => this.clickEvents(_$el, _options, {_pageContainerSelector, _compensationSelector, _targetSelector}))

      // Scroll Events
      if (_options.animationIn && _options.animationOut) {
        document.addEventListener('scroll', e => this.scrollEvents(_$el, _options))
      }
    }
  }

  prepareObject($el, settings) {
    if (settings.animationIn && settings.animationOut) {
      if (navigator.userAgent.match('MSIE 10.0')) {
        document.html.classList.add('ie10')
      }

      $el.classList.add(settings.animationInit, settings.animationOut, settings.preventEventClass)
    }
  }

  setPosition($el, settings) {
    for (let style in settings.position.init) {
      $el.style.setProperty(style, settings.position.init[style])
    }
  }

  clickEvents($el, settings, {_pageContainerSelector}) {
    if (!settings.isReferencedToOtherPage) {
      if (event) {
        event.preventDefault()
      }

      scrollTo({
        to: settings.targetOffsetTop(),
        el: _pageContainerSelector
      }, settings.duration)
    }
  }

  scrollEvents($el, settings) {
    $el.style.visibility = ''

    if (window.scrollY >= settings.offsetTop) {
      if (settings.position.show) {
        for (let style in settings.position.show) {
          $el.style.setProperty(style, settings.position.show[style])
        }
      }

      $el.classList.remove(settings.animationOut)
      $el.classList.add(settings.animationIn)
    } else {
      if (settings.position.show) {
        for (let style in settings.position.show) {
          $el.style.setProperty(style, settings.position.show[style])
        }
      }

      $el.classList.remove(settings.animationIn)
      $el.classList.add(settings.animationOut)
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
