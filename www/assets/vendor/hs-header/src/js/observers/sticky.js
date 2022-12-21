import HSAbstractObserver from "./abstract";

export default class HSHeaderStickObserver extends HSAbstractObserver {
    constructor(element) {
        super(element);
        this.dataSettings = this.element.hasAttribute('data-hs-header-options') ? JSON.parse(this.element.getAttribute('data-hs-header-options')) : {};
    }

    init() {
        this.defaultState = true;
        this.offset = this.element.offsetTop
        return this;
    }

    destroy() {
        this.toDefaultState();
        return this;
    }

    check() {
        const docScrolled = window.pageYOffset;
        if (docScrolled > this.offset && this.defaultState) {
            this.changeState();
        } else if (docScrolled <= this.offset && !this.defaultState) {
            this.toDefaultState();
        }
        return this;
    }

    changeState() {
        this.element.classList.add('navbar-scrolled');
        this.defaultState = !this.defaultState;
        this.element.classList.add(this.dataSettings.fixMomentClasses)
        this.element.classList.remove(this.dataSettings.fixMomentExclude);
        return this;
    }

    toDefaultState() {
        this.element.classList.remove('navbar-scrolled');
        this.defaultState = !this.defaultState;
        this.element.classList.remove(this.dataSettings.fixMomentClasses)
        this.element.classList.add(this.dataSettings.fixMomentExclude);
        return this;
    }
}