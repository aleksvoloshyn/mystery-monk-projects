const editButton = document.querySelectorAll('.table-editimage__image')
const boardTable = document.querySelector('.board-table')
const detailsBackButton = document.querySelector('.board-details__button--back')
const boardDetailsPage = document.querySelector('.board-details')

editButton.forEach((i) => {
  i.addEventListener('click', () => {
    boardTable.classList.toggle('hide')
    boardDetailsPage.classList.toggle('hide')
  })
})

detailsBackButton.addEventListener('click', () => {
  boardTable.classList.toggle('hide')
  boardDetailsPage.classList.toggle('hide')
})
