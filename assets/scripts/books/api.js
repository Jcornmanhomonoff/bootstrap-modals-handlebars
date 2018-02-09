'use strict'

const config = require('../config')

const getBooks = function () {
  return $.ajax({
    url: config.apiOrigin + '/books'
  })
}

const updateBook = function (data, bookId) {
  return $.ajax({
    url: config.apiOrigin + '/books/' + bookId,
    method: 'PATCH',
    data
  })
}

module.exports = {
  getBooks,
  updateBook
}
