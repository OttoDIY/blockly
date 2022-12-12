import HSAbstractObserver from "./abstract";

export default class HSHeaderMomentShowHideObserver extends HSAbstractObserver {
	constructor(element) {
		super(element);
		this.dataSettings = this.element.hasAttribute('data-hs-header-options') ? JSON.parse(this.element.getAttribute('data-hs-header-options')) : {};
	}
	
	init() {
		this.direction = 'down';
		this.delta = 0;
		this.defaultState = true;
		
		this.offset = isFinite(this.dataSettings.fixMoment) && this.dataSettings.fixMoment !== 0 ? this.dataSettings.fixMoment : 5;
		this.effect = this.dataSettings.fixEffect ? this.dataSettings.fixEffect : 'show-hide';
		
		return this;
	}
	
	destroy() {
		this.toDefaultState();
		
		return this;
	}
	
	checkDirection() {
		if (window.pageYOffset > this.delta) {
			this.direction = 'down';
		} else {
			this.direction = 'up';
		}
		
		this.delta = window.pageYOffset
		
		return this;
	}
	
	toDefaultState() {
		switch (this.effect) {
			case 'slide' :
				this.element.classList.remove('navbar-moved-up');
				break;
			
			case 'fade' :
				this.element.classList.remove('navbar-faded');
				break;
			
			default:
				this.element.classList.remove('navbar-invisible');
		}
		
		this.defaultState = !this.defaultState;
		
		return this;
	}
	
	changeState() {
		switch (this.effect) {
			case 'slide' :
				this.element.classList.add('navbar-moved-up');
				break;
			
			case 'fade' :
				this.element.classList.add('navbar-faded');
				break;
			
			default:
				this.element.classList.add('navbar-invisible');
		}
		
		this.defaultState = !this.defaultState;
		
		return this;
	}
	
	check() {
		let docScrolled = window.pageYOffset
		
		this.checkDirection();
		
		if (docScrolled >= this.offset && this.defaultState && this.direction === 'down') {
			this.changeState();
		} else if (!this.defaultState && this.direction === 'up') {
			this.toDefaultState();
		}
		
		return this;
	}
}
