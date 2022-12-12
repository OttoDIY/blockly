import HSAbstractObserver from "./abstract";
import slideUp from "../utils/slideUp";
import slideDown from "../utils/slideDown";

export default class HSHeaderHasHiddenElement extends HSAbstractObserver {
	constructor(element) {
		super(element);
		this.config = {
			animated: true
		};
		this.dataSettings = this.element.hasAttribute('data-hs-header-options') ? JSON.parse(this.element.getAttribute('data-hs-header-options')) : {};
	}
	
	init() {
		this.offset = isFinite(this.dataSettings.fixMoment) ? this.dataSettings.fixMoment : 5;
		this.elements = this.element.querySelectorAll('.navbar-hidden-element');
		this.defaultState = true;
		
		return this;
	}
	
	destroy() {
		this.toDefaultState();
		
		return this;
	}
	
	check() {
		if (!this.elements.length) return this;
		
		const docScrolled = window.pageYOffset;
		
		if (docScrolled > this.offset && this.defaultState) {
			this.changeState();
		} else if (docScrolled <= this.offset && !this.defaultState) {
			this.toDefaultState();
		}
		
		return this;
	}
	
	changeState() {
		if (this.config.animated) {
			this.elements.forEach(item => {
				slideUp(item)
			})
		} else {
			this.elements.forEach(item => {
				item.style.display = 'none'
			})
		}
		
		this.defaultState = !this.defaultState;
		
		return this;
	}
	
	toDefaultState() {
		if (this.config.animated) {
			this.elements.forEach(item => {
				slideDown(item)
			})
		} else {
			this.elements.forEach(item => {
				item.style.display = 'block'
			})
		}
		
		this.defaultState = !this.defaultState;
		
		return this;
	}
}
