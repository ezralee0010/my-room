const data = {
  journal: {
    title: 'Junk Journal',
    pages: [
      'Deep in the lower drawer of my cabinet is a collection of random scraps. Some yellowing with age. And some wrinkling under the pressure of those above. I like to think that they’re happily rotting in my drawer. But that is likely not the case. These scraps are arbitrary collections of items I have collected while traveling. Maps, brochures, movie tickets, museum admissions passes. Wherever I go, I just have to take something physical. Something that would remind me that I was physically present there. <br><br> But it\’s always haunted me that these scraps are just sitting there as newer, fresher pieces of paper pile above them. They all deserve to be spotlighted. Well, that\’s my belief. I recently bought a journal to start journaling. The technical term, I suppose, is junk journaling. Junk journaling consists of accumulating random materials to be pasted onto a journal. My precious scraps will be cut and sliced to shapes that will make them unrecognizable. But my hope is that they will find their new home better. <br><br> I started this journal with my recent study abroad trip to Paris alongside my weekend trips to Prague, Rome, Mainz, and some French cities. The following pages consist of select pictures of my junk journal.',
      'Some museums in Paris <br><br> <img src="images/journal-images/IMG_9732.jpeg">',
      'Versailles <br><br> <img src="images/journal-images/IMG_9735.jpeg">',
      'Paris <br><br> <img src="images/journal-images/IMG_9734.jpeg">',
      'Mainz <br><br> <img src="images/journal-images/IMG_9737.jpeg">',
      'Rome + Vatican City <br><br> <img src="images/journal-images/IMG_9740.jpeg">',
      'French Cities <br><br> <img src="images/journal-images/IMG_9736.jpeg">',
      'Prague <br><br> <img src="images/journal-images/IMG_9741.jpeg">'
    ]
  },
  game: {
    title: 'Some internet stuff',
    pages: [
      'Unfortunately, there are various pieces of media that are posted online. Some I am proud of, others I would rather not discuss. I’ve accumulated some pieces I think you as my audience might enjoy. Hopefully… No promises.',
      'CSS Art from my MADD 23631 class <br><br> <iframe src="https://ezralee0010.github.io/css-art/" width="300" height="300" frameborder="0" allowfullscreen=""> </iframe>', 
      'This random visual novel I made based off of a story I wrote for my high school newspaper <br><br> <iframe frameborder="0" src="https://itch.io/embed-upload/7878672?color=333333" allowfullscreen="" width="640" height="370"><a href="https://ezralee.itch.io/dating-sim-new-student-at-stuy">Play Dating Simulator</a></iframe>'
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
    title: 'Lights On',
    pages: [
      'You have entered my space. Who are you? Why are you here? How did you enter? I guess I’ll never know.'
    ]
  },
  board: {
    title: 'Board',
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