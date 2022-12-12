/*
* HSFileAttach Plugin
* @version: 3.0.0 (Mon, 22 Feb 2021)
* @author: HtmlStream
* @event-namespace: .HSFileAttach
* @license: Htmlstream Libraries (https://htmlstream.com/)
* Copyright 2019 Htmlstream
*/

const dataAttributeName = 'data-hs-file-attach-options'
const defaults = {
	textTarget: null,
	maxFileSize: 1024, // Infinity - off file size detection
	errorMessage: 'File is too big!',
	typeErrorMessage: 'Unsupported file type',
	mode: 'simple',
	targetAttr: null,
	resetTarget: null,
	allowTypes: []
}

export default class HSFileAttach {
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

			_$el = that.collection[i].$el;
			_options = that.collection[i].options

			_options.$target = document.querySelector(_options.textTarget)

			function getFileExtension(filename) {
				return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : null
			}

			_$el.addEventListener('change', (e) => {
				if (_$el.value === '') {
					return
				}

				if (e.target.files[0].size > (_options.maxFileSize * 1024)) {
					alert(_options.errorMessage)

					return e.target.value = ''
				}

				if (_options.allowTypes.length > 0) {
					const type = '.' + getFileExtension(e.target.files[0].name)

					if (!type || !_options.allowTypes.includes(type.toLowerCase())) {
						alert(_options.typeErrorMessage)

						return e.target.value = ''
					}
				}

				if (_options.mode === 'image') {
					this.image(_$el, _options)
				} else {
					this.simple(_$el, _options)
				}
			})

			_options.resetTarget ? document.querySelector(_options.resetTarget).addEventListener('click', () => {
				_$el.value = ''
				_options.$target.setAttribute(_options.targetAttr, _options.resetImg)
			}) : null
		}
	}

	simple($el, settings) {
		settings.textContent = $el.value.replace(/.+[\\\/]/, '')
	}

	image($el, settings) {
		let reader

		if ($el.files && $el.files[0]) {
			reader = new FileReader()

			reader.onload = (e) => {
				settings.$target.setAttribute(settings.targetAttr, e.target.result)
			}

			reader.readAsDataURL($el.files[0])
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
