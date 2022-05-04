const contentPortuguese = document.querySelectorAll('.lang-pt')
const contentEnglish = document.querySelectorAll('.lang-en')
const toggle = document.getElementById('toggle')
let isActive = false

const setDownloadLink = (lang) => {
  const link = document.getElementById('download-link')
  const icon = '<i class="fas fa-file-download"></i>'

  if (lang === 'pt') {
    link.href = './resumes/Resume-pt.pdf'
    link.innerHTML = `${icon} Currículo.pdf`
  }
  else {
    link.href = './resumes/Resume.pdf'
    link.innerHTML = `${icon} Resume.pdf`
  }
}

const hidePortugueseContent = () => {
  contentPortuguese.forEach((e) => {
    e.style.display = 'none'
  })

  contentEnglish.forEach((e) => {
    e.style.display = 'flex'
  })

  setDownloadLink('en')
}

const hideEnglishContent = () => {
  contentPortuguese.forEach((e) => {
    e.style.display = 'flex'
  })

  contentEnglish.forEach((e) => {
    e.style.display = 'none'
  })

  setDownloadLink('pt')
}

hidePortugueseContent()

toggle.addEventListener('click', () => {
  isActive = !isActive

  isActive
    ? hideEnglishContent()
    : hidePortugueseContent()
})
