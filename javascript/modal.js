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