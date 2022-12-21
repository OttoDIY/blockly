import HSAbstractObserver from "./abstract";

export default class HSHeaderHideSectionObserver extends HSAbstractObserver {
	constructor(element) {
		super(element);
		this.dataSettings = this.element.hasAttribute('data-hs-header-options') ? JSON.parse(this.element.getAttribute('data-hs-header-options')) : {};
	}

	init() {
		this.offset = isFinite(this.dataSettings.fixMoment) ? this.dataSettings.fixMoment : 5;
		this.section = this.element.querySelector('.navbar-section-hidden');
		this.defaultState = true;

		this.sectionHeight = this.section ? this.section.offsetHeight : 0;

		return this;
	}

	destroy() {
		if (this.section) {
			this.element.transition = 'margin-top .5s';
			this.element.style.marginTop = 0
		}

		return this;
	}

	check() {
		if (!this.section) return this;

		const	docScrolled = window.pageYOffset;

		if (docScrolled > this.offset && this.defaultState) {
			this.changeState();
		} else if (docScrolled <= this.offset && !this.defaultState) {
			this.toDefaultState();
		}

		return this;
	}

	changeState() {
		let self = this;

		this.element.transition = 'margin-top .5s';
		this.element.style.marginTop = self.sectionHeight * -1 - 1 + 'px'

		this.defaultState = !this.defaultState;

		return this;
	}

	toDefaultState() {
		this.element.transition = 'margin-top .5s';
		this.element.style.marginTop = 0

		this.defaultState = !this.defaultState;

		return this;
	}
}
