/*
* HSScrollspy Plugin
* @version: 1.0.0 (Wed, 24 Nov 2021)
* @author: HtmlStream
* @event-namespace: .HSScrollspy
* @license: Htmlstream Libraries (https://htmlstream.com/)
* Copyright 2021 Htmlstream
*/

export default class HSScrollspy {
  constructor(elem, settings) {
    this.$el = typeof elem === 'string' ? document.querySelector(elem) : elem
    this.defaults = {
      disableCollapse: null,
      scrollOffset: 0,
      collapsibleNav: null,
      resolutionsList: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200
      },
      resetOffset: null,
      breakpoint: 'lg',
      scrollspyContainer: document.body
    };
    this.dataSettings = this.$el.hasAttribute('data-hs-scrollspy-options') ? JSON.parse(this.$el.getAttribute('data-hs-scrollspy-options')) : {},
      this.settings = Object.assign({}, this.defaults, this.dataSettings, settings)

    this.init()
  }

  init() {
    this.scrollSpyInstance = bootstrap.ScrollSpy.getInstance(this.settings.scrollspyContainer)
    const nav = typeof this.scrollSpyInstance._config.target === 'object' ? this.scrollSpyInstance._config.target : document.querySelector(this.scrollSpyInstance._config.target)

    if (this.settings.disableCollapse === null && this.$el.classList.contains('collapse')) {
      this.settings.disableCollapse = false
    }

    nav.addEventListener('click', e => {
      if (!e.target.closest('a:not([href="#"]):not([href="#0"])')) return
      e.preventDefault()
      if (this.settings.disableCollapse === false && window.innerWidth < this.settings.resolutionsList[this.settings.breakpoint]) {
        new bootstrap.Collapse(this.$el).hide()
        return this.$el.addEventListener('hidden.bs.collapse', () => {
          this.smoothScroll(e)
        })
      } else {
        this.smoothScroll(e)
      }
    })
  }

  smoothScroll(e) {
    const offset = this.settings.resetOffset
    && window.innerWidth < this.settings.resolutionsList[this.settings.resetOffset]
      ? 0
      : this.scrollSpyInstance._config.offset

    window.scroll({
      top: (document.querySelector(e.target.hash).offsetTop - offset) - this.settings.scrollOffset,
      left: 0,
      behavior: 'smooth'
    })
  }
}
