'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')
const showModalsTemplate = require('../templates/book-modal.handlebars')
const getFormFields = require('../../../lib/get-form-fields')

const onGetBooks = (event) => {
  event.preventDefault()
  api.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.failure)
}
const onShowBook = (event) => {
  event.preventDefault()
  // get data-id attribute from button
  const bookId = event.target.dataset.id
  console.log(bookId)
  // get book with matching id
  const book = store.books.find(function (book) {
    return book.id.toString() === bookId
  })
  console.log(book)
  const showModalHtml = showModalsTemplate({ book })
  $('#modal-content').html(showModalHtml)
  $('#' + bookId).modal('show')
}

const onUpdateBook = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const bookId = $(event.target).parents('.modal').attr('id')
  console.log('bookId is ', bookId)
  api.updateBook(data, bookId)
    .then(() => onGetBooks(event))
    .then(ui.onUpdateBookSuccess)
    .catch(ui.onUpdateBookFailure)
}

const onClearBooks = (event) => {
  event.preventDefault()
  ui.clearBooks()
}

const addHandlers = () => {
  $('#getBooksButton').on('click', onGetBooks)
  $('#clearBooksButton').on('click', onClearBooks)
  $('#content').on('click', '.modal-btn', onShowBook)
  $('#modal-content').on('submit', '.book-form', onUpdateBook)
}

module.exports = {
  addHandlers
}
