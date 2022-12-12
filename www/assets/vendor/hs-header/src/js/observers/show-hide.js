import HSAbstractObserver from "./abstract";

export default class HSHeaderShowHideObserver extends HSAbstractObserver {
	constructor(element, config) {
		super(element, config);
		this.dataSettings = this.element.hasAttribute('data-hs-header-options') ? JSON.parse(this.element.getAttribute('data-hs-header-options')) : {};
		this.config = config
	}

	init() {
		if (!this.defaultState && window.pageYOffset > this.offset) return this;

		this.defaultState = true;
		this.transitionDuration = parseFloat(getComputedStyle(this.element)['transition-duration'], 10) * 1000;

		this.offset = isFinite(this.dataSettings.fixMoment) && this.dataSettings.fixMoment > this.element.offsetHeight ? this.dataSettings.fixMoment : this.element.offsetHeight + 100;
		this.effect = this.dataSettings.fixEffect ? this.dataSettings.fixEffect : 'show-hide';

		return this;
	}

	destroy() {
		if (!this.defaultState && window.pageYOffset > this.offset) return this;

		this.element.classList.remove('navbar-untransitioned');
		this._removeCap();

		return this;
	}

	check() {
		if (window.pageYOffset > this.element.offsetHeight && !this.capInserted) {
			this._insertCap();
		} else if (window.pageYOffset <= this.element.offsetHeight && this.capInserted) {
			this._removeCap();
		}

		if (window.pageYOffset > this.offset && this.defaultState) {
			this.changeState();
		} else if (window.pageYOffset <= this.offset && !this.defaultState) {
			this.toDefaultState();
		}
	}

	changeState() {
		if (this.config.fixMomentClasses) {
			this.element.classList.add(...this.config.fixMomentClasses)
		}

		this.element.classList.remove('navbar-untransitioned');

		if (this.animationTimeoutId) clearTimeout(this.animationTimeoutId);

		switch (this.effect) {
			case 'fade' :
				this.element.classList.remove('navbar-faded');
				break;

			case 'slide' :
				this.element.classList.remove('navbar-moved-up');
				break;

			default:
				this.element.classList.remove('navbar-invisible');
		}

		this.defaultState = !this.defaultState;
	}

	toDefaultState() {
		let self = this;

		if (this.config.fixMomentClasses) {
			this.element.classList.remove(...this.config.fixMomentClasses)
		}

		this.animationTimeoutId = setTimeout(function () {
			self.element.classList.add('navbar-untransitioned');
		}, this.transitionDuration);

		switch (this.effect) {
			case 'fade' :
				this.element.classList.add('navbar-faded');
				break;
			case 'slide' :
				this.element.classList.add('navbar-moved-up');
				break;
			default:
				this.element.classList.add('navbar-invisible');
		}

		this.defaultState = !this.defaultState;
	}

	_insertCap() {
		this.element.classList.add('navbar-scrolled', 'navbar-untransitioned');

		if (this.element.classList.contains('navbar-static')) {
			document.documentElement.style.paddingTop = this.element.offsetHeight
		}

		switch (this.effect) {
			case 'fade' :
				this.element.classList.add('navbar-faded');
				break;

			case 'slide' :
				this.element.classList.add('navbar-moved-up');
				break;

			default :
				this.element.classList.add('navbar-invisible')
		}

		this.capInserted = true;
	}

	_removeCap() {
		let self = this;

		this.element.classList.remove('navbar-scrolled');

		if (this.element.classList.contains('navbar-static')) {
			document.documentElement.style.paddingTop = 0
		}

		if (this.removeCapTimeOutId) clearTimeout(this.removeCapTimeOutId);

		this.removeCapTimeOutId = setTimeout(function () {
			self.element.classList.remove('navbar-moved-up', 'navbar-faded', 'navbar-invisible');
		}, 10);

		this.capInserted = false;
	}
}
