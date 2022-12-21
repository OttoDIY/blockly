/*
* HSVideoPlayer Plugin
* @version: 3.0.0 (Wed, 17 Mar 2021)
* @author: HtmlStream
* @event-namespace: .HSVideoPlayer
* @license: Htmlstream Libraries (https://htmlstream.com/)
* Copyright 2021 Htmlstream
*/

const dataAttributeName = 'data-hs-video-player-options'
const defaults = {
  parentSelector: null,
  targetSelector: null,

  classMap: {
    toggle: 'video-player-played'
  },

  videoType: 'you-tube',
  videoId: null,

  isAutoplay: false,
  isMuted: false,

  youTubeAPISrc: '//www.youtube.com/player_api',
  isYouTubeAPICreated: false,

  vimeoAPISrc: '//player.vimeo.com/api/player.js',
  isVimeoAPICreated: false
}

export default class HSVideoPlayer {
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

      if (_options.videoType === 'you-tube') {
        that._youTubeAPI(_$el, _options)
      }

      if (_options.videoType === 'vimeo') {
        that._vimeoAPI(_$el, _options)
      }

      _$el.addEventListener('click', () => {
        document.querySelector(_options.parentSelector).classList.toggle(_options.classMap.toggle)

        if (_options.videoType === 'vimeo') {
          that._vimeoPlayer(_$el, _options)
        } else if (_options.videoType === 'html5') {
          that._html5Player(_$el, _options)
        } else {
          that._youTubePlayer(_$el, _options)
        }
      })

      that.collection[i].$initializedEl = _options
    }
  }

  _youTubeAPI($el, settings) {
    if (settings.isYouTubeAPICreated) {
      return
    }

    let YTScriptTag = document.createElement('script'),
      DOMFirstScriptTag = document.getElementsByTagName('script')[0]

    YTScriptTag.src = settings.youTubeAPISrc

    DOMFirstScriptTag.parentNode.insertBefore(YTScriptTag, DOMFirstScriptTag)

    settings.isYouTubeAPICreated = true
  }

  _vimeoAPI($el, settings) {
    if (settings.isVimeoAPICreated) {
      return
    }

    let VimeoScriptTag = document.createElement('script'),
      DOMFirstScriptTag = document.querySelector('script')

    VimeoScriptTag.src = settings.vimeoAPISrc

    DOMFirstScriptTag.parentNode.insertBefore(VimeoScriptTag, DOMFirstScriptTag)

    settings.isVimeoAPICreated = true
  }

  _youTubePlayer($el, settings) {
    let optionsWithSpecificAPI = Object.assign({}, {
      videoId: settings.videoId,
      playerVars: {
        origin: window.location.origin,
        autoplay: settings.isAutoplay === true ? 1 : 0
      }
    }, settings.specificAPIOptions)

    const YTPlayer = new YT.Player(settings.targetSelector.slice(1, settings.targetSelector.length), optionsWithSpecificAPI)
  }

  _vimeoPlayer($el, settings) {
    let optionsWithSpecificAPI = Object.assign({}, {
      id: settings.videoId,
      autoplay: settings.isAutoplay === true ? 1 : 0,
      muted: settings.isMuted === true ? 1 : 0
    }, settings.specificAPIOptions)

    let vimeoIframe = document.getElementById(settings.targetSelector.slice(1, settings.targetSelector.length)),
      vimeoPlayer = new Vimeo.Player(vimeoIframe, optionsWithSpecificAPI)

    vimeoPlayer.on('loaded', () => {
      const iframe = vimeoIframe.querySelector('iframe')
      iframe.style.height = '100%'
      iframe.style.width = '100%'
    })
  }

  _html5Player($el, settings) {
    let $html5Iframe = document.querySelector(settings.targetSelector)
    $html5Iframe.insertAdjacentHTML('beforeend', `
				<video class="pfx-hero-bg-video__item" style="width:100%;height:100%;" playsinline ${settings.isAutoplay === true ? 'autoplay ' : ''}${settings.isMuted === true ? 'muted ' : ''}${settings.isLoop === true ? 'loop' : ''}>
					<source src="${settings.videoId}.mp4" type="video/mp4">
					<source src="${settings.videoId}.ogg" type="video/ogg">
					<source src="${settings.videoId}.webm" type="video/webm">
					Your browser doesn\'t support HTML5 video tag.
				</video>`)
  }

  addToCollection(item, options, id) {
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

  getItem(item) {
    if (typeof item === 'number') {
      return this.collection[item].$initializedEl;
    } else {
      return this.collection.find(el => {
        return el.id === item;
      }).$initializedEl;
    }
  }
}
