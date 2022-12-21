export default function desktopHide(el, menu, params, itemParams) {
  if (!menu) {
    return this;
  }

  if (itemParams.desktop.animationOut) {
    menu.classList.remove(itemParams.desktop.animationIn)
    menu.classList.add(itemParams.desktop.animationOut)
    menu.style.display = 'none'
  } else {
    menu.classList.remove(itemParams.desktop.animationIn)
    menu.style.display = 'none'
  }
}
