const editButton = document.querySelectorAll('.edit-image')
const boardTable = document.querySelector('.board-table')
const boardContent = document.querySelector('.board-content')
const projects = document.querySelector('.projects')
const searchBar = document.querySelector('.search-bar')
const searchBarMobile = document.querySelector('.search-bar--sm')
const detailsBackButton = document.querySelector('.board-details__button--back')
const boardDetailsPage = document.querySelector('.board-details')

editButton.forEach((i) => {
  i.addEventListener('click', () => {
    boardTable.classList.toggle('hide')
    boardDetailsPage.classList.toggle('hide')
    projects.classList.toggle('hide')
    boardContent.style.display = 'block'
    searchBarMobile.style.display = 'none'
  })
})

detailsBackButton.addEventListener('click', () => {
  boardTable.classList.toggle('hide')
  boardDetailsPage.classList.toggle('hide')
  projects.classList.toggle('hide')
  searchBarMobile.style.display = 'flex'

  if (screen.width < 1440) {
    searchBarMobile.style.display = 'flex'
  } else {
    searchBarMobile.style.display = 'none'
  }
})
