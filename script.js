const editButton = document.querySelectorAll('.edit-image')
const boardTable = document.querySelector('.board-table')
const project = document.querySelector('.project')
const searchBar = document.querySelector('.search-bar')
const detailsBackButton = document.querySelector('.board-details__button--back')
const boardDetailsPage = document.querySelector('.board-details')

editButton.forEach((i) => {
  i.addEventListener('click', () => {
    console.log(1)
    boardTable.classList.toggle('hide')
    boardDetailsPage.classList.toggle('hide')
    project.classList.toggle('hide')
    searchBar.classList.toggle('hide')
  })
})

detailsBackButton.addEventListener('click', () => {
  boardTable.classList.toggle('hide')
  boardDetailsPage.classList.toggle('hide')
})
