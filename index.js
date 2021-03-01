class BookmarksCollection {
    constructor() {
        this.bookmarksList = [];
    }

    getNextId() {
        const last = this.bookmarksList[this.bookmarksList.length - 1];

        if (!last) {
            return 1;
        }

        return last.id + 1;
    }

    addBookmark(title, url) {
        const bookmark = {
            // Could run into duplicates
            // id: this.bookmarksList.length + 1,
            // Use Math.random or Date.now() to generate random id-s
            // get last item's id and increase by 1
            id: this.getNextId(),
            title,
            url,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        this.bookmarksList.push(bookmark);
    }

    removeBookmarkById(id) {
        this.bookmarksList = this.bookmarksList.filter((bookmark) => {
            return bookmark.id !== id;
        });
    }

    updateBookmarkById(id, newBookmark) {
        // find the bookmark to update
        this.bookmarksList = this.bookmarksList.map((bookmark) => {
            if (bookmark.id === id) {
                return {
                    ...bookmark,
                    ...newBookmark,
                    updatedAt: new Date()
                }
            } else {
                return bookmark;
            }
        });
    }

    getFullList(order = 'dsc') { // asc
        this.bookmarksList.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return order === 'dsc' ? -1 : 1;
            }

            if (a.updatedAt < b.updatedAt) {
                return order === 'dsc' ? 1 : -1;
            }

            return 0;
        });

        return this.bookmarksList.map((bookmark, index) => {
            return `${index + 1}. ${bookmark.title}: ${bookmark.url}`;
        }).join('\n');
    }

    getBookmarksByQuery(query) {
        const matchingBookmarks = this.bookmarksList.filter((bookmark) => {
            return bookmark.title.includes(query);
        });

        // Add missing sorting

        return matchingBookmarks.map((bookmark, index) => {
            return `${index + 1}. ${bookmark.title}: ${bookmark.url}`;
        }).join('\n');
    }
}


const bookmarks = new BookmarksCollection();

bookmarks.addBookmark('MDN Class', 'https://mdn.com/classes');

bookmarks.addBookmark('MDN Functions', 'https://mdn.com/functions');

// console.log(bookmarks);

// console.log('Removing...');

bookmarks.removeBookmarkById(2);

// console.log(bookmarks);

bookmarks.addBookmark('MDN Functions', 'https://mdn.com/functions');

bookmarks.addBookmark('MDN Arrays', 'https://mdn.com/arrays');

console.log(bookmarks.getFullList());

bookmarks.updateBookmarkById(2, { title: 'MDN All about functions' });
bookmarks.updateBookmarkById(2, { url: 'https://mdn.com/functions123' });
bookmarks.updateBookmarkById(2, { title: 'MDN All about functions - important', url: 'https://mdn.com/functions123' });

console.log(bookmarks.getFullList());

console.log(bookmarks.getBookmarksByQuery('MDN'));