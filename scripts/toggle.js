const contentPortuguese = document.querySelectorAll('.lang-pt')
const contentEnglish = document.querySelectorAll('.lang-en')
const toggle = document.getElementById('toggle')
let isActive = false

const hidePortugueseContent = () => {
  contentPortuguese.forEach((e) => {
    e.style.display = 'none'
  })

  contentEnglish.forEach((e) => {
    e.style.display = 'flex'
  })
}

const hideEnglishContent = () => {
  contentPortuguese.forEach((e) => {
    e.style.display = 'flex'
  })

  contentEnglish.forEach((e) => {
    e.style.display = 'none'
  })
}

hidePortugueseContent()

toggle.addEventListener('click', () => {
  isActive = !isActive

  isActive
    ? hideEnglishContent()
    : hidePortugueseContent()
})
