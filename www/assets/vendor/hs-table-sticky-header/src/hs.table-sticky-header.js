/*
 * HS Sticky Header
 * @version: 2.0.0
 * @author: HtmlStream
 * @event-namespace: .HSTableStickyHeader
 * @browser-support: Edge+
 * @license:
 *
 * Copyright 2021 HtmlStream
 *
 */

export default class HSTableStickyHeader {
  constructor(el, settings) {
    this.$el = typeof el === "string" ? document.querySelector(el) : el
    this.defaults = {
      classMap: {
        original: {
          mainEl: 'table-responsive',
          thead: 'sticky-header-original-thead',
          theadItemsWrapper: 'sticky-header-original-th-inner-wrapper'
        },
        cloned: {
          mainEl: 'sticky-header-cloned-wrapper',
          table: 'sticky-header-cloned-table'
        }
      },
      offsetTop: 0
    }
    this.dataSettings = this.$el.hasAttribute('data-hs-table-sticky-header-options') ? JSON.parse(this.$el.getAttribute('data-hs-table-sticky-header-options')) : {}
    this.settings = Object.assign({}, this.defaults, this.dataSettings, settings)

    this.$table = this.$el.querySelector('table')
    this.$tbody = this.$el.querySelector('tbody')
    this.$thead = this.$el.querySelector('thead')
    this.$theadItems = this.$thead.querySelectorAll('th')
  }

  init() {
    const $scroll = this.$el.querySelector(`.${this.defaults.classMap.original.mainEl}`),
      $clonedThead = this.setClonedTheadItemsWidth(),
      wrapper = `
        <div class="${this.defaults.classMap.cloned.mainEl}" style="top: ${this.settings.offsetTop}">
          <table class="${this.defaults.classMap.cloned.table} ${this.$table.className} mb-0 border-bottom-0" style="width: ${this.$table.offsetWidth + 'px'}">
              ${$clonedThead.outerHTML}
          </table>
        </div>
      `,
      $wrapper = document.createRange().createContextualFragment(wrapper),
    $itemWrapper = document.createElement('div')

    this.$el.insertBefore($wrapper, this.$el.firstChild)

    this.$thead.classList.add(this.defaults.classMap.original.thead)

    $itemWrapper.classList.add(this.defaults.classMap.original.theadItemsWrapper)
    this.$theadItems.forEach($item => {
      $item.parentNode.insertBefore($itemWrapper, $item)
      $itemWrapper.appendChild($item)
    })

    window.addEventListener('resize', e => {
      this.$el.querySelector(`.${this.defaults.classMap.cloned.table}`).style.width = this.$table.offsetWidth + 'px'
    })

    $scroll.addEventListener('scroll', e => {
      this.$el.find(`.${this.defaults.classMap.cloned.mainEl}`).scrollLeft = parseInt($scroll.scrollLeft)
    })

    return this
  }

  setClonedTheadItemsWidth() {
    const $clonedThead = this.$thead.cloneNode(true),
      $clonedTheadItems = $clonedThead.querySelectorAll('th')

    const setWidth = () => {
      $clonedTheadItems.forEach(($item, index) => {
        $item.style.width = this.getOriginalTbodyItemsWidth()[index] + 'px'
      })
    }

    setWidth()

    document.addEventListener('resize', function () {
      setWidth()
    }, false)

    return $clonedThead
  }

  getOriginalTbodyItemsWidth() {
    const $tbodyItems = this.$tbody.querySelectorAll('tr:first-child > *'),
      widthArr = []

    $tbodyItems.forEach($item => {
      widthArr.push($item.offsetWidth)
    })

    return widthArr
  }
}