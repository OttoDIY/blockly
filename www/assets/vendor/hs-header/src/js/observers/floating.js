import HSAbstractObserver from "./abstract";

export default class HSHeaderFloatingObserver extends HSAbstractObserver {
  constructor(element) {
    super(element);
    this.dataSettings = this.element.hasAttribute('data-hs-header-options') ? JSON.parse(this.element.getAttribute('data-hs-header-options')) : {};
  }

  init() {
    this.offset = this.element.offsetTop;
    this.sections = this.element.querySelectorAll('.navbar-section');
    this.defaultState = true;

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
    this.element.classList.add('navbar-scrolled')
    this.element.classList.add(this.dataSettings.fixMomentClasses)
    this.element.classList.remove(this.dataSettings.fixMomentExclude);

    if (this.sections.length) {
      this.sections.forEach($section => {
        const dataSettings = $section.hasAttribute('data-hs-navbar-item-options') ? JSON.parse($section.getAttribute('data-hs-navbar-item-options')) : {};

        $section.classList.add(dataSettings.fixMomentClasses)
        $section.classList.remove(dataSettings.fixMomentExclude)
      });
    }

    this.defaultState = !this.defaultState;

    return this;
  }

  toDefaultState() {
    this.element.classList.remove('navbar-scrolled')
    this.element.classList.remove(this.dataSettings.fixMomentClasses)
    this.element.classList.add(this.dataSettings.fixMomentExclude);

    if (this.sections.length) {
      this.sections.forEach($section => {
        const dataSettings = $section.hasAttribute('data-hs-navbar-item-options') ? JSON.parse($section.getAttribute('data-hs-navbar-item-options')) : {};

        $section.classList.add(dataSettings.fixMomentClasses)
        $section.classList.remove(dataSettings.fixMomentExclude)
      });
    }

    this.defaultState = !this.defaultState;

    return this;
  }
}
