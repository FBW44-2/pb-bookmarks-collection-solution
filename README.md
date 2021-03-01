# Bookmarks collection class

Let's create a class that allows us to collect bookmarks.

Each bookmark should have:

- id
- title
- url
- date and time when it was created

## Functionality

- It should be possible to add a new bookmark to the collection.

- It should be possible to remove a bookmark by id.

- It should be possible to get the full list of bookmarks. The list should display all the bookmarks as an ordered list. For example the output should look something like this:

```
1. MDN Class: https://mdn.com/classes
2. MDN Functions: https://mdn.com/functions
3. MDN Arrays: https://mdn.com/arrays
```

- It should be possible to update a bookmark - only the title, only the url, or both the title and the url.

- Let's add sorting order. When listing the full list of bookmarks, the items should be sorted by time of creation by default.

- It should be possible to specify the sorting order when getting the full list, but if not specified it should be descending by default - so the most recently added items should be at the top of the list.

- It should be possible to get a filtered list of bookmarks that match a query (also formatted as an ordered list), with the newest items at the top of the list.

- **Extra**: add a property that tracks when a bookmark was updated that initially is equal to the creation date. If you have a property for the date time a bookmark was updated, sorting now should use this new property, instead of the date of creation.
