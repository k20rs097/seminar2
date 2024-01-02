const splashScreen = document.getElementById('splash-screen')
const ANIMATION_DURATION = 1000

splashScreen.addEventListener ('load', () => {
    popupAnimation('fade-in', 'block')
})

function popupAnimation(animation, styleDisplay) {
  if (styleDisplay === 'block') { changePopupDisplayStyle('block') }
  historyOverlay.classList.add(animation)
  historyPopup.classList.add(animation)

  setTimeout(() => {
    historyOverlay.classList.remove(animation)
    historyPopup.classList.remove(animation)
    if (styleDisplay === 'none') { changePopupDisplayStyle('none') }
  }, ANIMATION_DURATION)
}
