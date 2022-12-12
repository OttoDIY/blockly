/*
* HSHeader Plugin
* @version: 3.0.0 (Mon, 25 Mar 2021)
* @author: HtmlStream
* @event-namespace: .HSHeader
* @license: Htmlstream Libraries (https://htmlstream.com/)
* Copyright 2019 Htmlstream
*/

// Sticky
import HSHeaderStickObserver from "./observers/sticky"

// Moment Show / Hide
import HSHeaderMomentShowHideObserver from "./observers/moment-show-hide"

// Show / Hide
import HSHeaderShowHideObserver from "./observers/show-hide"

// Hide Section
import HSHeaderHideSectionObserver from "./observers/hide-section"

// Has Hidden Element
import HSHeaderHasHiddenElement from "./observers/has-hidden-element"

// Floating
import HSHeaderFloatingObserver from "./observers/floating"

// Without Behavior
import HSHeaderWithoutBehaviorObserver from "./observers/without-behavior"

export default class HSHeader {
  constructor(el, config, observers) {
    this.element = typeof el === "string" ? document.querySelector(el) : el
    this.config = config
    this.observers = observers && Object.prototype.toString.call(observers) === '[object Object]' ? observers : {}
    this.viewport = 'xs'
    this.defaults = {
      fixMoment: 0,
      fixMomentClasses: null,
      fixMomentExclude: null,
      fixEffect: 'slide',
      breakpoint: 'lg',
      breakpointsMap: {
        'md': 768,
        'sm': 576,
        'lg': 992,
        'xl': 1200
      },
      effectCompensation: false,
      effectCompensationStartClass: false,
      effectCompensationEndClass: false
    }
  }

  init() {
    const self = this,
      element = this.element
    let dataSettings = element.hasAttribute('data-hs-header-options') ? JSON.parse(element.getAttribute('data-hs-header-options')) : {}

    if (!element || element.hasAttribute('HSHeader')) return

    this.config = Object.assign({}, this.defaults, dataSettings, this.config)

    this._detectObservers()
    this.fixMediaDifference(this.element)
    this.checkViewport()

    onScroll()
    document.addEventListener('scroll', onScroll)
    onResize()
    window.addEventListener('resize', onResize)

    function onScroll() {
      window.HSHeader = null

      if (window.pageYOffset < (self.config.fixMoment - 100) && self.config.effectCompensation === true) {
        element.style.top = -(window.pageYOffset)
        element.classList.add(self.config.effectCompensationStartClass)
        element.classList.remove(self.config.effectCompensationEndClass)
      } else if (self.config.effectCompensation === true) {
        element.style.top = 0
        element.classList.add(self.config.effectCompensationEndClass)
        element.classList.remove(self.config.effectCompensationStartClass)
      }

      if (element.hasAttribute('HSHeader')) {
        self.notify()
      }

      element.setAttribute('HSHeader', true)
    }

    function onResize() {
      if (self.resizeTimeOutId) clearTimeout(self.resizeTimeOutId)

      self.resizeTimeOutId = setTimeout(function () {
        // self.checkViewport()
        self.update()
      }, 100)
    }

    return this.element
  }

  header(element, config, observers) {
    if (!element || !element.length) return

    this.element = element
    this.config = config

    this.observers = observers && $.isPlainObject(observers) ? observers : {}

    this.viewport = 'xs'

    this.checkViewport()
  }

  _detectObservers() {
    if (!this.element) return

    let observers = this.observers = {
      'xs': [],
      'sm': [],
      'md': [],
      'lg': [],
      'xl': []
    }

    /* ------------------------ xs -------------------------*/

    // Has Hidden Element
    if (this.element.classList.contains('navbar-has-hidden-element')) {
      observers['xs'].push(
        new HSHeaderHasHiddenElement(this.element).init()
      )
    }

    // Sticky top
    if (this.element.classList.contains('navbar-sticky-top')) {
      if (this.element.classList.contains('navbar-show-hide')) {
        observers['xs'].push(
          new HSHeaderMomentShowHideObserver(this.element).init()
        )
      } else if (this.element.classList.contains('navbar-toggle')) {
        observers['xs'].push(
          new HSHeaderHideSectionObserver(this.element).init()
        )
      }

      observers['xs'].push(
        new HSHeaderStickObserver(this.element).init()
      )
    }

    // Floating
    if (this.element.classList.contains('navbar-floating')) {
      observers['xs'].push(
        new HSHeaderFloatingObserver(this.element).init()
      )
    }

    if (this.element.classList.contains('navbar-invulnerable')) {
      observers['xs'].push(
        new HSHeaderWithoutBehaviorObserver(this.element).init()
      )
    }

    // Abs top & Static
    if (this.element.classList.contains('navbar-absolute-top') || this.element.classList.contains('navbar-static')) {
      if (this.element.classList.contains('navbar-show-hide')) {
        observers['xs'].push(
          new HSHeaderShowHideObserver(this.element, this.config).init()
        )
      }
    }

    return observers
  }

  fixMediaDifference(element) {
    if (!element || !element.length || !element.filter(el => el.closest('[class*="navbar-side"]')).length) return

    let toggleable

    if (element.classList.contains('navbar-side-left-xl') || element.classList.contains('navbar-side-right-xl')) {
      toggleable = element.querySelector('.navbar-expand-xl')

      if (toggleable) {
        toggleable.classList.remove('navbar-expand-xl')
        toggleable.classList.add('navbar-expand-lg')
      }
    } else if (element.classList.contains('navbar-side-left-lg') || element.classList.contains('navbar-side-right-lg')) {
      toggleable = element.querySelector('.navbar-expand-lg')

      if (toggleable) {
        toggleable.classList.remove('navbar-expand-lg')
        toggleable.classList.add('navbar-expand-md')
      }
    } else if (element.classList.contains('navbar-side-left-md') || element.classList.contains('navbar-side-right-md')) {
      toggleable = element.querySelector('.navbar-expand-md')

      if (toggleable) {
        toggleable.classList.remove('navbar-expand-md')
        toggleable.classList.add('navbar-expand-sm')
      }
    } else if (element.classList.contains('navbar-side-left-sm') || element.classList.contains('navbar-side-right-sm')) {
      toggleable = element.querySelector('.navbar-expand-sm')

      if (toggleable) {
        toggleable.classList.remove('navbar-expand-sm')
        toggleable.classList.add('navbar-expand')
      }
    }
  }

  checkViewport() {
    if (window.innerWidth > this.config.breakpointsMap['sm'] && this.observers['sm'].length) {
      this.prevViewport = this.viewport
      this.viewport = 'sm'

      if (this.config.fixMoment && window.pageYOffset > this.config.fixMoment) {
        if (typeof this.config.breakpointsMap['sm'] === 'undefined') {
          this.element.classList.remove('navbar-scrolled')
        } else {
          this.element.classList.add('navbar-scrolled')
        }
      }

      return this
    }

    if (window.innerWidth > this.config.breakpointsMap['md'] && this.observers['md'].length) {
      this.prevViewport = this.viewport
      this.viewport = 'md'

      if (this.config.fixMoment && window.pageYOffset > this.config.fixMoment) {
        if (typeof this.config.breakpointsMap['md'] === 'undefined') {
          this.element.classList.remove('navbar-scrolled')
        } else {
          this.element.classList.add('navbar-scrolled')
        }
      }

      return this
    }

    if (window.innerWidth > this.config.breakpointsMap['lg'] && this.observers['lg'].length) {
      this.prevViewport = this.viewport
      this.viewport = 'lg'

      if (this.config.fixMoment && window.pageYOffset > this.config.fixMoment) {
        if (typeof this.config.breakpointsMap['lg'] === 'undefined') {
          this.element.classList.remove('navbar-scrolled')
        } else {
          this.element.classList.add('navbar-scrolled')
        }
      }

      return this
    }

    if (window.innerWidth > this.config.breakpointsMap['xl'] && this.observers['xl'].length) {
      this.prevViewport = this.viewport
      this.viewport = 'xl'

      if (this.config.fixMoment && window.pageYOffset > this.config.fixMoment) {
        if (typeof this.config.breakpointsMap['xl'] === 'undefined') {
          this.element.classList.remove('navbar-scrolled')
        } else {
          this.element.classList.add('navbar-scrolled')
        }
      }

      return this
    }

    if (this.prevViewport) this.prevViewport = this.viewport

    if (this.config.fixMoment && window.pageYOffset > this.config.fixMoment) {
      if (typeof this.config.breakpointsMap['xs'] === 'undefined') {
        this.element.classList.remove('navbar-scrolled')
      } else {
        this.element.classList.add('navbar-scrolled')
      }
    }

    this.viewport = 'xs'

    return this
  }

  notify() {
    if (this.prevViewport) {
      this.observers[this.prevViewport].forEach(function (observer) {
        observer.destroy()
      })

      this.prevViewport = null
    }

    this.observers[this.viewport].forEach(function (observer) {
      observer.check()
    })

    return this
  }

  update() {
    for (let viewport in this.observers) {
      this.observers[viewport].forEach(function (observer) {
        observer.destroy()
      })
    }

    this.prevViewport = null

    this.observers[this.viewport].forEach(function (observer) {
      observer.reinit()
    })

    return this
  }
}
