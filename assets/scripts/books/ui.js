'use strict'

const showBooksTemplate = require('../templates/book-listing.handlebars')
const store = require('../store')

const getBooksSuccess = (data) => {
  console.log(data)
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('.content').html(showBooksHtml)
  store.books = data.books
}

const onUpdateBookSuccess = () => {
  $('.modal').modal('hide')
}

const onUpdateBookFailure = () => {
  $('#message').text('Failure updating book')
  $('#message').css('color', 'red')
}

const clearBooks = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getBooksSuccess,
  onUpdateBookSuccess,
  onUpdateBookFailure,
  clearBooks,
  failure
}
