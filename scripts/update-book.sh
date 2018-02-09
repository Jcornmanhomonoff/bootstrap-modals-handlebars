curl "https://ga-library-api.herokuapp.com/books/${ID}" \
  --include \
  --request PATCH \
  --header "Content-type: application/json" \
  --data '{
    "book": {
      "title": "'"${TITLE}"'",
      "author": "'"${AUTHOR}"'"
    }
  }'

echo
