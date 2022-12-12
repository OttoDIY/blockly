/*
* HSVideoBg Plugin
* @version: 3.0.0 (Wed, 17 Mar 2021)
* @author: HtmlStream
* @event-namespace: .HSVideoBg
* @license: Htmlstream Libraries (https://htmlstream.com/)
* Copyright 2021 Htmlstream
*/

import {fadeOut} from "./utils";

export default class HSVideoBg {
	constructor(el, settings) {
		this.$el = typeof el === "string" ? document.querySelector(el) : el
		this.defaults = {
			type: 'default',
			videoId: null,
			isLoop: true,
			ratio: 1.5
		};
		this.dataSettings = this.$el.hasAttribute('data-hs-video-bg-options') ? JSON.parse(this.$el.getAttribute('data-hs-video-bg-options')) : {};
		this.settings = Object.assign({}, this.defaults, this.dataSettings, settings)
	}
	
	init() {
		this._prepareObject();

		if (this.settings.type === 'you-tube') {
			this._APICreating('//www.youtube.com/player_api', 'YT', 'YTDetect').then(() => {
				let newYT;
				
				if (typeof window.onYouTubeIframeAPIReady === 'function') {
					setTimeout(() => {
						newYT = new YT.Player(this.$el.querySelector('.hs-video-bg-video > div'), {
							videoId: this.settings.videoId,
							playerVars: {
								autoplay: true,
								controls: 0,
								showinfo: 0,
								enablejsapi: 1,
								modestbranding: 1,
								iv_load_policy: 3,
								loop: this.settings.isLoop,
								playlist: this.settings.videoId,
								origin: window.location.origin
							},
							events: {
								onReady: e => {
									e.target.mute();

									this._ratioCalc()

									window.addEventListener('resize', () => {
										this._ratioCalc();
									})

									fadeOut(this.$el.querySelector('.hs-video-bg-preview'), 400)
								}
							}
						});
					}, 100);
				} else {
					window.onYouTubeIframeAPIReady = () => {
						newYT = new YT.Player(this.$el.querySelector('.hs-video-bg-video > div'), {
							videoId: this.settings.videoId,
							playerVars: {
								autoplay: true,
								controls: 0,
								showinfo: 0,
								enablejsapi: 1,
								modestbranding: 1,
								iv_load_policy: 3,
								loop: this.settings.isLoop,
								playlist: this.settings.videoId,
								origin: window.location.origin
							},
							events: {
								onReady: e => {
									e.target.mute();

									this._ratioCalc();

									window.addEventListener('resize', () => {
										this._ratioCalc();
									})

									fadeOut(this.$el.querySelector('.hs-video-bg-preview'), 400)
								}
							}
						});
					};
				}
			});
		} else if (this.settings.type === 'vimeo') {
			this._APICreating('//player.vimeo.com/api/player.js', 'Vimeo', 'VimeoDetect').then(() => {
				let newVimeo = new Vimeo.Player(this.$el.querySelector('.hs-video-bg-video'), {
					id: this.settings.videoId,
					loop: this.settings.isLoop,
					title: false,
					portrait: false,
					byline: false,
					autoplay: true,
					autopause: false,
					muted: true
				});
				
				newVimeo.play().then(() => {
					this._ratioCalc()

					window.addEventListener('resize', () => {
						this._ratioCalc()
					})

					fadeOut(this.$el.querySelector('.hs-video-bg-preview'), 400)
				});
			});
		} else {
			window.addEventListener('resize', () => {
				this._ratioCalc()
			});
			
			setTimeout(() => {
				this._ratioCalc()
			});
		}
	}
	
	_prepareObject() {
		this.$el.style.position = 'relative'
		
		if (this.settings.type === 'you-tube') {
			this.$el.insertAdjacentHTML('beforeend', '<div class="hs-video-bg-video"><div></div></div>');
		} else if (this.settings.type === 'vimeo') {
			this.$el.insertAdjacentHTML('beforeend', '<div class="hs-video-bg-video"></div>');
		} else {
			this.$el.insertAdjacentHTML('beforeend', `
				<div class="hs-video-bg-video">
					<video poster="" autoplay muted ${this.settings.isLoop ? 'loop' : ''}>
						<source src="${this.settings.videoId}.mp4" type="video/mp4">
						<source src="${this.settings.videoId}.webm" type="video/webm">
						<source src="${this.settings.videoId}.ogv" type="video/ogg">
						Your browser doesn't support HTML5 video.
					</video>
        </div>
			`);
		}
		
		if (this.settings.type === 'you-tube') {
			this.$el.insertAdjacentHTML('beforeend',`<div class="hs-video-bg-preview" style="background-image: url(//img.youtube.com/vi/${this.settings.videoId}/maxresdefault.jpg);"></div>`);
		} else if (this.settings.type === 'vimeo') {
			fetch(`//www.vimeo.com/api/v2/video/${this.settings.videoId}.json?callback=?`)
				.then(data => {
				this.$el.insertAdjacentHTML('beforeend',`<div class="hs-video-bg-preview" style="background-image: url(${data[0].thumbnail_large});"></div>`);
			})
		} else {
			return false;
		}
	}
	
	_ratioCalc() {
		let _ratio = this.$el.clientWidth / this.$el.clientHeight
			const $videoBg = this.$el.querySelector('.hs-video-bg-video')

		if (!$videoBg) return false
		
		if(this.settings.type === 'you-tube' || this.settings.type === 'vimeo') {
			if (this.$el.clientHeight < this.$el.clientWidth && window.innerWidth > 768) {
				$videoBg.style.width = _ratio * this.$el.clientWidth * this.settings.ratio
				$videoBg.style.height = _ratio * this.$el.clientHeight * this.settings.ratio
			} else {
				$videoBg.style.width = _ratio * this.$el.clientWidth
				$videoBg.style.height = '130%'
			}
		}
	}
	
	_APICreating(scriptUrl, globalName, globalNameDetect) {
		if (window[globalNameDetect]) {
			return Promise.resolve()
		}
		
		return new Promise((resolve, reject) => {
			let script = document.createElement('script'),
				before = document.querySelector('script')
			
			script.src = scriptUrl;
			before.parentNode.insertBefore(script, before)
			
			script.onload = (() => {
				!globalName || window[globalName] ? resolve() : reject(Error('window.' + globalName + ' undefined'))
			})
			
			script.onerror = () => {
				reject(Error('Error loading ' + globalName || scriptUrl))
			}
		});
	}
}
