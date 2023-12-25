/* Given an array of objects representing books with title and author properties, transform the array 
to uppercase all book titles and then filter out books written by authors whose name starts with the letter 'J'. */


const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'Brave New World', author: 'Aldous Huxley' }
  ];
  
  const filteredBooks = books
    .map(book => ({
      title: book.title.toUpperCase(),
      author: book.author
    }))
    .filter(book => !book.author.startsWith('J'));
  
  console.log(filteredBooks);
  