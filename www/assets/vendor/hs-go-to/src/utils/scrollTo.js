Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2
    if (t < 1) return c/2*t*t + b
    t--
    return -c/2 * (t*(t-2) - 1) + b
}


/*
  scrollTo(element.scrollTop || 200, 400)
*/
export default function scrollTo({el, to}, duration) {
    const element = el
    const start = (element && element.scrollTop) || window.pageYOffset,
        change = to - start,
        increment = 20
    let currentTime = 0

    const animateScroll = function(){
        currentTime += increment
        const val = Math.easeInOutQuad(currentTime, start, change, duration)
        el.scrollTop = val
        if(currentTime < duration) {
            window.setTimeout(animateScroll, increment)
        }
    }
    animateScroll()
}