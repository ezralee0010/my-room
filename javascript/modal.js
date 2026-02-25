const data = {
  journal: {
    title: 'Junk Journal',
    pages: [
      'I\'ve recently just started working on a junk journal. Junk journaling is basically using random materials you have accumulated and pasting them onto pages.',
      '<img src="images/journal-images/IMG_9732.jpeg">',
      '<img src="images/journal-images/IMG_9735.jpeg">'
    ]
  },
  game: {
    title: 'Some internet stuff',
    pages: [
      '<iframe src="https://ezralee0010.github.io/css-art/" width="300" height="300" frameborder="0" allowfullscreen=""> </iframe>', 
      '<iframe frameborder="0" src="https://itch.io/embed-upload/7878672?color=333333" allowfullscreen="" width="640" height="370"><a href="https://ezralee.itch.io/dating-sim-new-student-at-stuy">Play Dating Simulator</a></iframe>'
    ]
  },
  cd: {
    title: 'music stuff',
    pages: [
      'hi'
    ]
  },
  rug: {
    title: 'rug',
    pages: [
      'For some reason I have a Disney rug in my room? The design isn\'t the same, but it looks something like this.'
    ]
  },
  table: {
    title: 'My Table',
    pages: [
      'hi'
    ]
  }, 
  movie: {
    title: 'TV',
    pages: [
      'So, I don\'t actually have a projector or screen in my room. But that\'s okay! I can design my online room to be whatever I want!'
    ]
  },
  bed: {
    title: 'Bed Thoughts',
    pages: [
      'This is my bed. GET OUT!'
    ]
  },
  wall: {
    title: 'Walls',
    pages: [
      'hi'
    ]
  },
  window: {
    title: 'Window',
    pages: [
      'hi'
    ]
  },
  lights: {
    title: 'Lights',
    pages: [
      'hi'
    ]
}
}

// State
let currentProject = null
let currentPage = 0

function setupClicks(ele) {
  ele.addEventListener('click', showModal)
}

function updateModal() {
  const modal = document.getElementById('modal')
  const content = modal.querySelector('.modal-content')
  const nextButton = document.getElementById('next')
  const prevButton = document.getElementById('prev')

  content.innerHTML = currentProject.pages[currentPage]

  if (currentPage < currentProject.pages.length - 1) {
    nextButton.style.display = 'block'
  } else {
    nextButton.style.display = 'none'
  }

  if (currentPage > 0) {
    prevButton.style.display = 'block'
  } else {
    prevButton.style.display = 'none'
  }
}

function showModal() {
  currentProject = data[this.id]
  currentPage = 0

  const modal = document.getElementById('modal')
  modal.querySelector('h1').textContent = currentProject.title
  modal.style.display = 'flex'

  updateModal()
}

function nextPage() {
  if (!currentProject) return

  currentPage++
  updateModal()
}

function prevPage() {
  if (!currentProject) return

  currentPage--
  updateModal()
}

function hideModal() {
  document.getElementById('modal').style.display = 'none'
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('close').addEventListener('click', hideModal)
  document.getElementById('next').addEventListener('click', nextPage)
  document.getElementById('prev').addEventListener('click', prevPage)

  document.querySelectorAll('.proj').forEach(setupClicks)
})