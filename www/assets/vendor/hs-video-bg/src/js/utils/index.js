export function fadeOut(el, time) {
  if (!el || el.offsetParent === null) return el

  if (!time) {
    return el.style.display = 'none'
  }

  var intervalID = setInterval(function () {

    if (!el.style.opacity) {
      el.style.opacity = 1;
    }

    if (el.style.opacity > 0) {
      el.style.opacity -= 0.1;
    } else {
      clearInterval(intervalID);
      el.style.display = 'none'
    }

  }, time / 10);
}
