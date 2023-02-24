const editButton = document.querySelectorAll('.edit-image')
const boardTable = document.querySelector('.board-table')
const boardContent = document.querySelector('.board-content')
const projects = document.querySelector('.projects')
const searchBar = document.querySelector('.search-bar')
const detailsBackButton = document.querySelector('.board-details__button--back')
const boardDetailsPage = document.querySelector('.board-details')

editButton.forEach((i) => {
  i.addEventListener('click', () => {
    console.log(1)
    boardTable.classList.toggle('hide')
    boardDetailsPage.classList.toggle('hide')
    projects.classList.toggle('hide')
    searchBar.style.display = 'none'
    boardContent.style.display = 'block'
  })
})

detailsBackButton.addEventListener('click', () => {
  boardTable.classList.toggle('hide')
  boardDetailsPage.classList.toggle('hide')
  projects.classList.toggle('hide')
  searchBar.style.display = 'flex'
  // searchBar.style.display = 'flex'
})
