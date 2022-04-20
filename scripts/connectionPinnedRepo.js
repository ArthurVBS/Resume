const URL_PINNED_REPO = 'https://gh-pinned-repos.egoist.sh/?username=ArthurVBS'

async function connection(){
  await fetch(URL_PINNED_REPO)
    .then((response) => response.json())
    .then((data) => {
      displayPinnedRepo(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

function displayPinnedRepo(data) {
  const rootSection = document.getElementById('repositories')

  data.forEach(repo => {
    if (repo.owner === 'ArthurVBS'){
      console.log(repo)
      let newDiv = document.createElement('div')
      newDiv.setAttribute('class', 'repo')

      let repoLink= document.createElement('a')
      repoLink.innerText = repo.repo
      repoLink.href = repo.link
      repoLink.target = '_blank'
      repoLink.rel = 'external'
      repoLink.setAttribute('class', 'link')
      newDiv.appendChild(repoLink)

      let repoDescription = document.createElement('p')
      repoDescription.innerText = repo.description
      newDiv.appendChild(repoDescription)

      rootSection.appendChild(newDiv)
    }
  })
}

connection()
