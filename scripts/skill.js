const skills = document.querySelectorAll('.skill')

skills.forEach((e) => {
  const MAX_PERCENT = 5
  let percent = parseInt(e.getAttribute('data-percent')) // 1-5

  let root = document.createElement('div')
  root.setAttribute('class', 'balls-skill')
  e.appendChild(root)

  for (let i = 0; i < percent; i++) {
    let div = document.createElement('div')

    div.setAttribute('class', 'ball colored')
    root.appendChild(div)
  }

  for (let i = 0; i < MAX_PERCENT - percent; i++) {
    let div = document.createElement('div')

    div.setAttribute('class', 'ball')
    root.appendChild(div)
  }
})
