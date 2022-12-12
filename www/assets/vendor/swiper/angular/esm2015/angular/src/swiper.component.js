import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, HostBinding, Inject, Input, Output, PLATFORM_ID, ViewChild, ViewEncapsulation, } from '@angular/core';
// @ts-ignore
import Swiper from 'swiper';
import { of, Subject } from 'rxjs';
import { getParams } from './utils/get-params';
import { SwiperSlideDirective } from './swiper-slide.directive';
import { extend, isObject, setProperty, ignoreNgOnChanges, coerceBooleanProperty, isShowEl, } from './utils/utils';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SwiperComponent {
    constructor(_ngZone, elementRef, _changeDetectorRef, _platformId) {
        this._ngZone = _ngZone;
        this.elementRef = elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._platformId = _platformId;
        this.slideClass = 'swiper-slide';
        this.wrapperClass = 'swiper-wrapper';
        this.showNavigation = true;
        this.showPagination = true;
        this.showScrollbar = true;
        // prettier-ignore
        this.s__beforeBreakpoint = new EventEmitter();
        // prettier-ignore
        this.s__containerClasses = new EventEmitter();
        // prettier-ignore
        this.s__slideClass = new EventEmitter();
        // prettier-ignore
        this.s__swiper = new EventEmitter();
        // prettier-ignore
        this.s_activeIndexChange = new EventEmitter();
        // prettier-ignore
        this.s_afterInit = new EventEmitter();
        // prettier-ignore
        this.s_autoplay = new EventEmitter();
        // prettier-ignore
        this.s_autoplayStart = new EventEmitter();
        // prettier-ignore
        this.s_autoplayStop = new EventEmitter();
        // prettier-ignore
        this.s_beforeDestroy = new EventEmitter();
        // prettier-ignore
        this.s_beforeInit = new EventEmitter();
        // prettier-ignore
        this.s_beforeLoopFix = new EventEmitter();
        // prettier-ignore
        this.s_beforeResize = new EventEmitter();
        // prettier-ignore
        this.s_beforeSlideChangeStart = new EventEmitter();
        // prettier-ignore
        this.s_beforeTransitionStart = new EventEmitter();
        // prettier-ignore
        this.s_breakpoint = new EventEmitter();
        // prettier-ignore
        this.s_changeDirection = new EventEmitter();
        // prettier-ignore
        this.s_click = new EventEmitter();
        // prettier-ignore
        this.s_doubleTap = new EventEmitter();
        // prettier-ignore
        this.s_doubleClick = new EventEmitter();
        // prettier-ignore
        this.s_destroy = new EventEmitter();
        // prettier-ignore
        this.s_fromEdge = new EventEmitter();
        // prettier-ignore
        this.s_hashChange = new EventEmitter();
        // prettier-ignore
        this.s_hashSet = new EventEmitter();
        // prettier-ignore
        this.s_imagesReady = new EventEmitter();
        // prettier-ignore
        this.s_init = new EventEmitter();
        // prettier-ignore
        this.s_keyPress = new EventEmitter();
        // prettier-ignore
        this.s_lazyImageLoad = new EventEmitter();
        // prettier-ignore
        this.s_lazyImageReady = new EventEmitter();
        // prettier-ignore
        this.s_loopFix = new EventEmitter();
        // prettier-ignore
        this.s_momentumBounce = new EventEmitter();
        // prettier-ignore
        this.s_navigationHide = new EventEmitter();
        // prettier-ignore
        this.s_navigationShow = new EventEmitter();
        // prettier-ignore
        this.s_observerUpdate = new EventEmitter();
        // prettier-ignore
        this.s_orientationchange = new EventEmitter();
        // prettier-ignore
        this.s_paginationHide = new EventEmitter();
        // prettier-ignore
        this.s_paginationRender = new EventEmitter();
        // prettier-ignore
        this.s_paginationShow = new EventEmitter();
        // prettier-ignore
        this.s_paginationUpdate = new EventEmitter();
        // prettier-ignore
        this.s_progress = new EventEmitter();
        // prettier-ignore
        this.s_reachBeginning = new EventEmitter();
        // prettier-ignore
        this.s_reachEnd = new EventEmitter();
        // prettier-ignore
        this.s_realIndexChange = new EventEmitter();
        // prettier-ignore
        this.s_resize = new EventEmitter();
        // prettier-ignore
        this.s_scroll = new EventEmitter();
        // prettier-ignore
        this.s_scrollbarDragEnd = new EventEmitter();
        // prettier-ignore
        this.s_scrollbarDragMove = new EventEmitter();
        // prettier-ignore
        this.s_scrollbarDragStart = new EventEmitter();
        // prettier-ignore
        this.s_setTransition = new EventEmitter();
        // prettier-ignore
        this.s_setTranslate = new EventEmitter();
        // prettier-ignore
        this.s_slideChange = new EventEmitter();
        // prettier-ignore
        this.s_slideChangeTransitionEnd = new EventEmitter();
        // prettier-ignore
        this.s_slideChangeTransitionStart = new EventEmitter();
        // prettier-ignore
        this.s_slideNextTransitionEnd = new EventEmitter();
        // prettier-ignore
        this.s_slideNextTransitionStart = new EventEmitter();
        // prettier-ignore
        this.s_slidePrevTransitionEnd = new EventEmitter();
        // prettier-ignore
        this.s_slidePrevTransitionStart = new EventEmitter();
        // prettier-ignore
        this.s_slideResetTransitionStart = new EventEmitter();
        // prettier-ignore
        this.s_slideResetTransitionEnd = new EventEmitter();
        // prettier-ignore
        this.s_sliderMove = new EventEmitter();
        // prettier-ignore
        this.s_sliderFirstMove = new EventEmitter();
        // prettier-ignore
        this.s_slidesLengthChange = new EventEmitter();
        // prettier-ignore
        this.s_slidesGridLengthChange = new EventEmitter();
        // prettier-ignore
        this.s_snapGridLengthChange = new EventEmitter();
        // prettier-ignore
        this.s_snapIndexChange = new EventEmitter();
        // prettier-ignore
        this.s_tap = new EventEmitter();
        // prettier-ignore
        this.s_toEdge = new EventEmitter();
        // prettier-ignore
        this.s_touchEnd = new EventEmitter();
        // prettier-ignore
        this.s_touchMove = new EventEmitter();
        // prettier-ignore
        this.s_touchMoveOpposite = new EventEmitter();
        // prettier-ignore
        this.s_touchStart = new EventEmitter();
        // prettier-ignore
        this.s_transitionEnd = new EventEmitter();
        // prettier-ignore
        this.s_transitionStart = new EventEmitter();
        // prettier-ignore
        this.s_update = new EventEmitter();
        // prettier-ignore
        this.s_zoomChange = new EventEmitter();
        // prettier-ignore
        this.s_lock = new EventEmitter();
        // prettier-ignore
        this.s_unlock = new EventEmitter();
        // prettier-ignore
        this.s_swiper = new EventEmitter();
        this.indexChange = new EventEmitter();
        this._activeSlides = new Subject();
        this.containerClasses = 'swiper';
        this.slidesChanges = (val) => {
            this.slides = val.map((slide, index) => {
                slide.slideIndex = index;
                slide.classNames = this.slideClass || '';
                return slide;
            });
            if (this.loop && !this.loopedSlides) {
                this.calcLoopedSlides();
            }
            if (!this.virtual) {
                if (this.loopedSlides) {
                    this.prependSlides = of(this.slides.slice(this.slides.length - this.loopedSlides));
                    this.appendSlides = of(this.slides.slice(0, this.loopedSlides));
                }
            }
            else if (this.swiperRef && this.swiperRef.virtual) {
                this._ngZone.runOutsideAngular(() => {
                    this.swiperRef.virtual.slides = this.slides;
                    this.swiperRef.virtual.update(true);
                });
            }
            this._changeDetectorRef.detectChanges();
        };
        this.style = null;
        this.updateVirtualSlides = (virtualData) => {
            // TODO: type virtualData
            if (!this.swiperRef ||
                (this.currentVirtualData &&
                    this.currentVirtualData.from === virtualData.from &&
                    this.currentVirtualData.to === virtualData.to &&
                    this.currentVirtualData.offset === virtualData.offset)) {
                return;
            }
            this.style = this.swiperRef.isHorizontal()
                ? {
                    [this.swiperRef.rtlTranslate ? 'right' : 'left']: `${virtualData.offset}px`,
                }
                : {
                    top: `${virtualData.offset}px`,
                };
            this.currentVirtualData = virtualData;
            this._activeSlides.next(virtualData.slides);
            this._ngZone.run(() => {
                this._changeDetectorRef.detectChanges();
            });
            this._ngZone.runOutsideAngular(() => {
                this.swiperRef.updateSlides();
                this.swiperRef.updateProgress();
                this.swiperRef.updateSlidesClasses();
                if (this.swiperRef.lazy && this.swiperRef.params.lazy['enabled']) {
                    this.swiperRef.lazy.load();
                }
                this.swiperRef.virtual.update(true);
            });
            return;
        };
    }
    set navigation(val) {
        var _a, _b, _c;
        const currentNext = typeof this._navigation !== 'boolean' && this._navigation !== ''
            ? (_a = this._navigation) === null || _a === void 0 ? void 0 : _a.nextEl
            : null;
        const currentPrev = typeof this._navigation !== 'boolean' && this._navigation !== ''
            ? (_b = this._navigation) === null || _b === void 0 ? void 0 : _b.prevEl
            : null;
        this._navigation = setProperty(val, {
            nextEl: currentNext || null,
            prevEl: currentPrev || null,
        });
        this.showNavigation = !(coerceBooleanProperty(val) !== true ||
            (this._navigation &&
                typeof this._navigation !== 'boolean' &&
                this._navigation.prevEl !== ((_c = this._prevElRef) === null || _c === void 0 ? void 0 : _c.nativeElement) &&
                (this._navigation.prevEl !== null || this._navigation.nextEl !== null) &&
                (typeof this._navigation.nextEl === 'string' ||
                    typeof this._navigation.prevEl === 'string' ||
                    typeof this._navigation.nextEl === 'object' ||
                    typeof this._navigation.prevEl === 'object')));
    }
    get navigation() {
        return this._navigation;
    }
    set pagination(val) {
        var _a;
        const current = typeof this._pagination !== 'boolean' && this._pagination !== ''
            ? (_a = this._pagination) === null || _a === void 0 ? void 0 : _a.el
            : null;
        this._pagination = setProperty(val, {
            el: current || null,
        });
        this.showPagination = isShowEl(val, this._pagination, this._paginationElRef);
    }
    get pagination() {
        return this._pagination;
    }
    set scrollbar(val) {
        var _a;
        const current = typeof this._scrollbar !== 'boolean' && this._scrollbar !== '' ? (_a = this._scrollbar) === null || _a === void 0 ? void 0 : _a.el : null;
        this._scrollbar = setProperty(val, {
            el: current || null,
        });
        this.showScrollbar = isShowEl(val, this._scrollbar, this._scrollbarElRef);
    }
    get scrollbar() {
        return this._scrollbar;
    }
    set virtual(val) {
        this._virtual = setProperty(val);
    }
    get virtual() {
        return this._virtual;
    }
    set index(index) {
        console.warn('`[(index)]` prop is deprecated and will be removed in upcoming versions');
        this.setIndex(index);
    }
    set config(val) {
        this.updateSwiper(val);
        const { params } = getParams(val);
        Object.assign(this, params);
    }
    set prevElRef(el) {
        this._prevElRef = el;
        this._setElement(el, this.navigation, 'navigation', 'prevEl');
    }
    set nextElRef(el) {
        this._nextElRef = el;
        this._setElement(el, this.navigation, 'navigation', 'nextEl');
    }
    set scrollbarElRef(el) {
        this._scrollbarElRef = el;
        this._setElement(el, this.scrollbar, 'scrollbar');
    }
    set paginationElRef(el) {
        this._paginationElRef = el;
        this._setElement(el, this.pagination, 'pagination');
    }
    get activeSlides() {
        if (this.virtual) {
            return this._activeSlides;
        }
        return of(this.slides);
    }
    get zoomContainerClass() {
        return this.zoom && typeof this.zoom !== 'boolean'
            ? this.zoom.containerClass
            : 'swiper-zoom-container';
    }
    _setElement(el, ref, update, key = 'el') {
        if (!ref || !el)
            return;
        if (el.nativeElement) {
            if (ref[key] === el.nativeElement) {
                return;
            }
            ref[key] = el.nativeElement;
        }
        const updateObj = {};
        updateObj[update] = true;
        this.updateInitSwiper(updateObj);
    }
    ngOnInit() {
        const { params } = getParams(this);
        Object.assign(this, params);
    }
    ngAfterViewInit() {
        this.childrenSlidesInit();
        this.initSwiper();
        this._changeDetectorRef.detectChanges();
        setTimeout(() => {
            this.s_swiper.emit(this.swiperRef);
        });
    }
    childrenSlidesInit() {
        this.slidesChanges(this.slidesEl);
        this.slidesEl.changes.subscribe(this.slidesChanges);
    }
    get isSwiperActive() {
        return this.swiperRef && !this.swiperRef.destroyed;
    }
    initSwiper() {
        const { params: swiperParams, passedParams } = getParams(this);
        Object.assign(this, swiperParams);
        this._ngZone.runOutsideAngular(() => {
            swiperParams.init = false;
            if (!swiperParams.virtual) {
                swiperParams.observer = true;
            }
            swiperParams.onAny = (eventName, ...args) => {
                const emitter = this[('s_' + eventName)];
                if (emitter) {
                    emitter.emit(...args);
                }
            };
            const _slideClasses = (_, updated) => {
                updated.forEach(({ slideEl, classNames }, index) => {
                    const dataIndex = slideEl.getAttribute('data-swiper-slide-index');
                    const slideIndex = dataIndex ? parseInt(dataIndex) : index;
                    if (this.virtual) {
                        const virtualSlide = this.slides.find((item) => {
                            return item.virtualIndex && item.virtualIndex === slideIndex;
                        });
                        if (virtualSlide) {
                            virtualSlide.classNames = classNames;
                            return;
                        }
                    }
                    if (this.slides[slideIndex]) {
                        this.slides[slideIndex].classNames = classNames;
                    }
                });
                this._changeDetectorRef.detectChanges();
            };
            const _containerClasses = (_, classes) => {
                setTimeout(() => {
                    this.containerClasses = classes;
                });
            };
            Object.assign(swiperParams.on, {
                _containerClasses,
                _slideClasses,
            });
            const swiperRef = new Swiper(swiperParams);
            swiperRef.loopCreate = () => { };
            swiperRef.loopDestroy = () => { };
            if (swiperParams.loop) {
                swiperRef.loopedSlides = this.loopedSlides;
            }
            const isVirtualEnabled = typeof swiperRef.params.virtual !== 'undefined' &&
                typeof swiperRef.params.virtual !== 'boolean' &&
                swiperRef.params.virtual.enabled;
            if (swiperRef.virtual && isVirtualEnabled) {
                swiperRef.virtual.slides = this.slides;
                const extendWith = {
                    cache: false,
                    slides: this.slides,
                    renderExternal: this.updateVirtualSlides,
                    renderExternalUpdate: false,
                };
                extend(swiperRef.params.virtual, extendWith);
                extend(swiperRef.originalParams.virtual, extendWith);
            }
            if (isPlatformBrowser(this._platformId)) {
                this.swiperRef = swiperRef.init(this.elementRef.nativeElement);
                const isEnabled = typeof this.swiperRef.params.virtual !== 'undefined' &&
                    typeof this.swiperRef.params.virtual !== 'boolean' &&
                    this.swiperRef.params.virtual.enabled;
                if (this.swiperRef.virtual && isEnabled) {
                    this.swiperRef.virtual.update(true);
                }
                this._changeDetectorRef.detectChanges();
                swiperRef.on('slideChange', () => {
                    this.indexChange.emit(this.swiperRef.realIndex);
                });
            }
        });
    }
    ngOnChanges(changedParams) {
        this.updateSwiper(changedParams);
        this._changeDetectorRef.detectChanges();
    }
    updateInitSwiper(changedParams) {
        if (!(changedParams && this.swiperRef && !this.swiperRef.destroyed)) {
            return;
        }
        this._ngZone.runOutsideAngular(() => {
            const { params: currentParams, pagination, navigation, scrollbar, virtual, thumbs, } = this.swiperRef;
            if (changedParams.pagination) {
                if (this.pagination &&
                    typeof this.pagination !== 'boolean' &&
                    this.pagination.el &&
                    pagination &&
                    !pagination.el) {
                    this.updateParameter('pagination', this.pagination);
                    pagination.init();
                    pagination.render();
                    pagination.update();
                }
                else {
                    pagination.destroy();
                    pagination.el = null;
                }
            }
            if (changedParams.scrollbar) {
                if (this.scrollbar &&
                    typeof this.scrollbar !== 'boolean' &&
                    this.scrollbar.el &&
                    scrollbar &&
                    !scrollbar.el) {
                    this.updateParameter('scrollbar', this.scrollbar);
                    scrollbar.init();
                    scrollbar.updateSize();
                    scrollbar.setTranslate();
                }
                else {
                    scrollbar.destroy();
                    scrollbar.el = null;
                }
            }
            if (changedParams.navigation) {
                if (this.navigation &&
                    typeof this.navigation !== 'boolean' &&
                    this.navigation.prevEl &&
                    this.navigation.nextEl &&
                    navigation &&
                    !navigation.prevEl &&
                    !navigation.nextEl) {
                    this.updateParameter('navigation', this.navigation);
                    navigation.init();
                    navigation.update();
                }
                else if (navigation.prevEl && navigation.nextEl) {
                    navigation.destroy();
                    navigation.nextEl = null;
                    navigation.prevEl = null;
                }
            }
            if (changedParams.thumbs && this.thumbs && this.thumbs.swiper) {
                this.updateParameter('thumbs', this.thumbs);
                const initialized = thumbs.init();
                if (initialized)
                    thumbs.update(true);
            }
            if (changedParams.controller && this.controller && this.controller.control) {
                this.swiperRef.controller.control = this.controller.control;
            }
            this.swiperRef.update();
        });
    }
    updateSwiper(changedParams) {
        this._ngZone.runOutsideAngular(() => {
            var _a, _b;
            if (changedParams.config) {
                return;
            }
            if (!(changedParams && this.swiperRef && !this.swiperRef.destroyed)) {
                return;
            }
            for (const key in changedParams) {
                if (ignoreNgOnChanges.indexOf(key) >= 0) {
                    continue;
                }
                const newValue = (_b = (_a = changedParams[key]) === null || _a === void 0 ? void 0 : _a.currentValue) !== null && _b !== void 0 ? _b : changedParams[key];
                this.updateParameter(key, newValue);
            }
            if (changedParams.allowSlideNext) {
                this.swiperRef.allowSlideNext = this.allowSlideNext;
            }
            if (changedParams.allowSlidePrev) {
                this.swiperRef.allowSlidePrev = this.allowSlidePrev;
            }
            if (changedParams.direction) {
                this.swiperRef.changeDirection(this.direction, false);
            }
            if (changedParams.breakpoints) {
                if (this.loop && !this.loopedSlides) {
                    this.calcLoopedSlides();
                }
                this.swiperRef.currentBreakpoint = null;
                this.swiperRef.setBreakpoint();
            }
            if (changedParams.thumbs || changedParams.controller) {
                this.updateInitSwiper(changedParams);
            }
            this.swiperRef.update();
        });
    }
    calcLoopedSlides() {
        if (!this.loop) {
            return;
        }
        let slidesPerViewParams = this.slidesPerView;
        if (this.breakpoints) {
            const breakpoint = Swiper.prototype.getBreakpoint(this.breakpoints);
            const breakpointOnlyParams = breakpoint in this.breakpoints ? this.breakpoints[breakpoint] : undefined;
            if (breakpointOnlyParams && breakpointOnlyParams.slidesPerView) {
                slidesPerViewParams = breakpointOnlyParams.slidesPerView;
            }
        }
        if (slidesPerViewParams === 'auto') {
            this.loopedSlides = this.slides.length;
            return this.slides.length;
        }
        let loopedSlides = this.loopedSlides || slidesPerViewParams;
        if (!loopedSlides) {
            // ?
            return;
        }
        if (this.loopAdditionalSlides) {
            loopedSlides += this.loopAdditionalSlides;
        }
        if (loopedSlides > this.slides.length) {
            loopedSlides = this.slides.length;
        }
        this.loopedSlides = loopedSlides;
        return loopedSlides;
    }
    updateParameter(key, value) {
        if (!(this.swiperRef && !this.swiperRef.destroyed)) {
            return;
        }
        const _key = key.replace(/^_/, '');
        const isCurrentParamObj = isObject(this.swiperRef.params[_key]);
        if (_key === 'enabled') {
            if (value === true) {
                this.swiperRef.enable();
            }
            else if (value === false) {
                this.swiperRef.disable();
            }
            return;
        }
        if (isCurrentParamObj && isObject(value)) {
            extend(this.swiperRef.params[_key], value);
        }
        else {
            this.swiperRef.params[_key] = value;
        }
    }
    /**
     * @deprecated will be removed in upcoming versions
     */
    setIndex(index, speed, silent) {
        if (!this.isSwiperActive) {
            this.initialSlide = index;
            return;
        }
        if (index === this.swiperRef.activeIndex) {
            return;
        }
        this._ngZone.runOutsideAngular(() => {
            if (this.loop) {
                this.swiperRef.slideToLoop(index, speed, !silent);
            }
            else {
                this.swiperRef.slideTo(index, speed, !silent);
            }
        });
    }
    ngOnDestroy() {
        this._ngZone.runOutsideAngular(() => {
            var _a;
            (_a = this.swiperRef) === null || _a === void 0 ? void 0 : _a.destroy(true, false);
        });
    }
}
SwiperComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0, type: SwiperComponent, deps: [{ token: i0.NgZone }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Component });
SwiperComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.2", type: SwiperComponent, selector: "swiper, [swiper]", inputs: { enabled: "enabled", on: "on", direction: "direction", touchEventsTarget: "touchEventsTarget", initialSlide: "initialSlide", speed: "speed", cssMode: "cssMode", updateOnWindowResize: "updateOnWindowResize", resizeObserver: "resizeObserver", nested: "nested", focusableElements: "focusableElements", width: "width", height: "height", preventInteractionOnTransition: "preventInteractionOnTransition", userAgent: "userAgent", url: "url", edgeSwipeDetection: "edgeSwipeDetection", edgeSwipeThreshold: "edgeSwipeThreshold", freeMode: "freeMode", autoHeight: "autoHeight", setWrapperSize: "setWrapperSize", virtualTranslate: "virtualTranslate", effect: "effect", breakpoints: "breakpoints", spaceBetween: "spaceBetween", slidesPerView: "slidesPerView", grid: "grid", slidesPerGroup: "slidesPerGroup", slidesPerGroupSkip: "slidesPerGroupSkip", centeredSlides: "centeredSlides", centeredSlidesBounds: "centeredSlidesBounds", slidesOffsetBefore: "slidesOffsetBefore", slidesOffsetAfter: "slidesOffsetAfter", normalizeSlideIndex: "normalizeSlideIndex", centerInsufficientSlides: "centerInsufficientSlides", watchOverflow: "watchOverflow", roundLengths: "roundLengths", touchRatio: "touchRatio", touchAngle: "touchAngle", simulateTouch: "simulateTouch", shortSwipes: "shortSwipes", longSwipes: "longSwipes", longSwipesRatio: "longSwipesRatio", longSwipesMs: "longSwipesMs", followFinger: "followFinger", allowTouchMove: "allowTouchMove", threshold: "threshold", touchMoveStopPropagation: "touchMoveStopPropagation", touchStartPreventDefault: "touchStartPreventDefault", touchStartForcePreventDefault: "touchStartForcePreventDefault", touchReleaseOnEdges: "touchReleaseOnEdges", uniqueNavElements: "uniqueNavElements", resistance: "resistance", resistanceRatio: "resistanceRatio", watchSlidesProgress: "watchSlidesProgress", grabCursor: "grabCursor", preventClicks: "preventClicks", preventClicksPropagation: "preventClicksPropagation", slideToClickedSlide: "slideToClickedSlide", preloadImages: "preloadImages", updateOnImagesReady: "updateOnImagesReady", loop: "loop", loopAdditionalSlides: "loopAdditionalSlides", loopedSlides: "loopedSlides", loopFillGroupWithBlank: "loopFillGroupWithBlank", loopPreventsSlide: "loopPreventsSlide", rewind: "rewind", allowSlidePrev: "allowSlidePrev", allowSlideNext: "allowSlideNext", swipeHandler: "swipeHandler", noSwiping: "noSwiping", noSwipingClass: "noSwipingClass", noSwipingSelector: "noSwipingSelector", passiveListeners: "passiveListeners", containerModifierClass: "containerModifierClass", slideClass: "slideClass", slideBlankClass: "slideBlankClass", slideActiveClass: "slideActiveClass", slideDuplicateActiveClass: "slideDuplicateActiveClass", slideVisibleClass: "slideVisibleClass", slideDuplicateClass: "slideDuplicateClass", slideNextClass: "slideNextClass", slideDuplicateNextClass: "slideDuplicateNextClass", slidePrevClass: "slidePrevClass", slideDuplicatePrevClass: "slideDuplicatePrevClass", wrapperClass: "wrapperClass", runCallbacksOnInit: "runCallbacksOnInit", observeParents: "observeParents", observeSlideChildren: "observeSlideChildren", a11y: "a11y", autoplay: "autoplay", controller: "controller", coverflowEffect: "coverflowEffect", cubeEffect: "cubeEffect", fadeEffect: "fadeEffect", flipEffect: "flipEffect", creativeEffect: "creativeEffect", cardsEffect: "cardsEffect", hashNavigation: "hashNavigation", history: "history", keyboard: "keyboard", lazy: "lazy", mousewheel: "mousewheel", parallax: "parallax", thumbs: "thumbs", zoom: "zoom", class: "class", id: "id", navigation: "navigation", pagination: "pagination", scrollbar: "scrollbar", virtual: "virtual", index: "index", config: "config" }, outputs: { s__beforeBreakpoint: "_beforeBreakpoint", s__containerClasses: "_containerClasses", s__slideClass: "_slideClass", s__swiper: "_swiper", s_activeIndexChange: "activeIndexChange", s_afterInit: "afterInit", s_autoplay: "autoplay", s_autoplayStart: "autoplayStart", s_autoplayStop: "autoplayStop", s_beforeDestroy: "beforeDestroy", s_beforeInit: "beforeInit", s_beforeLoopFix: "beforeLoopFix", s_beforeResize: "beforeResize", s_beforeSlideChangeStart: "beforeSlideChangeStart", s_beforeTransitionStart: "beforeTransitionStart", s_breakpoint: "breakpoint", s_changeDirection: "changeDirection", s_click: "click", s_doubleTap: "doubleTap", s_doubleClick: "doubleClick", s_destroy: "destroy", s_fromEdge: "fromEdge", s_hashChange: "hashChange", s_hashSet: "hashSet", s_imagesReady: "imagesReady", s_init: "init", s_keyPress: "keyPress", s_lazyImageLoad: "lazyImageLoad", s_lazyImageReady: "lazyImageReady", s_loopFix: "loopFix", s_momentumBounce: "momentumBounce", s_navigationHide: "navigationHide", s_navigationShow: "navigationShow", s_observerUpdate: "observerUpdate", s_orientationchange: "orientationchange", s_paginationHide: "paginationHide", s_paginationRender: "paginationRender", s_paginationShow: "paginationShow", s_paginationUpdate: "paginationUpdate", s_progress: "progress", s_reachBeginning: "reachBeginning", s_reachEnd: "reachEnd", s_realIndexChange: "realIndexChange", s_resize: "resize", s_scroll: "scroll", s_scrollbarDragEnd: "scrollbarDragEnd", s_scrollbarDragMove: "scrollbarDragMove", s_scrollbarDragStart: "scrollbarDragStart", s_setTransition: "setTransition", s_setTranslate: "setTranslate", s_slideChange: "slideChange", s_slideChangeTransitionEnd: "slideChangeTransitionEnd", s_slideChangeTransitionStart: "slideChangeTransitionStart", s_slideNextTransitionEnd: "slideNextTransitionEnd", s_slideNextTransitionStart: "slideNextTransitionStart", s_slidePrevTransitionEnd: "slidePrevTransitionEnd", s_slidePrevTransitionStart: "slidePrevTransitionStart", s_slideResetTransitionStart: "slideResetTransitionStart", s_slideResetTransitionEnd: "slideResetTransitionEnd", s_sliderMove: "sliderMove", s_sliderFirstMove: "sliderFirstMove", s_slidesLengthChange: "slidesLengthChange", s_slidesGridLengthChange: "slidesGridLengthChange", s_snapGridLengthChange: "snapGridLengthChange", s_snapIndexChange: "snapIndexChange", s_tap: "tap", s_toEdge: "toEdge", s_touchEnd: "touchEnd", s_touchMove: "touchMove", s_touchMoveOpposite: "touchMoveOpposite", s_touchStart: "touchStart", s_transitionEnd: "transitionEnd", s_transitionStart: "transitionStart", s_update: "update", s_zoomChange: "zoomChange", s_lock: "lock", s_unlock: "unlock", s_swiper: "swiper", indexChange: "indexChange" }, host: { properties: { "class": "this.containerClasses" } }, queries: [{ propertyName: "slidesEl", predicate: SwiperSlideDirective }], viewQueries: [{ propertyName: "prevElRef", first: true, predicate: ["prevElRef"], descendants: true }, { propertyName: "nextElRef", first: true, predicate: ["nextElRef"], descendants: true }, { propertyName: "scrollbarElRef", first: true, predicate: ["scrollbarElRef"], descendants: true }, { propertyName: "paginationElRef", first: true, predicate: ["paginationElRef"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<ng-content select=\"[slot=container-start]\"></ng-content>\n<ng-container *ngIf=\"navigation && showNavigation\">\n  <div class=\"swiper-button-prev\" #prevElRef></div>\n  <div class=\"swiper-button-next\" #nextElRef></div>\n</ng-container>\n<div *ngIf=\"scrollbar && showScrollbar\" class=\"swiper-scrollbar\" #scrollbarElRef></div>\n<div *ngIf=\"pagination && showPagination\" class=\"swiper-pagination\" #paginationElRef></div>\n<div [ngClass]=\"wrapperClass\" [attr.id]=\"id\">\n  <ng-content select=\"[slot=wrapper-start]\"></ng-content>\n  <ng-template\n    *ngTemplateOutlet=\"\n      slidesTemplate;\n      context: {\n        loopSlides: prependSlides,\n        key: 'prepend'\n      }\n    \"\n  ></ng-template>\n  <ng-template\n    *ngTemplateOutlet=\"\n      slidesTemplate;\n      context: {\n        loopSlides: activeSlides,\n        key: ''\n      }\n    \"\n  ></ng-template>\n  <ng-template\n    *ngTemplateOutlet=\"\n      slidesTemplate;\n      context: {\n        loopSlides: appendSlides,\n        key: 'append'\n      }\n    \"\n  ></ng-template>\n  <ng-content select=\"[slot=wrapper-end]\"></ng-content>\n</div>\n<ng-content select=\"[slot=container-end]\"></ng-content>\n\n<ng-template #slidesTemplate let-loopSlides=\"loopSlides\" let-slideKey=\"key\">\n  <div\n    *ngFor=\"let slide of loopSlides | async\"\n    [ngClass]=\"\n      (slide.class ? slide.class + ' ' : '') +\n      slideClass +\n      (slideKey !== '' ? ' ' + slideDuplicateClass : '')\n    \"\n    [attr.data-swiper-slide-index]=\"slide.virtualIndex ? slide.virtualIndex : slide.slideIndex\"\n    [attr.data-swiper-autoplay]=\"slide.autoplayDelay\"\n    [style]=\"style\"\n    [ngSwitch]=\"slide.zoom\"\n  >\n    <div *ngSwitchCase=\"true\" [ngClass]=\"zoomContainerClass\">\n      <ng-template\n        [ngTemplateOutlet]=\"slide.template\"\n        [ngTemplateOutletContext]=\"{\n          $implicit: slide.slideData\n        }\"\n      ></ng-template>\n    </div>\n    <ng-container *ngSwitchDefault>\n      <ng-template\n        [ngTemplateOutlet]=\"slide.template\"\n        [ngTemplateOutletContext]=\"{\n          $implicit: slide.slideData\n        }\"\n      ></ng-template>\n    </ng-container>\n  </div>\n</ng-template>\n", styles: ["\n      swiper {\n        display: block;\n      }\n    "], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }], pipes: { "async": i1.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0, type: SwiperComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'swiper, [swiper]',
                    templateUrl: './swiper.component.html',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [
                        `
      swiper {
        display: block;
      }
    `,
                    ],
                }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { enabled: [{
                type: Input
            }], on: [{
                type: Input
            }], direction: [{
                type: Input
            }], touchEventsTarget: [{
                type: Input
            }], initialSlide: [{
                type: Input
            }], speed: [{
                type: Input
            }], cssMode: [{
                type: Input
            }], updateOnWindowResize: [{
                type: Input
            }], resizeObserver: [{
                type: Input
            }], nested: [{
                type: Input
            }], focusableElements: [{
                type: Input
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }], preventInteractionOnTransition: [{
                type: Input
            }], userAgent: [{
                type: Input
            }], url: [{
                type: Input
            }], edgeSwipeDetection: [{
                type: Input
            }], edgeSwipeThreshold: [{
                type: Input
            }], freeMode: [{
                type: Input
            }], autoHeight: [{
                type: Input
            }], setWrapperSize: [{
                type: Input
            }], virtualTranslate: [{
                type: Input
            }], effect: [{
                type: Input
            }], breakpoints: [{
                type: Input
            }], spaceBetween: [{
                type: Input
            }], slidesPerView: [{
                type: Input
            }], grid: [{
                type: Input
            }], slidesPerGroup: [{
                type: Input
            }], slidesPerGroupSkip: [{
                type: Input
            }], centeredSlides: [{
                type: Input
            }], centeredSlidesBounds: [{
                type: Input
            }], slidesOffsetBefore: [{
                type: Input
            }], slidesOffsetAfter: [{
                type: Input
            }], normalizeSlideIndex: [{
                type: Input
            }], centerInsufficientSlides: [{
                type: Input
            }], watchOverflow: [{
                type: Input
            }], roundLengths: [{
                type: Input
            }], touchRatio: [{
                type: Input
            }], touchAngle: [{
                type: Input
            }], simulateTouch: [{
                type: Input
            }], shortSwipes: [{
                type: Input
            }], longSwipes: [{
                type: Input
            }], longSwipesRatio: [{
                type: Input
            }], longSwipesMs: [{
                type: Input
            }], followFinger: [{
                type: Input
            }], allowTouchMove: [{
                type: Input
            }], threshold: [{
                type: Input
            }], touchMoveStopPropagation: [{
                type: Input
            }], touchStartPreventDefault: [{
                type: Input
            }], touchStartForcePreventDefault: [{
                type: Input
            }], touchReleaseOnEdges: [{
                type: Input
            }], uniqueNavElements: [{
                type: Input
            }], resistance: [{
                type: Input
            }], resistanceRatio: [{
                type: Input
            }], watchSlidesProgress: [{
                type: Input
            }], grabCursor: [{
                type: Input
            }], preventClicks: [{
                type: Input
            }], preventClicksPropagation: [{
                type: Input
            }], slideToClickedSlide: [{
                type: Input
            }], preloadImages: [{
                type: Input
            }], updateOnImagesReady: [{
                type: Input
            }], loop: [{
                type: Input
            }], loopAdditionalSlides: [{
                type: Input
            }], loopedSlides: [{
                type: Input
            }], loopFillGroupWithBlank: [{
                type: Input
            }], loopPreventsSlide: [{
                type: Input
            }], rewind: [{
                type: Input
            }], allowSlidePrev: [{
                type: Input
            }], allowSlideNext: [{
                type: Input
            }], swipeHandler: [{
                type: Input
            }], noSwiping: [{
                type: Input
            }], noSwipingClass: [{
                type: Input
            }], noSwipingSelector: [{
                type: Input
            }], passiveListeners: [{
                type: Input
            }], containerModifierClass: [{
                type: Input
            }], slideClass: [{
                type: Input
            }], slideBlankClass: [{
                type: Input
            }], slideActiveClass: [{
                type: Input
            }], slideDuplicateActiveClass: [{
                type: Input
            }], slideVisibleClass: [{
                type: Input
            }], slideDuplicateClass: [{
                type: Input
            }], slideNextClass: [{
                type: Input
            }], slideDuplicateNextClass: [{
                type: Input
            }], slidePrevClass: [{
                type: Input
            }], slideDuplicatePrevClass: [{
                type: Input
            }], wrapperClass: [{
                type: Input
            }], runCallbacksOnInit: [{
                type: Input
            }], observeParents: [{
                type: Input
            }], observeSlideChildren: [{
                type: Input
            }], a11y: [{
                type: Input
            }], autoplay: [{
                type: Input
            }], controller: [{
                type: Input
            }], coverflowEffect: [{
                type: Input
            }], cubeEffect: [{
                type: Input
            }], fadeEffect: [{
                type: Input
            }], flipEffect: [{
                type: Input
            }], creativeEffect: [{
                type: Input
            }], cardsEffect: [{
                type: Input
            }], hashNavigation: [{
                type: Input
            }], history: [{
                type: Input
            }], keyboard: [{
                type: Input
            }], lazy: [{
                type: Input
            }], mousewheel: [{
                type: Input
            }], parallax: [{
                type: Input
            }], thumbs: [{
                type: Input
            }], zoom: [{
                type: Input
            }], class: [{
                type: Input
            }], id: [{
                type: Input
            }], navigation: [{
                type: Input
            }], pagination: [{
                type: Input
            }], scrollbar: [{
                type: Input
            }], virtual: [{
                type: Input
            }], index: [{
                type: Input
            }], config: [{
                type: Input
            }], s__beforeBreakpoint: [{
                type: Output,
                args: ['_beforeBreakpoint']
            }], s__containerClasses: [{
                type: Output,
                args: ['_containerClasses']
            }], s__slideClass: [{
                type: Output,
                args: ['_slideClass']
            }], s__swiper: [{
                type: Output,
                args: ['_swiper']
            }], s_activeIndexChange: [{
                type: Output,
                args: ['activeIndexChange']
            }], s_afterInit: [{
                type: Output,
                args: ['afterInit']
            }], s_autoplay: [{
                type: Output,
                args: ['autoplay']
            }], s_autoplayStart: [{
                type: Output,
                args: ['autoplayStart']
            }], s_autoplayStop: [{
                type: Output,
                args: ['autoplayStop']
            }], s_beforeDestroy: [{
                type: Output,
                args: ['beforeDestroy']
            }], s_beforeInit: [{
                type: Output,
                args: ['beforeInit']
            }], s_beforeLoopFix: [{
                type: Output,
                args: ['beforeLoopFix']
            }], s_beforeResize: [{
                type: Output,
                args: ['beforeResize']
            }], s_beforeSlideChangeStart: [{
                type: Output,
                args: ['beforeSlideChangeStart']
            }], s_beforeTransitionStart: [{
                type: Output,
                args: ['beforeTransitionStart']
            }], s_breakpoint: [{
                type: Output,
                args: ['breakpoint']
            }], s_changeDirection: [{
                type: Output,
                args: ['changeDirection']
            }], s_click: [{
                type: Output,
                args: ['click']
            }], s_doubleTap: [{
                type: Output,
                args: ['doubleTap']
            }], s_doubleClick: [{
                type: Output,
                args: ['doubleClick']
            }], s_destroy: [{
                type: Output,
                args: ['destroy']
            }], s_fromEdge: [{
                type: Output,
                args: ['fromEdge']
            }], s_hashChange: [{
                type: Output,
                args: ['hashChange']
            }], s_hashSet: [{
                type: Output,
                args: ['hashSet']
            }], s_imagesReady: [{
                type: Output,
                args: ['imagesReady']
            }], s_init: [{
                type: Output,
                args: ['init']
            }], s_keyPress: [{
                type: Output,
                args: ['keyPress']
            }], s_lazyImageLoad: [{
                type: Output,
                args: ['lazyImageLoad']
            }], s_lazyImageReady: [{
                type: Output,
                args: ['lazyImageReady']
            }], s_loopFix: [{
                type: Output,
                args: ['loopFix']
            }], s_momentumBounce: [{
                type: Output,
                args: ['momentumBounce']
            }], s_navigationHide: [{
                type: Output,
                args: ['navigationHide']
            }], s_navigationShow: [{
                type: Output,
                args: ['navigationShow']
            }], s_observerUpdate: [{
                type: Output,
                args: ['observerUpdate']
            }], s_orientationchange: [{
                type: Output,
                args: ['orientationchange']
            }], s_paginationHide: [{
                type: Output,
                args: ['paginationHide']
            }], s_paginationRender: [{
                type: Output,
                args: ['paginationRender']
            }], s_paginationShow: [{
                type: Output,
                args: ['paginationShow']
            }], s_paginationUpdate: [{
                type: Output,
                args: ['paginationUpdate']
            }], s_progress: [{
                type: Output,
                args: ['progress']
            }], s_reachBeginning: [{
                type: Output,
                args: ['reachBeginning']
            }], s_reachEnd: [{
                type: Output,
                args: ['reachEnd']
            }], s_realIndexChange: [{
                type: Output,
                args: ['realIndexChange']
            }], s_resize: [{
                type: Output,
                args: ['resize']
            }], s_scroll: [{
                type: Output,
                args: ['scroll']
            }], s_scrollbarDragEnd: [{
                type: Output,
                args: ['scrollbarDragEnd']
            }], s_scrollbarDragMove: [{
                type: Output,
                args: ['scrollbarDragMove']
            }], s_scrollbarDragStart: [{
                type: Output,
                args: ['scrollbarDragStart']
            }], s_setTransition: [{
                type: Output,
                args: ['setTransition']
            }], s_setTranslate: [{
                type: Output,
                args: ['setTranslate']
            }], s_slideChange: [{
                type: Output,
                args: ['slideChange']
            }], s_slideChangeTransitionEnd: [{
                type: Output,
                args: ['slideChangeTransitionEnd']
            }], s_slideChangeTransitionStart: [{
                type: Output,
                args: ['slideChangeTransitionStart']
            }], s_slideNextTransitionEnd: [{
                type: Output,
                args: ['slideNextTransitionEnd']
            }], s_slideNextTransitionStart: [{
                type: Output,
                args: ['slideNextTransitionStart']
            }], s_slidePrevTransitionEnd: [{
                type: Output,
                args: ['slidePrevTransitionEnd']
            }], s_slidePrevTransitionStart: [{
                type: Output,
                args: ['slidePrevTransitionStart']
            }], s_slideResetTransitionStart: [{
                type: Output,
                args: ['slideResetTransitionStart']
            }], s_slideResetTransitionEnd: [{
                type: Output,
                args: ['slideResetTransitionEnd']
            }], s_sliderMove: [{
                type: Output,
                args: ['sliderMove']
            }], s_sliderFirstMove: [{
                type: Output,
                args: ['sliderFirstMove']
            }], s_slidesLengthChange: [{
                type: Output,
                args: ['slidesLengthChange']
            }], s_slidesGridLengthChange: [{
                type: Output,
                args: ['slidesGridLengthChange']
            }], s_snapGridLengthChange: [{
                type: Output,
                args: ['snapGridLengthChange']
            }], s_snapIndexChange: [{
                type: Output,
                args: ['snapIndexChange']
            }], s_tap: [{
                type: Output,
                args: ['tap']
            }], s_toEdge: [{
                type: Output,
                args: ['toEdge']
            }], s_touchEnd: [{
                type: Output,
                args: ['touchEnd']
            }], s_touchMove: [{
                type: Output,
                args: ['touchMove']
            }], s_touchMoveOpposite: [{
                type: Output,
                args: ['touchMoveOpposite']
            }], s_touchStart: [{
                type: Output,
                args: ['touchStart']
            }], s_transitionEnd: [{
                type: Output,
                args: ['transitionEnd']
            }], s_transitionStart: [{
                type: Output,
                args: ['transitionStart']
            }], s_update: [{
                type: Output,
                args: ['update']
            }], s_zoomChange: [{
                type: Output,
                args: ['zoomChange']
            }], s_lock: [{
                type: Output,
                args: ['lock']
            }], s_unlock: [{
                type: Output,
                args: ['unlock']
            }], s_swiper: [{
                type: Output,
                args: ['swiper']
            }], indexChange: [{
                type: Output
            }], prevElRef: [{
                type: ViewChild,
                args: ['prevElRef', { static: false }]
            }], nextElRef: [{
                type: ViewChild,
                args: ['nextElRef', { static: false }]
            }], scrollbarElRef: [{
                type: ViewChild,
                args: ['scrollbarElRef', { static: false }]
            }], paginationElRef: [{
                type: ViewChild,
                args: ['paginationElRef', { static: false }]
            }], slidesEl: [{
                type: ContentChildren,
                args: [SwiperSlideDirective, { descendants: false, emitDistinctChangesOnly: true }]
            }], containerClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbmd1bGFyL3NyYy9zd2lwZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vc3JjL2FuZ3VsYXIvc3JjL3N3aXBlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxlQUFlLEVBRWYsWUFBWSxFQUNaLFdBQVcsRUFDWCxNQUFNLEVBQ04sS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEVBR1gsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixhQUFhO0FBQ2IsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsTUFBTSxFQUNOLFFBQVEsRUFDUixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLHFCQUFxQixFQUNyQixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFTdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQWNwRCxNQUFNLE9BQU8sZUFBZTtJQWdaMUIsWUFDVSxPQUFlLEVBQ2YsVUFBc0IsRUFDdEIsa0JBQXFDLEVBQ2hCLFdBQW1CO1FBSHhDLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDaEIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUF4VXpDLGVBQVUsR0FBZ0MsY0FBYyxDQUFDO1FBVXpELGlCQUFZLEdBQWtD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LEVBQUUsS0FBSyxFQUFFO2dCQU8vQyxRQUFRO3NCQURQLGVBQWU7dUJBQUMsb0JBQW9CLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLElBQUksRUFBRTtnQkF1QnRFLGdCQUFnQjtzQkFBckMsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUExBVEZPUk1fSUQsXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZ2V0UGFyYW1zIH0gZnJvbSAnLi91dGlscy9nZXQtcGFyYW1zJztcbmltcG9ydCB7IFN3aXBlclNsaWRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zd2lwZXItc2xpZGUuZGlyZWN0aXZlJztcbmltcG9ydCB7XG4gIGV4dGVuZCxcbiAgaXNPYmplY3QsXG4gIHNldFByb3BlcnR5LFxuICBpZ25vcmVOZ09uQ2hhbmdlcyxcbiAgY29lcmNlQm9vbGVhblByb3BlcnR5LFxuICBpc1Nob3dFbCxcbn0gZnJvbSAnLi91dGlscy91dGlscyc7XG5pbXBvcnQge1xuICBTd2lwZXJPcHRpb25zLFxuICBTd2lwZXJFdmVudHMsXG4gIE5hdmlnYXRpb25PcHRpb25zLFxuICBQYWdpbmF0aW9uT3B0aW9ucyxcbiAgU2Nyb2xsYmFyT3B0aW9ucyxcbiAgVmlydHVhbE9wdGlvbnMsXG59IGZyb20gJ3N3aXBlci90eXBlcyc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzd2lwZXIsIFtzd2lwZXJdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N3aXBlci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBzd2lwZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICBgLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTd2lwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBlbmFibGVkOiBTd2lwZXJPcHRpb25zWydlbmFibGVkJ107XG4gIEBJbnB1dCgpIG9uOiBTd2lwZXJPcHRpb25zWydvbiddO1xuICBASW5wdXQoKSBkaXJlY3Rpb246IFN3aXBlck9wdGlvbnNbJ2RpcmVjdGlvbiddO1xuICBASW5wdXQoKSB0b3VjaEV2ZW50c1RhcmdldDogU3dpcGVyT3B0aW9uc1sndG91Y2hFdmVudHNUYXJnZXQnXTtcbiAgQElucHV0KCkgaW5pdGlhbFNsaWRlOiBTd2lwZXJPcHRpb25zWydpbml0aWFsU2xpZGUnXTtcbiAgQElucHV0KCkgc3BlZWQ6IFN3aXBlck9wdGlvbnNbJ3NwZWVkJ107XG4gIEBJbnB1dCgpIGNzc01vZGU6IFN3aXBlck9wdGlvbnNbJ2Nzc01vZGUnXTtcbiAgQElucHV0KCkgdXBkYXRlT25XaW5kb3dSZXNpemU6IFN3aXBlck9wdGlvbnNbJ3VwZGF0ZU9uV2luZG93UmVzaXplJ107XG4gIEBJbnB1dCgpIHJlc2l6ZU9ic2VydmVyOiBTd2lwZXJPcHRpb25zWydyZXNpemVPYnNlcnZlciddO1xuICBASW5wdXQoKSBuZXN0ZWQ6IFN3aXBlck9wdGlvbnNbJ25lc3RlZCddO1xuICBASW5wdXQoKSBmb2N1c2FibGVFbGVtZW50czogU3dpcGVyT3B0aW9uc1snZm9jdXNhYmxlRWxlbWVudHMnXTtcbiAgQElucHV0KCkgd2lkdGg6IFN3aXBlck9wdGlvbnNbJ3dpZHRoJ107XG4gIEBJbnB1dCgpIGhlaWdodDogU3dpcGVyT3B0aW9uc1snaGVpZ2h0J107XG4gIEBJbnB1dCgpIHByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbjogU3dpcGVyT3B0aW9uc1sncHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uJ107XG4gIEBJbnB1dCgpIHVzZXJBZ2VudDogU3dpcGVyT3B0aW9uc1sndXNlckFnZW50J107XG4gIEBJbnB1dCgpIHVybDogU3dpcGVyT3B0aW9uc1sndXJsJ107XG4gIEBJbnB1dCgpIGVkZ2VTd2lwZURldGVjdGlvbjogYm9vbGVhbiB8IHN0cmluZztcbiAgQElucHV0KCkgZWRnZVN3aXBlVGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgpIGZyZWVNb2RlOiBTd2lwZXJPcHRpb25zWydmcmVlTW9kZSddO1xuICBASW5wdXQoKSBhdXRvSGVpZ2h0OiBTd2lwZXJPcHRpb25zWydhdXRvSGVpZ2h0J107XG4gIEBJbnB1dCgpIHNldFdyYXBwZXJTaXplOiBTd2lwZXJPcHRpb25zWydzZXRXcmFwcGVyU2l6ZSddO1xuICBASW5wdXQoKSB2aXJ0dWFsVHJhbnNsYXRlOiBTd2lwZXJPcHRpb25zWyd2aXJ0dWFsVHJhbnNsYXRlJ107XG4gIEBJbnB1dCgpIGVmZmVjdDogU3dpcGVyT3B0aW9uc1snZWZmZWN0J107XG4gIEBJbnB1dCgpIGJyZWFrcG9pbnRzOiBTd2lwZXJPcHRpb25zWydicmVha3BvaW50cyddO1xuICBASW5wdXQoKSBzcGFjZUJldHdlZW46IFN3aXBlck9wdGlvbnNbJ3NwYWNlQmV0d2VlbiddO1xuICBASW5wdXQoKSBzbGlkZXNQZXJWaWV3OiBTd2lwZXJPcHRpb25zWydzbGlkZXNQZXJWaWV3J107XG4gIEBJbnB1dCgpIGdyaWQ6IFN3aXBlck9wdGlvbnNbJ2dyaWQnXTtcbiAgQElucHV0KCkgc2xpZGVzUGVyR3JvdXA6IFN3aXBlck9wdGlvbnNbJ3NsaWRlc1Blckdyb3VwJ107XG4gIEBJbnB1dCgpIHNsaWRlc1Blckdyb3VwU2tpcDogU3dpcGVyT3B0aW9uc1snc2xpZGVzUGVyR3JvdXBTa2lwJ107XG4gIEBJbnB1dCgpIGNlbnRlcmVkU2xpZGVzOiBTd2lwZXJPcHRpb25zWydjZW50ZXJlZFNsaWRlcyddO1xuICBASW5wdXQoKSBjZW50ZXJlZFNsaWRlc0JvdW5kczogU3dpcGVyT3B0aW9uc1snY2VudGVyZWRTbGlkZXNCb3VuZHMnXTtcbiAgQElucHV0KCkgc2xpZGVzT2Zmc2V0QmVmb3JlOiBTd2lwZXJPcHRpb25zWydzbGlkZXNPZmZzZXRCZWZvcmUnXTtcbiAgQElucHV0KCkgc2xpZGVzT2Zmc2V0QWZ0ZXI6IFN3aXBlck9wdGlvbnNbJ3NsaWRlc09mZnNldEFmdGVyJ107XG4gIEBJbnB1dCgpIG5vcm1hbGl6ZVNsaWRlSW5kZXg6IFN3aXBlck9wdGlvbnNbJ25vcm1hbGl6ZVNsaWRlSW5kZXgnXTtcbiAgQElucHV0KCkgY2VudGVySW5zdWZmaWNpZW50U2xpZGVzOiBTd2lwZXJPcHRpb25zWydjZW50ZXJJbnN1ZmZpY2llbnRTbGlkZXMnXTtcbiAgQElucHV0KCkgd2F0Y2hPdmVyZmxvdzogU3dpcGVyT3B0aW9uc1snd2F0Y2hPdmVyZmxvdyddO1xuICBASW5wdXQoKSByb3VuZExlbmd0aHM6IFN3aXBlck9wdGlvbnNbJ3JvdW5kTGVuZ3RocyddO1xuICBASW5wdXQoKSB0b3VjaFJhdGlvOiBTd2lwZXJPcHRpb25zWyd0b3VjaFJhdGlvJ107XG4gIEBJbnB1dCgpIHRvdWNoQW5nbGU6IFN3aXBlck9wdGlvbnNbJ3RvdWNoQW5nbGUnXTtcbiAgQElucHV0KCkgc2ltdWxhdGVUb3VjaDogU3dpcGVyT3B0aW9uc1snc2ltdWxhdGVUb3VjaCddO1xuICBASW5wdXQoKSBzaG9ydFN3aXBlczogU3dpcGVyT3B0aW9uc1snc2hvcnRTd2lwZXMnXTtcbiAgQElucHV0KCkgbG9uZ1N3aXBlczogU3dpcGVyT3B0aW9uc1snbG9uZ1N3aXBlcyddO1xuICBASW5wdXQoKSBsb25nU3dpcGVzUmF0aW86IFN3aXBlck9wdGlvbnNbJ2xvbmdTd2lwZXNSYXRpbyddO1xuICBASW5wdXQoKSBsb25nU3dpcGVzTXM6IFN3aXBlck9wdGlvbnNbJ2xvbmdTd2lwZXNNcyddO1xuICBASW5wdXQoKSBmb2xsb3dGaW5nZXI6IFN3aXBlck9wdGlvbnNbJ2ZvbGxvd0ZpbmdlciddO1xuICBASW5wdXQoKSBhbGxvd1RvdWNoTW92ZTogU3dpcGVyT3B0aW9uc1snYWxsb3dUb3VjaE1vdmUnXTtcbiAgQElucHV0KCkgdGhyZXNob2xkOiBTd2lwZXJPcHRpb25zWyd0aHJlc2hvbGQnXTtcbiAgQElucHV0KCkgdG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uOiBTd2lwZXJPcHRpb25zWyd0b3VjaE1vdmVTdG9wUHJvcGFnYXRpb24nXTtcbiAgQElucHV0KCkgdG91Y2hTdGFydFByZXZlbnREZWZhdWx0OiBTd2lwZXJPcHRpb25zWyd0b3VjaFN0YXJ0UHJldmVudERlZmF1bHQnXTtcbiAgQElucHV0KCkgdG91Y2hTdGFydEZvcmNlUHJldmVudERlZmF1bHQ6IFN3aXBlck9wdGlvbnNbJ3RvdWNoU3RhcnRGb3JjZVByZXZlbnREZWZhdWx0J107XG4gIEBJbnB1dCgpIHRvdWNoUmVsZWFzZU9uRWRnZXM6IFN3aXBlck9wdGlvbnNbJ3RvdWNoUmVsZWFzZU9uRWRnZXMnXTtcbiAgQElucHV0KCkgdW5pcXVlTmF2RWxlbWVudHM6IFN3aXBlck9wdGlvbnNbJ3VuaXF1ZU5hdkVsZW1lbnRzJ107XG4gIEBJbnB1dCgpIHJlc2lzdGFuY2U6IFN3aXBlck9wdGlvbnNbJ3Jlc2lzdGFuY2UnXTtcbiAgQElucHV0KCkgcmVzaXN0YW5jZVJhdGlvOiBTd2lwZXJPcHRpb25zWydyZXNpc3RhbmNlUmF0aW8nXTtcbiAgQElucHV0KCkgd2F0Y2hTbGlkZXNQcm9ncmVzczogU3dpcGVyT3B0aW9uc1snd2F0Y2hTbGlkZXNQcm9ncmVzcyddO1xuICBASW5wdXQoKSBncmFiQ3Vyc29yOiBTd2lwZXJPcHRpb25zWydncmFiQ3Vyc29yJ107XG4gIEBJbnB1dCgpIHByZXZlbnRDbGlja3M6IFN3aXBlck9wdGlvbnNbJ3ByZXZlbnRDbGlja3MnXTtcbiAgQElucHV0KCkgcHJldmVudENsaWNrc1Byb3BhZ2F0aW9uOiBTd2lwZXJPcHRpb25zWydwcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24nXTtcbiAgQElucHV0KCkgc2xpZGVUb0NsaWNrZWRTbGlkZTogU3dpcGVyT3B0aW9uc1snc2xpZGVUb0NsaWNrZWRTbGlkZSddO1xuICBASW5wdXQoKSBwcmVsb2FkSW1hZ2VzOiBTd2lwZXJPcHRpb25zWydwcmVsb2FkSW1hZ2VzJ107XG4gIEBJbnB1dCgpIHVwZGF0ZU9uSW1hZ2VzUmVhZHk6IFN3aXBlck9wdGlvbnNbJ3VwZGF0ZU9uSW1hZ2VzUmVhZHknXTtcbiAgQElucHV0KCkgbG9vcDogU3dpcGVyT3B0aW9uc1snbG9vcCddO1xuICBASW5wdXQoKSBsb29wQWRkaXRpb25hbFNsaWRlczogU3dpcGVyT3B0aW9uc1snbG9vcEFkZGl0aW9uYWxTbGlkZXMnXTtcbiAgQElucHV0KCkgbG9vcGVkU2xpZGVzOiBTd2lwZXJPcHRpb25zWydsb29wZWRTbGlkZXMnXTtcbiAgQElucHV0KCkgbG9vcEZpbGxHcm91cFdpdGhCbGFuazogU3dpcGVyT3B0aW9uc1snbG9vcEZpbGxHcm91cFdpdGhCbGFuayddO1xuICBASW5wdXQoKSBsb29wUHJldmVudHNTbGlkZTogU3dpcGVyT3B0aW9uc1snbG9vcFByZXZlbnRzU2xpZGUnXTtcbiAgQElucHV0KCkgcmV3aW5kOiBTd2lwZXJPcHRpb25zWydyZXdpbmQnXTtcbiAgQElucHV0KCkgYWxsb3dTbGlkZVByZXY6IFN3aXBlck9wdGlvbnNbJ2FsbG93U2xpZGVQcmV2J107XG4gIEBJbnB1dCgpIGFsbG93U2xpZGVOZXh0OiBTd2lwZXJPcHRpb25zWydhbGxvd1NsaWRlTmV4dCddO1xuICBASW5wdXQoKSBzd2lwZUhhbmRsZXI6IFN3aXBlck9wdGlvbnNbJ3N3aXBlSGFuZGxlciddO1xuICBASW5wdXQoKSBub1N3aXBpbmc6IFN3aXBlck9wdGlvbnNbJ25vU3dpcGluZyddO1xuICBASW5wdXQoKSBub1N3aXBpbmdDbGFzczogU3dpcGVyT3B0aW9uc1snbm9Td2lwaW5nQ2xhc3MnXTtcbiAgQElucHV0KCkgbm9Td2lwaW5nU2VsZWN0b3I6IFN3aXBlck9wdGlvbnNbJ25vU3dpcGluZ1NlbGVjdG9yJ107XG4gIEBJbnB1dCgpIHBhc3NpdmVMaXN0ZW5lcnM6IFN3aXBlck9wdGlvbnNbJ3Bhc3NpdmVMaXN0ZW5lcnMnXTtcbiAgQElucHV0KCkgY29udGFpbmVyTW9kaWZpZXJDbGFzczogU3dpcGVyT3B0aW9uc1snY29udGFpbmVyTW9kaWZpZXJDbGFzcyddO1xuICBASW5wdXQoKSBzbGlkZUNsYXNzOiBTd2lwZXJPcHRpb25zWydzbGlkZUNsYXNzJ10gPSAnc3dpcGVyLXNsaWRlJztcbiAgQElucHV0KCkgc2xpZGVCbGFua0NsYXNzOiBTd2lwZXJPcHRpb25zWydzbGlkZUJsYW5rQ2xhc3MnXTtcbiAgQElucHV0KCkgc2xpZGVBY3RpdmVDbGFzczogU3dpcGVyT3B0aW9uc1snc2xpZGVBY3RpdmVDbGFzcyddO1xuICBASW5wdXQoKSBzbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzOiBTd2lwZXJPcHRpb25zWydzbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzJ107XG4gIEBJbnB1dCgpIHNsaWRlVmlzaWJsZUNsYXNzOiBTd2lwZXJPcHRpb25zWydzbGlkZVZpc2libGVDbGFzcyddO1xuICBASW5wdXQoKSBzbGlkZUR1cGxpY2F0ZUNsYXNzOiBTd2lwZXJPcHRpb25zWydzbGlkZUR1cGxpY2F0ZUNsYXNzJ107XG4gIEBJbnB1dCgpIHNsaWRlTmV4dENsYXNzOiBTd2lwZXJPcHRpb25zWydzbGlkZU5leHRDbGFzcyddO1xuICBASW5wdXQoKSBzbGlkZUR1cGxpY2F0ZU5leHRDbGFzczogU3dpcGVyT3B0aW9uc1snc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MnXTtcbiAgQElucHV0KCkgc2xpZGVQcmV2Q2xhc3M6IFN3aXBlck9wdGlvbnNbJ3NsaWRlUHJldkNsYXNzJ107XG4gIEBJbnB1dCgpIHNsaWRlRHVwbGljYXRlUHJldkNsYXNzOiBTd2lwZXJPcHRpb25zWydzbGlkZUR1cGxpY2F0ZVByZXZDbGFzcyddO1xuICBASW5wdXQoKSB3cmFwcGVyQ2xhc3M6IFN3aXBlck9wdGlvbnNbJ3dyYXBwZXJDbGFzcyddID0gJ3N3aXBlci13cmFwcGVyJztcbiAgQElucHV0KCkgcnVuQ2FsbGJhY2tzT25Jbml0OiBTd2lwZXJPcHRpb25zWydydW5DYWxsYmFja3NPbkluaXQnXTtcbiAgQElucHV0KCkgb2JzZXJ2ZVBhcmVudHM6IFN3aXBlck9wdGlvbnNbJ29ic2VydmVQYXJlbnRzJ107XG4gIEBJbnB1dCgpIG9ic2VydmVTbGlkZUNoaWxkcmVuOiBTd2lwZXJPcHRpb25zWydvYnNlcnZlU2xpZGVDaGlsZHJlbiddO1xuICBASW5wdXQoKSBhMTF5OiBTd2lwZXJPcHRpb25zWydhMTF5J107XG4gIEBJbnB1dCgpIGF1dG9wbGF5OiBTd2lwZXJPcHRpb25zWydhdXRvcGxheSddO1xuICBASW5wdXQoKSBjb250cm9sbGVyOiBTd2lwZXJPcHRpb25zWydjb250cm9sbGVyJ107XG4gIEBJbnB1dCgpIGNvdmVyZmxvd0VmZmVjdDogU3dpcGVyT3B0aW9uc1snY292ZXJmbG93RWZmZWN0J107XG4gIEBJbnB1dCgpIGN1YmVFZmZlY3Q6IFN3aXBlck9wdGlvbnNbJ2N1YmVFZmZlY3QnXTtcbiAgQElucHV0KCkgZmFkZUVmZmVjdDogU3dpcGVyT3B0aW9uc1snZmFkZUVmZmVjdCddO1xuICBASW5wdXQoKSBmbGlwRWZmZWN0OiBTd2lwZXJPcHRpb25zWydmbGlwRWZmZWN0J107XG4gIEBJbnB1dCgpIGNyZWF0aXZlRWZmZWN0OiBTd2lwZXJPcHRpb25zWydjcmVhdGl2ZUVmZmVjdCddO1xuICBASW5wdXQoKSBjYXJkc0VmZmVjdDogU3dpcGVyT3B0aW9uc1snY2FyZHNFZmZlY3QnXTtcbiAgQElucHV0KCkgaGFzaE5hdmlnYXRpb246IFN3aXBlck9wdGlvbnNbJ2hhc2hOYXZpZ2F0aW9uJ107XG4gIEBJbnB1dCgpIGhpc3Rvcnk6IFN3aXBlck9wdGlvbnNbJ2hpc3RvcnknXTtcbiAgQElucHV0KCkga2V5Ym9hcmQ6IFN3aXBlck9wdGlvbnNbJ2tleWJvYXJkJ107XG4gIEBJbnB1dCgpIGxhenk6IFN3aXBlck9wdGlvbnNbJ2xhenknXTtcbiAgQElucHV0KCkgbW91c2V3aGVlbDogU3dpcGVyT3B0aW9uc1snbW91c2V3aGVlbCddO1xuICBASW5wdXQoKSBwYXJhbGxheDogU3dpcGVyT3B0aW9uc1sncGFyYWxsYXgnXTtcbiAgQElucHV0KCkgdGh1bWJzOiBTd2lwZXJPcHRpb25zWyd0aHVtYnMnXTtcbiAgQElucHV0KCkgem9vbTogU3dpcGVyT3B0aW9uc1snem9vbSddO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgbmF2aWdhdGlvbih2YWwpIHtcbiAgICBjb25zdCBjdXJyZW50TmV4dCA9XG4gICAgICB0eXBlb2YgdGhpcy5fbmF2aWdhdGlvbiAhPT0gJ2Jvb2xlYW4nICYmIHRoaXMuX25hdmlnYXRpb24gIT09ICcnXG4gICAgICAgID8gdGhpcy5fbmF2aWdhdGlvbj8ubmV4dEVsXG4gICAgICAgIDogbnVsbDtcbiAgICBjb25zdCBjdXJyZW50UHJldiA9XG4gICAgICB0eXBlb2YgdGhpcy5fbmF2aWdhdGlvbiAhPT0gJ2Jvb2xlYW4nICYmIHRoaXMuX25hdmlnYXRpb24gIT09ICcnXG4gICAgICAgID8gdGhpcy5fbmF2aWdhdGlvbj8ucHJldkVsXG4gICAgICAgIDogbnVsbDtcbiAgICB0aGlzLl9uYXZpZ2F0aW9uID0gc2V0UHJvcGVydHkodmFsLCB7XG4gICAgICBuZXh0RWw6IGN1cnJlbnROZXh0IHx8IG51bGwsXG4gICAgICBwcmV2RWw6IGN1cnJlbnRQcmV2IHx8IG51bGwsXG4gICAgfSk7XG4gICAgdGhpcy5zaG93TmF2aWdhdGlvbiA9ICEoXG4gICAgICBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsKSAhPT0gdHJ1ZSB8fFxuICAgICAgKHRoaXMuX25hdmlnYXRpb24gJiZcbiAgICAgICAgdHlwZW9mIHRoaXMuX25hdmlnYXRpb24gIT09ICdib29sZWFuJyAmJlxuICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uLnByZXZFbCAhPT0gdGhpcy5fcHJldkVsUmVmPy5uYXRpdmVFbGVtZW50ICYmXG4gICAgICAgICh0aGlzLl9uYXZpZ2F0aW9uLnByZXZFbCAhPT0gbnVsbCB8fCB0aGlzLl9uYXZpZ2F0aW9uLm5leHRFbCAhPT0gbnVsbCkgJiZcbiAgICAgICAgKHR5cGVvZiB0aGlzLl9uYXZpZ2F0aW9uLm5leHRFbCA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICB0eXBlb2YgdGhpcy5fbmF2aWdhdGlvbi5wcmV2RWwgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgdHlwZW9mIHRoaXMuX25hdmlnYXRpb24ubmV4dEVsID09PSAnb2JqZWN0JyB8fFxuICAgICAgICAgIHR5cGVvZiB0aGlzLl9uYXZpZ2F0aW9uLnByZXZFbCA9PT0gJ29iamVjdCcpKVxuICAgICk7XG4gIH1cbiAgZ2V0IG5hdmlnYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRpb247XG4gIH1cbiAgcHJpdmF0ZSBfbmF2aWdhdGlvbjogTmF2aWdhdGlvbk9wdGlvbnMgfCBib29sZWFuIHwgJyc7XG4gIHNob3dOYXZpZ2F0aW9uOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBzZXQgcGFnaW5hdGlvbih2YWwpIHtcbiAgICBjb25zdCBjdXJyZW50ID1cbiAgICAgIHR5cGVvZiB0aGlzLl9wYWdpbmF0aW9uICE9PSAnYm9vbGVhbicgJiYgdGhpcy5fcGFnaW5hdGlvbiAhPT0gJydcbiAgICAgICAgPyB0aGlzLl9wYWdpbmF0aW9uPy5lbFxuICAgICAgICA6IG51bGw7XG4gICAgdGhpcy5fcGFnaW5hdGlvbiA9IHNldFByb3BlcnR5KHZhbCwge1xuICAgICAgZWw6IGN1cnJlbnQgfHwgbnVsbCxcbiAgICB9KTtcbiAgICB0aGlzLnNob3dQYWdpbmF0aW9uID0gaXNTaG93RWwodmFsLCB0aGlzLl9wYWdpbmF0aW9uLCB0aGlzLl9wYWdpbmF0aW9uRWxSZWYpO1xuICB9XG4gIGdldCBwYWdpbmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wYWdpbmF0aW9uO1xuICB9XG4gIHByaXZhdGUgX3BhZ2luYXRpb246IFBhZ2luYXRpb25PcHRpb25zIHwgYm9vbGVhbiB8ICcnO1xuICBzaG93UGFnaW5hdGlvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgc2V0IHNjcm9sbGJhcih2YWwpIHtcbiAgICBjb25zdCBjdXJyZW50ID1cbiAgICAgIHR5cGVvZiB0aGlzLl9zY3JvbGxiYXIgIT09ICdib29sZWFuJyAmJiB0aGlzLl9zY3JvbGxiYXIgIT09ICcnID8gdGhpcy5fc2Nyb2xsYmFyPy5lbCA6IG51bGw7XG4gICAgdGhpcy5fc2Nyb2xsYmFyID0gc2V0UHJvcGVydHkodmFsLCB7XG4gICAgICBlbDogY3VycmVudCB8fCBudWxsLFxuICAgIH0pO1xuICAgIHRoaXMuc2hvd1Njcm9sbGJhciA9IGlzU2hvd0VsKHZhbCwgdGhpcy5fc2Nyb2xsYmFyLCB0aGlzLl9zY3JvbGxiYXJFbFJlZik7XG4gIH1cbiAgZ2V0IHNjcm9sbGJhcigpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsYmFyO1xuICB9XG4gIHByaXZhdGUgX3Njcm9sbGJhcjogU2Nyb2xsYmFyT3B0aW9ucyB8IGJvb2xlYW4gfCAnJztcbiAgc2hvd1Njcm9sbGJhcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgc2V0IHZpcnR1YWwodmFsKSB7XG4gICAgdGhpcy5fdmlydHVhbCA9IHNldFByb3BlcnR5KHZhbCk7XG4gIH1cbiAgZ2V0IHZpcnR1YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWw7XG4gIH1cbiAgcHJpdmF0ZSBfdmlydHVhbDogVmlydHVhbE9wdGlvbnMgfCBib29sZWFuIHwgJyc7XG5cbiAgQElucHV0KClcbiAgc2V0IGluZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zb2xlLndhcm4oJ2BbKGluZGV4KV1gIHByb3AgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHVwY29taW5nIHZlcnNpb25zJyk7XG4gICAgdGhpcy5zZXRJbmRleChpbmRleCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyh2YWw6IFN3aXBlck9wdGlvbnMpIHtcbiAgICB0aGlzLnVwZGF0ZVN3aXBlcih2YWwpO1xuICAgIGNvbnN0IHsgcGFyYW1zIH0gPSBnZXRQYXJhbXModmFsKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHBhcmFtcyk7XG4gIH1cbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ19iZWZvcmVCcmVha3BvaW50Jykgc19fYmVmb3JlQnJlYWtwb2ludDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snX2JlZm9yZUJyZWFrcG9pbnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ19jb250YWluZXJDbGFzc2VzJykgc19fY29udGFpbmVyQ2xhc3NlczogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snX2NvbnRhaW5lckNsYXNzZXMnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ19zbGlkZUNsYXNzJykgc19fc2xpZGVDbGFzczogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snX3NsaWRlQ2xhc3MnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ19zd2lwZXInKSBzX19zd2lwZXI6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ19zd2lwZXInXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2FjdGl2ZUluZGV4Q2hhbmdlJykgc19hY3RpdmVJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snYWN0aXZlSW5kZXhDaGFuZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2FmdGVySW5pdCcpIHNfYWZ0ZXJJbml0OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydhZnRlckluaXQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2F1dG9wbGF5Jykgc19hdXRvcGxheTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snYXV0b3BsYXknXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2F1dG9wbGF5U3RhcnQnKSBzX2F1dG9wbGF5U3RhcnQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2F1dG9wbGF5U3RhcnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2F1dG9wbGF5U3RvcCcpIHNfYXV0b3BsYXlTdG9wOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydhdXRvcGxheVN0b3AnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2JlZm9yZURlc3Ryb3knKSBzX2JlZm9yZURlc3Ryb3k6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2JlZm9yZURlc3Ryb3knXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2JlZm9yZUluaXQnKSBzX2JlZm9yZUluaXQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2JlZm9yZUluaXQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2JlZm9yZUxvb3BGaXgnKSBzX2JlZm9yZUxvb3BGaXg6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2JlZm9yZUxvb3BGaXgnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2JlZm9yZVJlc2l6ZScpIHNfYmVmb3JlUmVzaXplOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydiZWZvcmVSZXNpemUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2JlZm9yZVNsaWRlQ2hhbmdlU3RhcnQnKSBzX2JlZm9yZVNsaWRlQ2hhbmdlU3RhcnQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2JlZm9yZVNsaWRlQ2hhbmdlU3RhcnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2JlZm9yZVRyYW5zaXRpb25TdGFydCcpIHNfYmVmb3JlVHJhbnNpdGlvblN0YXJ0OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydiZWZvcmVUcmFuc2l0aW9uU3RhcnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2JyZWFrcG9pbnQnKSBzX2JyZWFrcG9pbnQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2JyZWFrcG9pbnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2NoYW5nZURpcmVjdGlvbicpIHNfY2hhbmdlRGlyZWN0aW9uOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydjaGFuZ2VEaXJlY3Rpb24nXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2NsaWNrJykgc19jbGljazogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snY2xpY2snXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2RvdWJsZVRhcCcpIHNfZG91YmxlVGFwOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydkb3VibGVUYXAnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2RvdWJsZUNsaWNrJykgc19kb3VibGVDbGljazogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snZG91YmxlQ2xpY2snXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2Rlc3Ryb3knKSBzX2Rlc3Ryb3k6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2Rlc3Ryb3knXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2Zyb21FZGdlJykgc19mcm9tRWRnZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snZnJvbUVkZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2hhc2hDaGFuZ2UnKSBzX2hhc2hDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2hhc2hDaGFuZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2hhc2hTZXQnKSBzX2hhc2hTZXQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2hhc2hTZXQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2ltYWdlc1JlYWR5Jykgc19pbWFnZXNSZWFkeTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snaW1hZ2VzUmVhZHknXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2luaXQnKSBzX2luaXQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2luaXQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2tleVByZXNzJykgc19rZXlQcmVzczogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sna2V5UHJlc3MnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2xhenlJbWFnZUxvYWQnKSBzX2xhenlJbWFnZUxvYWQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2xhenlJbWFnZUxvYWQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2xhenlJbWFnZVJlYWR5Jykgc19sYXp5SW1hZ2VSZWFkeTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snbGF6eUltYWdlUmVhZHknXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2xvb3BGaXgnKSBzX2xvb3BGaXg6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2xvb3BGaXgnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ21vbWVudHVtQm91bmNlJykgc19tb21lbnR1bUJvdW5jZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snbW9tZW50dW1Cb3VuY2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ25hdmlnYXRpb25IaWRlJykgc19uYXZpZ2F0aW9uSGlkZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snbmF2aWdhdGlvbkhpZGUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ25hdmlnYXRpb25TaG93Jykgc19uYXZpZ2F0aW9uU2hvdzogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snbmF2aWdhdGlvblNob3cnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ29ic2VydmVyVXBkYXRlJykgc19vYnNlcnZlclVwZGF0ZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snb2JzZXJ2ZXJVcGRhdGUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ29yaWVudGF0aW9uY2hhbmdlJykgc19vcmllbnRhdGlvbmNoYW5nZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snb3JpZW50YXRpb25jaGFuZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3BhZ2luYXRpb25IaWRlJykgc19wYWdpbmF0aW9uSGlkZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sncGFnaW5hdGlvbkhpZGUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3BhZ2luYXRpb25SZW5kZXInKSBzX3BhZ2luYXRpb25SZW5kZXI6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3BhZ2luYXRpb25SZW5kZXInXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3BhZ2luYXRpb25TaG93Jykgc19wYWdpbmF0aW9uU2hvdzogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sncGFnaW5hdGlvblNob3cnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3BhZ2luYXRpb25VcGRhdGUnKSBzX3BhZ2luYXRpb25VcGRhdGU6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3BhZ2luYXRpb25VcGRhdGUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3Byb2dyZXNzJykgc19wcm9ncmVzczogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sncHJvZ3Jlc3MnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3JlYWNoQmVnaW5uaW5nJykgc19yZWFjaEJlZ2lubmluZzogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sncmVhY2hCZWdpbm5pbmcnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3JlYWNoRW5kJykgc19yZWFjaEVuZDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sncmVhY2hFbmQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3JlYWxJbmRleENoYW5nZScpIHNfcmVhbEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydyZWFsSW5kZXhDaGFuZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3Jlc2l6ZScpIHNfcmVzaXplOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydyZXNpemUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3Njcm9sbCcpIHNfc2Nyb2xsOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzY3JvbGwnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3Njcm9sbGJhckRyYWdFbmQnKSBzX3Njcm9sbGJhckRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3Njcm9sbGJhckRyYWdFbmQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3Njcm9sbGJhckRyYWdNb3ZlJykgc19zY3JvbGxiYXJEcmFnTW92ZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2Nyb2xsYmFyRHJhZ01vdmUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3Njcm9sbGJhckRyYWdTdGFydCcpIHNfc2Nyb2xsYmFyRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzY3JvbGxiYXJEcmFnU3RhcnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NldFRyYW5zaXRpb24nKSBzX3NldFRyYW5zaXRpb246IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NldFRyYW5zaXRpb24nXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NldFRyYW5zbGF0ZScpIHNfc2V0VHJhbnNsYXRlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzZXRUcmFuc2xhdGUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlQ2hhbmdlJykgc19zbGlkZUNoYW5nZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2xpZGVDaGFuZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZCcpIHNfc2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlQ2hhbmdlVHJhbnNpdGlvblN0YXJ0Jykgc19zbGlkZUNoYW5nZVRyYW5zaXRpb25TdGFydDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2xpZGVDaGFuZ2VUcmFuc2l0aW9uU3RhcnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlTmV4dFRyYW5zaXRpb25FbmQnKSBzX3NsaWRlTmV4dFRyYW5zaXRpb25FbmQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NsaWRlTmV4dFRyYW5zaXRpb25FbmQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlTmV4dFRyYW5zaXRpb25TdGFydCcpIHNfc2xpZGVOZXh0VHJhbnNpdGlvblN0YXJ0OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbGlkZU5leHRUcmFuc2l0aW9uU3RhcnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlUHJldlRyYW5zaXRpb25FbmQnKSBzX3NsaWRlUHJldlRyYW5zaXRpb25FbmQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NsaWRlUHJldlRyYW5zaXRpb25FbmQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlUHJldlRyYW5zaXRpb25TdGFydCcpIHNfc2xpZGVQcmV2VHJhbnNpdGlvblN0YXJ0OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbGlkZVByZXZUcmFuc2l0aW9uU3RhcnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlUmVzZXRUcmFuc2l0aW9uU3RhcnQnKSBzX3NsaWRlUmVzZXRUcmFuc2l0aW9uU3RhcnQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NsaWRlUmVzZXRUcmFuc2l0aW9uU3RhcnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlUmVzZXRUcmFuc2l0aW9uRW5kJykgc19zbGlkZVJlc2V0VHJhbnNpdGlvbkVuZDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2xpZGVSZXNldFRyYW5zaXRpb25FbmQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlck1vdmUnKSBzX3NsaWRlck1vdmU6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NsaWRlck1vdmUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlckZpcnN0TW92ZScpIHNfc2xpZGVyRmlyc3RNb3ZlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbGlkZXJGaXJzdE1vdmUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlc0xlbmd0aENoYW5nZScpIHNfc2xpZGVzTGVuZ3RoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbGlkZXNMZW5ndGhDaGFuZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NsaWRlc0dyaWRMZW5ndGhDaGFuZ2UnKSBzX3NsaWRlc0dyaWRMZW5ndGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NsaWRlc0dyaWRMZW5ndGhDaGFuZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NuYXBHcmlkTGVuZ3RoQ2hhbmdlJykgc19zbmFwR3JpZExlbmd0aENoYW5nZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc25hcEdyaWRMZW5ndGhDaGFuZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3NuYXBJbmRleENoYW5nZScpIHNfc25hcEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbmFwSW5kZXhDaGFuZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3RhcCcpIHNfdGFwOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWyd0YXAnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3RvRWRnZScpIHNfdG9FZGdlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWyd0b0VkZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3RvdWNoRW5kJykgc190b3VjaEVuZDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sndG91Y2hFbmQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3RvdWNoTW92ZScpIHNfdG91Y2hNb3ZlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWyd0b3VjaE1vdmUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3RvdWNoTW92ZU9wcG9zaXRlJykgc190b3VjaE1vdmVPcHBvc2l0ZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sndG91Y2hNb3ZlT3Bwb3NpdGUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3RvdWNoU3RhcnQnKSBzX3RvdWNoU3RhcnQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3RvdWNoU3RhcnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3RyYW5zaXRpb25FbmQnKSBzX3RyYW5zaXRpb25FbmQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3RyYW5zaXRpb25FbmQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3RyYW5zaXRpb25TdGFydCcpIHNfdHJhbnNpdGlvblN0YXJ0OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWyd0cmFuc2l0aW9uU3RhcnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3VwZGF0ZScpIHNfdXBkYXRlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWyd1cGRhdGUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3pvb21DaGFuZ2UnKSBzX3pvb21DaGFuZ2U6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3pvb21DaGFuZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ2xvY2snKSBzX2xvY2s6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2xvY2snXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3VubG9jaycpIHNfdW5sb2NrOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWyd1bmxvY2snXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIEBPdXRwdXQoJ3N3aXBlcicpIHNfc3dpcGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKSBpbmRleENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3ByZXZFbFJlZicsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBzZXQgcHJldkVsUmVmKGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fcHJldkVsUmVmID0gZWw7XG4gICAgdGhpcy5fc2V0RWxlbWVudChlbCwgdGhpcy5uYXZpZ2F0aW9uLCAnbmF2aWdhdGlvbicsICdwcmV2RWwnKTtcbiAgfVxuICBfcHJldkVsUmVmOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCduZXh0RWxSZWYnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgc2V0IG5leHRFbFJlZihlbDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuX25leHRFbFJlZiA9IGVsO1xuICAgIHRoaXMuX3NldEVsZW1lbnQoZWwsIHRoaXMubmF2aWdhdGlvbiwgJ25hdmlnYXRpb24nLCAnbmV4dEVsJyk7XG4gIH1cbiAgX25leHRFbFJlZjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2Nyb2xsYmFyRWxSZWYnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgc2V0IHNjcm9sbGJhckVsUmVmKGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fc2Nyb2xsYmFyRWxSZWYgPSBlbDtcbiAgICB0aGlzLl9zZXRFbGVtZW50KGVsLCB0aGlzLnNjcm9sbGJhciwgJ3Njcm9sbGJhcicpO1xuICB9XG4gIF9zY3JvbGxiYXJFbFJlZjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgncGFnaW5hdGlvbkVsUmVmJywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHNldCBwYWdpbmF0aW9uRWxSZWYoZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLl9wYWdpbmF0aW9uRWxSZWYgPSBlbDtcbiAgICB0aGlzLl9zZXRFbGVtZW50KGVsLCB0aGlzLnBhZ2luYXRpb24sICdwYWdpbmF0aW9uJyk7XG4gIH1cbiAgX3BhZ2luYXRpb25FbFJlZjogRWxlbWVudFJlZjtcbiAgQENvbnRlbnRDaGlsZHJlbihTd2lwZXJTbGlkZURpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogZmFsc2UsIGVtaXREaXN0aW5jdENoYW5nZXNPbmx5OiB0cnVlIH0pXG4gIHNsaWRlc0VsOiBRdWVyeUxpc3Q8U3dpcGVyU2xpZGVEaXJlY3RpdmU+O1xuICBwcml2YXRlIHNsaWRlczogU3dpcGVyU2xpZGVEaXJlY3RpdmVbXTtcblxuICBwcmVwZW5kU2xpZGVzOiBPYnNlcnZhYmxlPFN3aXBlclNsaWRlRGlyZWN0aXZlW10+O1xuICBhcHBlbmRTbGlkZXM6IE9ic2VydmFibGU8U3dpcGVyU2xpZGVEaXJlY3RpdmVbXT47XG5cbiAgc3dpcGVyUmVmOiBTd2lwZXI7XG4gIHJlYWRvbmx5IF9hY3RpdmVTbGlkZXMgPSBuZXcgU3ViamVjdDxTd2lwZXJTbGlkZURpcmVjdGl2ZVtdPigpO1xuXG4gIGdldCBhY3RpdmVTbGlkZXMoKSB7XG4gICAgaWYgKHRoaXMudmlydHVhbCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZVNsaWRlcztcbiAgICB9XG4gICAgcmV0dXJuIG9mKHRoaXMuc2xpZGVzKTtcbiAgfVxuXG4gIGdldCB6b29tQ29udGFpbmVyQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuem9vbSAmJiB0eXBlb2YgdGhpcy56b29tICE9PSAnYm9vbGVhbidcbiAgICAgID8gdGhpcy56b29tLmNvbnRhaW5lckNsYXNzXG4gICAgICA6ICdzd2lwZXItem9vbS1jb250YWluZXInO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGNvbnRhaW5lckNsYXNzZXM6IHN0cmluZyA9ICdzd2lwZXInO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgX3BsYXRmb3JtSWQ6IE9iamVjdCxcbiAgKSB7fVxuXG4gIHByaXZhdGUgX3NldEVsZW1lbnQoZWw6IEVsZW1lbnRSZWYsIHJlZjogYW55LCB1cGRhdGU6IHN0cmluZywga2V5ID0gJ2VsJykge1xuICAgIGlmICghcmVmIHx8ICFlbCkgcmV0dXJuO1xuICAgIGlmIChlbC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICBpZiAocmVmW2tleV0gPT09IGVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmVmW2tleV0gPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgIH1cbiAgICBjb25zdCB1cGRhdGVPYmo6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG4gICAgdXBkYXRlT2JqW3VwZGF0ZV0gPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlSW5pdFN3aXBlcih1cGRhdGVPYmopO1xuICB9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgcGFyYW1zIH0gPSBnZXRQYXJhbXModGhpcyk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwYXJhbXMpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNoaWxkcmVuU2xpZGVzSW5pdCgpO1xuICAgIHRoaXMuaW5pdFN3aXBlcigpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc19zd2lwZXIuZW1pdCh0aGlzLnN3aXBlclJlZik7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNoaWxkcmVuU2xpZGVzSW5pdCgpIHtcbiAgICB0aGlzLnNsaWRlc0NoYW5nZXModGhpcy5zbGlkZXNFbCk7XG4gICAgdGhpcy5zbGlkZXNFbC5jaGFuZ2VzLnN1YnNjcmliZSh0aGlzLnNsaWRlc0NoYW5nZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBzbGlkZXNDaGFuZ2VzID0gKHZhbDogUXVlcnlMaXN0PFN3aXBlclNsaWRlRGlyZWN0aXZlPikgPT4ge1xuICAgIHRoaXMuc2xpZGVzID0gdmFsLm1hcCgoc2xpZGU6IFN3aXBlclNsaWRlRGlyZWN0aXZlLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBzbGlkZS5zbGlkZUluZGV4ID0gaW5kZXg7XG4gICAgICBzbGlkZS5jbGFzc05hbWVzID0gdGhpcy5zbGlkZUNsYXNzIHx8ICcnO1xuICAgICAgcmV0dXJuIHNsaWRlO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLmxvb3AgJiYgIXRoaXMubG9vcGVkU2xpZGVzKSB7XG4gICAgICB0aGlzLmNhbGNMb29wZWRTbGlkZXMoKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnZpcnR1YWwpIHtcbiAgICAgIGlmICh0aGlzLmxvb3BlZFNsaWRlcykge1xuICAgICAgICB0aGlzLnByZXBlbmRTbGlkZXMgPSBvZih0aGlzLnNsaWRlcy5zbGljZSh0aGlzLnNsaWRlcy5sZW5ndGggLSB0aGlzLmxvb3BlZFNsaWRlcykpO1xuICAgICAgICB0aGlzLmFwcGVuZFNsaWRlcyA9IG9mKHRoaXMuc2xpZGVzLnNsaWNlKDAsIHRoaXMubG9vcGVkU2xpZGVzKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnN3aXBlclJlZiAmJiB0aGlzLnN3aXBlclJlZi52aXJ0dWFsKSB7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLnN3aXBlclJlZi52aXJ0dWFsLnNsaWRlcyA9IHRoaXMuc2xpZGVzO1xuICAgICAgICB0aGlzLnN3aXBlclJlZi52aXJ0dWFsLnVwZGF0ZSh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH07XG5cbiAgZ2V0IGlzU3dpcGVyQWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLnN3aXBlclJlZiAmJiAhdGhpcy5zd2lwZXJSZWYuZGVzdHJveWVkO1xuICB9XG5cbiAgaW5pdFN3aXBlcigpIHtcbiAgICBjb25zdCB7IHBhcmFtczogc3dpcGVyUGFyYW1zLCBwYXNzZWRQYXJhbXMgfSA9IGdldFBhcmFtcyh0aGlzKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHN3aXBlclBhcmFtcyk7XG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHN3aXBlclBhcmFtcy5pbml0ID0gZmFsc2U7XG4gICAgICBpZiAoIXN3aXBlclBhcmFtcy52aXJ0dWFsKSB7XG4gICAgICAgIHN3aXBlclBhcmFtcy5vYnNlcnZlciA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHN3aXBlclBhcmFtcy5vbkFueSA9IChldmVudE5hbWU6IGtleW9mIFN3aXBlckNvbXBvbmVudCwgLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgY29uc3QgZW1pdHRlciA9IHRoaXNbKCdzXycgKyBldmVudE5hbWUpIGFzIGtleW9mIFN3aXBlckNvbXBvbmVudF0gYXMgRXZlbnRFbWl0dGVyPGFueT47XG4gICAgICAgIGlmIChlbWl0dGVyKSB7XG4gICAgICAgICAgZW1pdHRlci5lbWl0KC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3QgX3NsaWRlQ2xhc3NlczogU3dpcGVyRXZlbnRzWydfc2xpZGVDbGFzc2VzJ10gPSAoXywgdXBkYXRlZCkgPT4ge1xuICAgICAgICB1cGRhdGVkLmZvckVhY2goKHsgc2xpZGVFbCwgY2xhc3NOYW1lcyB9LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGFJbmRleCA9IHNsaWRlRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xuICAgICAgICAgIGNvbnN0IHNsaWRlSW5kZXggPSBkYXRhSW5kZXggPyBwYXJzZUludChkYXRhSW5kZXgpIDogaW5kZXg7XG4gICAgICAgICAgaWYgKHRoaXMudmlydHVhbCkge1xuICAgICAgICAgICAgY29uc3QgdmlydHVhbFNsaWRlID0gdGhpcy5zbGlkZXMuZmluZCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbS52aXJ0dWFsSW5kZXggJiYgaXRlbS52aXJ0dWFsSW5kZXggPT09IHNsaWRlSW5kZXg7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh2aXJ0dWFsU2xpZGUpIHtcbiAgICAgICAgICAgICAgdmlydHVhbFNsaWRlLmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuc2xpZGVzW3NsaWRlSW5kZXhdKSB7XG4gICAgICAgICAgICB0aGlzLnNsaWRlc1tzbGlkZUluZGV4XS5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9O1xuICAgICAgY29uc3QgX2NvbnRhaW5lckNsYXNzZXM6IFN3aXBlckV2ZW50c1snX2NvbnRhaW5lckNsYXNzZXMnXSA9IChfLCBjbGFzc2VzKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY29udGFpbmVyQ2xhc3NlcyA9IGNsYXNzZXM7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIE9iamVjdC5hc3NpZ24oc3dpcGVyUGFyYW1zLm9uLCB7XG4gICAgICAgIF9jb250YWluZXJDbGFzc2VzLFxuICAgICAgICBfc2xpZGVDbGFzc2VzLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBzd2lwZXJSZWYgPSBuZXcgU3dpcGVyKHN3aXBlclBhcmFtcyk7XG4gICAgICBzd2lwZXJSZWYubG9vcENyZWF0ZSA9ICgpID0+IHt9O1xuICAgICAgc3dpcGVyUmVmLmxvb3BEZXN0cm95ID0gKCkgPT4ge307XG4gICAgICBpZiAoc3dpcGVyUGFyYW1zLmxvb3ApIHtcbiAgICAgICAgc3dpcGVyUmVmLmxvb3BlZFNsaWRlcyA9IHRoaXMubG9vcGVkU2xpZGVzO1xuICAgICAgfVxuICAgICAgY29uc3QgaXNWaXJ0dWFsRW5hYmxlZCA9XG4gICAgICAgIHR5cGVvZiBzd2lwZXJSZWYucGFyYW1zLnZpcnR1YWwgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHR5cGVvZiBzd2lwZXJSZWYucGFyYW1zLnZpcnR1YWwgIT09ICdib29sZWFuJyAmJlxuICAgICAgICBzd2lwZXJSZWYucGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgICAgIGlmIChzd2lwZXJSZWYudmlydHVhbCAmJiBpc1ZpcnR1YWxFbmFibGVkKSB7XG4gICAgICAgIHN3aXBlclJlZi52aXJ0dWFsLnNsaWRlcyA9IHRoaXMuc2xpZGVzO1xuICAgICAgICBjb25zdCBleHRlbmRXaXRoID0ge1xuICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICBzbGlkZXM6IHRoaXMuc2xpZGVzLFxuICAgICAgICAgIHJlbmRlckV4dGVybmFsOiB0aGlzLnVwZGF0ZVZpcnR1YWxTbGlkZXMsXG4gICAgICAgICAgcmVuZGVyRXh0ZXJuYWxVcGRhdGU6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBleHRlbmQoc3dpcGVyUmVmLnBhcmFtcy52aXJ0dWFsLCBleHRlbmRXaXRoKTtcbiAgICAgICAgZXh0ZW5kKHN3aXBlclJlZi5vcmlnaW5hbFBhcmFtcy52aXJ0dWFsLCBleHRlbmRXaXRoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMuX3BsYXRmb3JtSWQpKSB7XG4gICAgICAgIHRoaXMuc3dpcGVyUmVmID0gc3dpcGVyUmVmLmluaXQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpc0VuYWJsZWQgPVxuICAgICAgICAgIHR5cGVvZiB0aGlzLnN3aXBlclJlZi5wYXJhbXMudmlydHVhbCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICB0eXBlb2YgdGhpcy5zd2lwZXJSZWYucGFyYW1zLnZpcnR1YWwgIT09ICdib29sZWFuJyAmJlxuICAgICAgICAgIHRoaXMuc3dpcGVyUmVmLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gICAgICAgIGlmICh0aGlzLnN3aXBlclJlZi52aXJ0dWFsICYmIGlzRW5hYmxlZCkge1xuICAgICAgICAgIHRoaXMuc3dpcGVyUmVmLnZpcnR1YWwudXBkYXRlKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgc3dpcGVyUmVmLm9uKCdzbGlkZUNoYW5nZScsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmluZGV4Q2hhbmdlLmVtaXQodGhpcy5zd2lwZXJSZWYucmVhbEluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdHlsZTogYW55ID0gbnVsbDtcbiAgY3VycmVudFZpcnR1YWxEYXRhOiBhbnk7IC8vIFRPRE86IHR5cGUgdmlydHVhbERhdGE7XG4gIHByaXZhdGUgdXBkYXRlVmlydHVhbFNsaWRlcyA9ICh2aXJ0dWFsRGF0YTogYW55KSA9PiB7XG4gICAgLy8gVE9ETzogdHlwZSB2aXJ0dWFsRGF0YVxuICAgIGlmIChcbiAgICAgICF0aGlzLnN3aXBlclJlZiB8fFxuICAgICAgKHRoaXMuY3VycmVudFZpcnR1YWxEYXRhICYmXG4gICAgICAgIHRoaXMuY3VycmVudFZpcnR1YWxEYXRhLmZyb20gPT09IHZpcnR1YWxEYXRhLmZyb20gJiZcbiAgICAgICAgdGhpcy5jdXJyZW50VmlydHVhbERhdGEudG8gPT09IHZpcnR1YWxEYXRhLnRvICYmXG4gICAgICAgIHRoaXMuY3VycmVudFZpcnR1YWxEYXRhLm9mZnNldCA9PT0gdmlydHVhbERhdGEub2Zmc2V0KVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN0eWxlID0gdGhpcy5zd2lwZXJSZWYuaXNIb3Jpem9udGFsKClcbiAgICAgID8ge1xuICAgICAgICAgIFt0aGlzLnN3aXBlclJlZi5ydGxUcmFuc2xhdGUgPyAncmlnaHQnIDogJ2xlZnQnXTogYCR7dmlydHVhbERhdGEub2Zmc2V0fXB4YCxcbiAgICAgICAgfVxuICAgICAgOiB7XG4gICAgICAgICAgdG9wOiBgJHt2aXJ0dWFsRGF0YS5vZmZzZXR9cHhgLFxuICAgICAgICB9O1xuICAgIHRoaXMuY3VycmVudFZpcnR1YWxEYXRhID0gdmlydHVhbERhdGE7XG4gICAgdGhpcy5fYWN0aXZlU2xpZGVzLm5leHQodmlydHVhbERhdGEuc2xpZGVzKTtcbiAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5zd2lwZXJSZWYudXBkYXRlU2xpZGVzKCk7XG4gICAgICB0aGlzLnN3aXBlclJlZi51cGRhdGVQcm9ncmVzcygpO1xuICAgICAgdGhpcy5zd2lwZXJSZWYudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgICAgaWYgKHRoaXMuc3dpcGVyUmVmLmxhenkgJiYgdGhpcy5zd2lwZXJSZWYucGFyYW1zLmxhenlbJ2VuYWJsZWQnXSkge1xuICAgICAgICB0aGlzLnN3aXBlclJlZi5sYXp5LmxvYWQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3dpcGVyUmVmLnZpcnR1YWwudXBkYXRlKHRydWUpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VkUGFyYW1zOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy51cGRhdGVTd2lwZXIoY2hhbmdlZFBhcmFtcyk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgdXBkYXRlSW5pdFN3aXBlcihjaGFuZ2VkUGFyYW1zOiBhbnkpIHtcbiAgICBpZiAoIShjaGFuZ2VkUGFyYW1zICYmIHRoaXMuc3dpcGVyUmVmICYmICF0aGlzLnN3aXBlclJlZi5kZXN0cm95ZWQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcGFyYW1zOiBjdXJyZW50UGFyYW1zLFxuICAgICAgICBwYWdpbmF0aW9uLFxuICAgICAgICBuYXZpZ2F0aW9uLFxuICAgICAgICBzY3JvbGxiYXIsXG4gICAgICAgIHZpcnR1YWwsXG4gICAgICAgIHRodW1icyxcbiAgICAgIH0gPSB0aGlzLnN3aXBlclJlZjtcblxuICAgICAgaWYgKGNoYW5nZWRQYXJhbXMucGFnaW5hdGlvbikge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5wYWdpbmF0aW9uICYmXG4gICAgICAgICAgdHlwZW9mIHRoaXMucGFnaW5hdGlvbiAhPT0gJ2Jvb2xlYW4nICYmXG4gICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmVsICYmXG4gICAgICAgICAgcGFnaW5hdGlvbiAmJlxuICAgICAgICAgICFwYWdpbmF0aW9uLmVsXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMudXBkYXRlUGFyYW1ldGVyKCdwYWdpbmF0aW9uJywgdGhpcy5wYWdpbmF0aW9uKTtcbiAgICAgICAgICBwYWdpbmF0aW9uLmluaXQoKTtcbiAgICAgICAgICBwYWdpbmF0aW9uLnJlbmRlcigpO1xuICAgICAgICAgIHBhZ2luYXRpb24udXBkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFnaW5hdGlvbi5kZXN0cm95KCk7XG4gICAgICAgICAgcGFnaW5hdGlvbi5lbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNoYW5nZWRQYXJhbXMuc2Nyb2xsYmFyKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLnNjcm9sbGJhciAmJlxuICAgICAgICAgIHR5cGVvZiB0aGlzLnNjcm9sbGJhciAhPT0gJ2Jvb2xlYW4nICYmXG4gICAgICAgICAgdGhpcy5zY3JvbGxiYXIuZWwgJiZcbiAgICAgICAgICBzY3JvbGxiYXIgJiZcbiAgICAgICAgICAhc2Nyb2xsYmFyLmVsXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMudXBkYXRlUGFyYW1ldGVyKCdzY3JvbGxiYXInLCB0aGlzLnNjcm9sbGJhcik7XG4gICAgICAgICAgc2Nyb2xsYmFyLmluaXQoKTtcbiAgICAgICAgICBzY3JvbGxiYXIudXBkYXRlU2l6ZSgpO1xuICAgICAgICAgIHNjcm9sbGJhci5zZXRUcmFuc2xhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY3JvbGxiYXIuZGVzdHJveSgpO1xuICAgICAgICAgIHNjcm9sbGJhci5lbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNoYW5nZWRQYXJhbXMubmF2aWdhdGlvbikge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uICYmXG4gICAgICAgICAgdHlwZW9mIHRoaXMubmF2aWdhdGlvbiAhPT0gJ2Jvb2xlYW4nICYmXG4gICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uLnByZXZFbCAmJlxuICAgICAgICAgIHRoaXMubmF2aWdhdGlvbi5uZXh0RWwgJiZcbiAgICAgICAgICBuYXZpZ2F0aW9uICYmXG4gICAgICAgICAgIW5hdmlnYXRpb24ucHJldkVsICYmXG4gICAgICAgICAgIW5hdmlnYXRpb24ubmV4dEVsXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMudXBkYXRlUGFyYW1ldGVyKCduYXZpZ2F0aW9uJywgdGhpcy5uYXZpZ2F0aW9uKTtcbiAgICAgICAgICBuYXZpZ2F0aW9uLmluaXQoKTtcbiAgICAgICAgICBuYXZpZ2F0aW9uLnVwZGF0ZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKG5hdmlnYXRpb24ucHJldkVsICYmIG5hdmlnYXRpb24ubmV4dEVsKSB7XG4gICAgICAgICAgbmF2aWdhdGlvbi5kZXN0cm95KCk7XG4gICAgICAgICAgbmF2aWdhdGlvbi5uZXh0RWwgPSBudWxsO1xuICAgICAgICAgIG5hdmlnYXRpb24ucHJldkVsID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNoYW5nZWRQYXJhbXMudGh1bWJzICYmIHRoaXMudGh1bWJzICYmIHRoaXMudGh1bWJzLnN3aXBlcikge1xuICAgICAgICB0aGlzLnVwZGF0ZVBhcmFtZXRlcigndGh1bWJzJywgdGhpcy50aHVtYnMpO1xuICAgICAgICBjb25zdCBpbml0aWFsaXplZCA9IHRodW1icy5pbml0KCk7XG4gICAgICAgIGlmIChpbml0aWFsaXplZCkgdGh1bWJzLnVwZGF0ZSh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYW5nZWRQYXJhbXMuY29udHJvbGxlciAmJiB0aGlzLmNvbnRyb2xsZXIgJiYgdGhpcy5jb250cm9sbGVyLmNvbnRyb2wpIHtcbiAgICAgICAgdGhpcy5zd2lwZXJSZWYuY29udHJvbGxlci5jb250cm9sID0gdGhpcy5jb250cm9sbGVyLmNvbnRyb2w7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3dpcGVyUmVmLnVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlU3dpcGVyKGNoYW5nZWRQYXJhbXM6IFNpbXBsZUNoYW5nZXMgfCBhbnkpIHtcbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgaWYgKGNoYW5nZWRQYXJhbXMuY29uZmlnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghKGNoYW5nZWRQYXJhbXMgJiYgdGhpcy5zd2lwZXJSZWYgJiYgIXRoaXMuc3dpcGVyUmVmLmRlc3Ryb3llZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlZFBhcmFtcykge1xuICAgICAgICBpZiAoaWdub3JlTmdPbkNoYW5nZXMuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGNoYW5nZWRQYXJhbXNba2V5XT8uY3VycmVudFZhbHVlID8/IGNoYW5nZWRQYXJhbXNba2V5XTtcbiAgICAgICAgdGhpcy51cGRhdGVQYXJhbWV0ZXIoa2V5LCBuZXdWYWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFuZ2VkUGFyYW1zLmFsbG93U2xpZGVOZXh0KSB7XG4gICAgICAgIHRoaXMuc3dpcGVyUmVmLmFsbG93U2xpZGVOZXh0ID0gdGhpcy5hbGxvd1NsaWRlTmV4dDtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VkUGFyYW1zLmFsbG93U2xpZGVQcmV2KSB7XG4gICAgICAgIHRoaXMuc3dpcGVyUmVmLmFsbG93U2xpZGVQcmV2ID0gdGhpcy5hbGxvd1NsaWRlUHJldjtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VkUGFyYW1zLmRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLnN3aXBlclJlZi5jaGFuZ2VEaXJlY3Rpb24odGhpcy5kaXJlY3Rpb24sIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VkUGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgICAgIGlmICh0aGlzLmxvb3AgJiYgIXRoaXMubG9vcGVkU2xpZGVzKSB7XG4gICAgICAgICAgdGhpcy5jYWxjTG9vcGVkU2xpZGVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zd2lwZXJSZWYuY3VycmVudEJyZWFrcG9pbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnN3aXBlclJlZi5zZXRCcmVha3BvaW50KCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFuZ2VkUGFyYW1zLnRodW1icyB8fCBjaGFuZ2VkUGFyYW1zLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgdGhpcy51cGRhdGVJbml0U3dpcGVyKGNoYW5nZWRQYXJhbXMpO1xuICAgICAgfVxuICAgICAgdGhpcy5zd2lwZXJSZWYudXBkYXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBjYWxjTG9vcGVkU2xpZGVzKCkge1xuICAgIGlmICghdGhpcy5sb29wKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzbGlkZXNQZXJWaWV3UGFyYW1zID0gdGhpcy5zbGlkZXNQZXJWaWV3O1xuICAgIGlmICh0aGlzLmJyZWFrcG9pbnRzKSB7XG4gICAgICBjb25zdCBicmVha3BvaW50ID0gU3dpcGVyLnByb3RvdHlwZS5nZXRCcmVha3BvaW50KHRoaXMuYnJlYWtwb2ludHMpO1xuICAgICAgY29uc3QgYnJlYWtwb2ludE9ubHlQYXJhbXMgPVxuICAgICAgICBicmVha3BvaW50IGluIHRoaXMuYnJlYWtwb2ludHMgPyB0aGlzLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdIDogdW5kZWZpbmVkO1xuICAgICAgaWYgKGJyZWFrcG9pbnRPbmx5UGFyYW1zICYmIGJyZWFrcG9pbnRPbmx5UGFyYW1zLnNsaWRlc1BlclZpZXcpIHtcbiAgICAgICAgc2xpZGVzUGVyVmlld1BhcmFtcyA9IGJyZWFrcG9pbnRPbmx5UGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzbGlkZXNQZXJWaWV3UGFyYW1zID09PSAnYXV0bycpIHtcbiAgICAgIHRoaXMubG9vcGVkU2xpZGVzID0gdGhpcy5zbGlkZXMubGVuZ3RoO1xuICAgICAgcmV0dXJuIHRoaXMuc2xpZGVzLmxlbmd0aDtcbiAgICB9XG4gICAgbGV0IGxvb3BlZFNsaWRlcyA9IHRoaXMubG9vcGVkU2xpZGVzIHx8IHNsaWRlc1BlclZpZXdQYXJhbXM7XG4gICAgaWYgKCFsb29wZWRTbGlkZXMpIHtcbiAgICAgIC8vID9cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sb29wQWRkaXRpb25hbFNsaWRlcykge1xuICAgICAgbG9vcGVkU2xpZGVzICs9IHRoaXMubG9vcEFkZGl0aW9uYWxTbGlkZXM7XG4gICAgfVxuICAgIGlmIChsb29wZWRTbGlkZXMgPiB0aGlzLnNsaWRlcy5sZW5ndGgpIHtcbiAgICAgIGxvb3BlZFNsaWRlcyA9IHRoaXMuc2xpZGVzLmxlbmd0aDtcbiAgICB9XG4gICAgdGhpcy5sb29wZWRTbGlkZXMgPSBsb29wZWRTbGlkZXM7XG4gICAgcmV0dXJuIGxvb3BlZFNsaWRlcztcbiAgfVxuXG4gIHVwZGF0ZVBhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIGlmICghKHRoaXMuc3dpcGVyUmVmICYmICF0aGlzLnN3aXBlclJlZi5kZXN0cm95ZWQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IF9rZXkgPSBrZXkucmVwbGFjZSgvXl8vLCAnJyk7XG4gICAgY29uc3QgaXNDdXJyZW50UGFyYW1PYmogPSBpc09iamVjdCh0aGlzLnN3aXBlclJlZi5wYXJhbXNbX2tleV0pO1xuXG4gICAgaWYgKF9rZXkgPT09ICdlbmFibGVkJykge1xuICAgICAgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuc3dpcGVyUmVmLmVuYWJsZSgpO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5zd2lwZXJSZWYuZGlzYWJsZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNDdXJyZW50UGFyYW1PYmogJiYgaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICBleHRlbmQodGhpcy5zd2lwZXJSZWYucGFyYW1zW19rZXldLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3dpcGVyUmVmLnBhcmFtc1tfa2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgd2lsbCBiZSByZW1vdmVkIGluIHVwY29taW5nIHZlcnNpb25zXG4gICAqL1xuICBzZXRJbmRleChpbmRleDogbnVtYmVyLCBzcGVlZD86IG51bWJlciwgc2lsZW50PzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc1N3aXBlckFjdGl2ZSkge1xuICAgICAgdGhpcy5pbml0aWFsU2xpZGUgPSBpbmRleDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGluZGV4ID09PSB0aGlzLnN3aXBlclJlZi5hY3RpdmVJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubG9vcCkge1xuICAgICAgICB0aGlzLnN3aXBlclJlZi5zbGlkZVRvTG9vcChpbmRleCwgc3BlZWQsICFzaWxlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zd2lwZXJSZWYuc2xpZGVUbyhpbmRleCwgc3BlZWQsICFzaWxlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuc3dpcGVyUmVmPy5kZXN0cm95KHRydWUsIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Nsb3Q9Y29udGFpbmVyLXN0YXJ0XVwiPjwvbmctY29udGVudD5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJuYXZpZ2F0aW9uICYmIHNob3dOYXZpZ2F0aW9uXCI+XG4gIDxkaXYgY2xhc3M9XCJzd2lwZXItYnV0dG9uLXByZXZcIiAjcHJldkVsUmVmPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic3dpcGVyLWJ1dHRvbi1uZXh0XCIgI25leHRFbFJlZj48L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuPGRpdiAqbmdJZj1cInNjcm9sbGJhciAmJiBzaG93U2Nyb2xsYmFyXCIgY2xhc3M9XCJzd2lwZXItc2Nyb2xsYmFyXCIgI3Njcm9sbGJhckVsUmVmPjwvZGl2PlxuPGRpdiAqbmdJZj1cInBhZ2luYXRpb24gJiYgc2hvd1BhZ2luYXRpb25cIiBjbGFzcz1cInN3aXBlci1wYWdpbmF0aW9uXCIgI3BhZ2luYXRpb25FbFJlZj48L2Rpdj5cbjxkaXYgW25nQ2xhc3NdPVwid3JhcHBlckNsYXNzXCIgW2F0dHIuaWRdPVwiaWRcIj5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Nsb3Q9d3JhcHBlci1zdGFydF1cIj48L25nLWNvbnRlbnQ+XG4gIDxuZy10ZW1wbGF0ZVxuICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwiXG4gICAgICBzbGlkZXNUZW1wbGF0ZTtcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgbG9vcFNsaWRlczogcHJlcGVuZFNsaWRlcyxcbiAgICAgICAga2V5OiAncHJlcGVuZCdcbiAgICAgIH1cbiAgICBcIlxuICA+PC9uZy10ZW1wbGF0ZT5cbiAgPG5nLXRlbXBsYXRlXG4gICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJcbiAgICAgIHNsaWRlc1RlbXBsYXRlO1xuICAgICAgY29udGV4dDoge1xuICAgICAgICBsb29wU2xpZGVzOiBhY3RpdmVTbGlkZXMsXG4gICAgICAgIGtleTogJydcbiAgICAgIH1cbiAgICBcIlxuICA+PC9uZy10ZW1wbGF0ZT5cbiAgPG5nLXRlbXBsYXRlXG4gICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJcbiAgICAgIHNsaWRlc1RlbXBsYXRlO1xuICAgICAgY29udGV4dDoge1xuICAgICAgICBsb29wU2xpZGVzOiBhcHBlbmRTbGlkZXMsXG4gICAgICAgIGtleTogJ2FwcGVuZCdcbiAgICAgIH1cbiAgICBcIlxuICA+PC9uZy10ZW1wbGF0ZT5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Nsb3Q9d3JhcHBlci1lbmRdXCI+PC9uZy1jb250ZW50PlxuPC9kaXY+XG48bmctY29udGVudCBzZWxlY3Q9XCJbc2xvdD1jb250YWluZXItZW5kXVwiPjwvbmctY29udGVudD5cblxuPG5nLXRlbXBsYXRlICNzbGlkZXNUZW1wbGF0ZSBsZXQtbG9vcFNsaWRlcz1cImxvb3BTbGlkZXNcIiBsZXQtc2xpZGVLZXk9XCJrZXlcIj5cbiAgPGRpdlxuICAgICpuZ0Zvcj1cImxldCBzbGlkZSBvZiBsb29wU2xpZGVzIHwgYXN5bmNcIlxuICAgIFtuZ0NsYXNzXT1cIlxuICAgICAgKHNsaWRlLmNsYXNzID8gc2xpZGUuY2xhc3MgKyAnICcgOiAnJykgK1xuICAgICAgc2xpZGVDbGFzcyArXG4gICAgICAoc2xpZGVLZXkgIT09ICcnID8gJyAnICsgc2xpZGVEdXBsaWNhdGVDbGFzcyA6ICcnKVxuICAgIFwiXG4gICAgW2F0dHIuZGF0YS1zd2lwZXItc2xpZGUtaW5kZXhdPVwic2xpZGUudmlydHVhbEluZGV4ID8gc2xpZGUudmlydHVhbEluZGV4IDogc2xpZGUuc2xpZGVJbmRleFwiXG4gICAgW2F0dHIuZGF0YS1zd2lwZXItYXV0b3BsYXldPVwic2xpZGUuYXV0b3BsYXlEZWxheVwiXG4gICAgW3N0eWxlXT1cInN0eWxlXCJcbiAgICBbbmdTd2l0Y2hdPVwic2xpZGUuem9vbVwiXG4gID5cbiAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCJ0cnVlXCIgW25nQ2xhc3NdPVwiem9vbUNvbnRhaW5lckNsYXNzXCI+XG4gICAgICA8bmctdGVtcGxhdGVcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwic2xpZGUudGVtcGxhdGVcIlxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xuICAgICAgICAgICRpbXBsaWNpdDogc2xpZGUuc2xpZGVEYXRhXG4gICAgICAgIH1cIlxuICAgICAgPjwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgICAgPG5nLXRlbXBsYXRlXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInNsaWRlLnRlbXBsYXRlXCJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgICAkaW1wbGljaXQ6IHNsaWRlLnNsaWRlRGF0YVxuICAgICAgICB9XCJcbiAgICAgID48L25nLXRlbXBsYXRlPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=