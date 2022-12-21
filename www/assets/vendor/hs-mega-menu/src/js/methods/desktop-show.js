export default function desktopShow(el, menu, params, itemParams) {
  menu.classList.remove(itemParams.desktop.animationOut)
  menu.style.display = 'block'
  menu.classList.add(itemParams.desktop.animationIn)
}
