/*
* HSShowAnimation Plugin
* @version: 3.0.0 (Sat, 20 Nov 2021)
* @author: HtmlStream
* @event-namespace: .HSShowAnimation
* @license: Htmlstream Libraries (https://htmlstream.com/)
* Copyright 2021 Htmlstream
*/

import {fadeIn} from "./utils";

const dataAttributeName = 'data-hs-show-animation-options'
const defaults = {
  groupName: null,
  targetSelector: null,
  siblingSelector: null,
  eventType: 'click',

  classMap: {
    active: 'active'
  },

  animationType: 'simple',
  animationInit: 'animated',
  animationIn: null,
  duration: null,

  afterShow: () => {
  }
}

export default class HSShowAnimation {
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

      that.prepareObject(_$el, _options)

      _$el.addEventListener(_options.eventType, e => {
        e.preventDefault()

        if (_$el.classList.contains(_options.classMap.active)) {
          return
        }

        that.activeClassChange(_options)

        if (_options.animationType === 'css-animation') {
          that.cssAnimation(_options)
        } else {
          that.simpleAnimation(_options)
        }
      })
    }
  }

  prepareObject ($el, settings) {
    const $targetSelector = document.querySelector(settings.targetSelector),
      $siblingSelector = document.querySelector(settings.siblingSelector)

    $el.setAttribute('data-hs-show-animation-link-group', settings.groupName)

    if (settings.duration) {
      $targetSelector.style.animationDuration = `${settings.duration}ms`
    }

    $targetSelector.setAttribute('data-hs-show-animation-target-group', settings.groupName)

    if ($siblingSelector) {
      $siblingSelector.setAttribute('data-hs-show-animation-target-group', settings.groupName)
    }
  }

  activeClassChange (settings) {
    const $targets = document.querySelectorAll(`[data-hs-show-animation-link-group="${settings.groupName}"]`)

    if ($targets.length) {
      $targets.forEach($item => $item.classList.remove(settings.classMap.active))
    }
  }

  simpleAnimation (settings) {
    const $targets = document.querySelectorAll(`[data-hs-show-animation-target-group="${settings.groupName}"]`),
      $targetSelector = document.querySelector(settings.targetSelector)

    if ($targets.length) {
      $targets.forEach($item => {
        $item.style.display = 'none'
        $item.style.opacity = 0
      })
    }

    fadeIn($targetSelector, 400)

    settings.afterShow()
  }

  cssAnimation (settings) {
    const $targets = document.querySelectorAll(`[data-hs-show-animation-target-group="${settings.groupName}"]`),
      $targetSelector = document.querySelector(settings.targetSelector)

    if ($targets.length) {
      $targets.forEach($item => {
        $item.style.display = 'none'
        $item.style.opacity = 0
        $item.classList.remove(settings.animationInit, settings.animationIn)
      })
    }

    $targetSelector.style.display = 'block'

    settings.afterShow()

    setTimeout(() => {
      $targetSelector.style.opacity = 1
      $targetSelector.classList.add(settings.animationInit, settings.animationIn)
    }, 50)
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
