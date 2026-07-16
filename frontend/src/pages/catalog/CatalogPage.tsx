import React, { useState } from 'react';

// Mock data for catalog table
const mockBooks = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", status: "Available" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", status: "Checked Out" },
  { id: 3, title: "1984", author: "George Orwell", status: "Available" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", status: "Available" },
  { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", status: "Checked Out" },
  { id: 6, title: "Lord of the Flies", author: "William Golding", status: "Available" },
  { id: 7, title: "Animal Farm", author: "George Orwell", status: "Checked Out" },
  { id: 8, title: "Brave New World", author: "Aldous Huxley", status: "Available" },
  { id: 9, title: "The Hobbit", author: "J.R.R. Tolkien", status: "Available" },
  { id: 10, title: "Fahrenheit 451", author: "Ray Bradbury", status: "Checked Out" }
];
import { useNavigate } from 'react-router-dom';

// Mock data for catalog table
const mockBooks = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", status: "Available" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", status: "Checked Out" },
  { id: 3, title: "1984", author: "George Orwell", status: "Available" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", status: "Available" },
  { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", status: "Checked Out" },
  { id: 6, title: "Lord of the Flies", author: "William Golding", status: "Available" },
  { id: 7, title: "Animal Farm", author: "George Orwell", status: "Checked Out" },
  { id: 8, title: "Brave New World", author: "Aldous Huxley", status: "Available" },
  { id: 9, title: "The Hobbit", author: "J.R.R. Tolkien", status: "Available" },
  { id: 10, title: "Fahrenheit 451", author: "Ray Bradbury", status: "Checked Out" }
];

interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  status: 'Available' | 'Checked Out';
  genre: string;
}

const CatalogPage: React.FC = () => {
  const navigate = useNavigate();

  // Mock book data - 10 records as specified
  const [books] = useState<Book[]>([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '978-0-7432-7356-5', status: 'Available', genre: 'Fiction' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '978-0-06-112008-4', status: 'Checked Out', genre: 'Fiction' },
    { id: 3, title: '1984', author: 'George Orwell', isbn: '978-0-452-28423-4', status: 'Available', genre: 'Dystopian' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', isbn: '978-0-14-143951-8', status: 'Available', genre: 'Romance' },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', isbn: '978-0-316-76948-0', status: 'Checked Out', genre: 'Fiction' },
    { id: 6, title: 'Lord of the Flies', author: 'William Golding', isbn: '978-0-571-05686-2', status: 'Available', genre: 'Fiction' },
    { id: 7, title: 'Animal Farm', author: 'George Orwell', isbn: '978-0-452-28424-1', status: 'Checked Out', genre: 'Allegory' },
    { id: 8, title: 'Brave New World', author: 'Aldous Huxley', isbn: '978-0-06-085052-4', status: 'Available', genre: 'Science Fiction' },
    { id: 9, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', isbn: '978-0-544-00341-5', status: 'Available', genre: 'Fantasy' },
    { id: 10, title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', isbn: '978-0-439-70818-8', status: 'Checked Out', genre: 'Fantasy' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.isbn.includes(searchTerm)
  );

  const handleBookClick = (bookId: number) => {
    navigate(`/books/${bookId}`);
  };

  return (
    <div className="catalog-page">
      <h1>Library Catalog</h1>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search books by title, author, or ISBN..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="catalog-table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Genre</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map(book => (
              <tr
                key={book.id}
                onClick={() => handleBookClick(book.id)}
                className="book-row"
                style={{ cursor: 'pointer' }}
              >
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{book.genre}</td>
                <td>
                  <span className={`status-indicator ${book.status === 'Available' ? 'available' : 'checked-out'}`}>
                    {book.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CatalogPage;
