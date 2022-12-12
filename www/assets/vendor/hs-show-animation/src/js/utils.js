export function fadeIn(el, time) {
  if (!el || el.offsetParent !== null) return el

  el.style.opacity = 0
  el.style.display = 'block'

  var last = +new Date()
  var tick = function () {
    el.style.opacity = +el.style.opacity + (new Date() - last) / time
    last = +new Date()

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    }
  }

  tick()
}
