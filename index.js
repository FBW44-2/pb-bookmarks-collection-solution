const BookmarksCollection = require('./BookmarksCollection');
const bookmarks = new BookmarksCollection();

// Adding some bookmarks
bookmarks.addBookmark('MDN Class', 'https://mdn.com/classes');
bookmarks.addBookmark('MDN Functions', 'https://mdn.com/functions');

// Removing item with id 2
bookmarks.removeBookmarkById(2);

// Adding some more bookmarks
bookmarks.addBookmark('MDN Functions', 'https://mdn.com/functions');
bookmarks.addBookmark('MDN Arrays', 'https://mdn.com/arrays');

// Display full list
console.log(bookmarks.getFullList());

// Updating some more bookmarks
bookmarks.updateBookmarkById(2, { title: 'MDN All about functions' });
bookmarks.updateBookmarkById(2, { url: 'https://mdn.com/functions123' });
bookmarks.updateBookmarkById(2, { title: 'MDN All about functions - important', url: 'https://mdn.com/functions123' });

// Display full list
console.log(bookmarks.getFullList());

// Find by query
console.log(bookmarks.getBookmarksByQuery('MDN'));