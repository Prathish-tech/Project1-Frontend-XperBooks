import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { createBook, getAllBooks, deleteBook } from '../api/bookService';

// Modular InputField component
const InputField = ({ label, name, value, onChange, type = 'text', required = false }) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">{label}</label>
    <input
      type={type}
      className="form-control"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

export default function AddBooks() {
  
  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState({
    title: '',
    authors: '',
    publisher: '',
    year: '',
    category: '',
    pages: ''
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getAllBooks();
        setBooks(data);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      }
    };
  
    fetchBooks();
  }, []);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentBook({ ...currentBook, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Attempting to submit:', currentBook);
    
    try {
      console.log('Calling createBook API...');
      const savedBook = await createBook(currentBook);
      console.log('API response:', savedBook);
      
      // Update the UI with the new book
      setBooks([...books, savedBook]);
      
      // Reset form
      setCurrentBook({
        title: '',
        authors: '',
        publisher: '',
        year: '',
        category: '',
        pages: ''
      });
    } catch (error) {
      console.error('Submission error details:', error);
      
      // Display more detailed error info if available
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
      }
      
      alert('Failed to add book. See console for details.');
    }
  };

  const handleEdit = (book) => {
    setEditing(true);
    setCurrentBook(book);
  };

  const handleDelete = async (id) => {
    try {
      // Call the API to delete the book
      await deleteBook(id);
      // Update local state after successful deletion
      setBooks(books.filter(book => book.id !== id));
    } catch (error) {
      console.error('Failed to delete book:', error);
      alert('Failed to delete book.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container" style={{ maxWidth: "1000px", margin: "30px auto 0" }}>
        <h2 className="mb-4">{editing ? 'Edit Book' : 'Add New Book'}</h2>

        <div className="card mb-4">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <InputField 
                label="Title" 
                name="title" 
                value={currentBook.title} 
                onChange={handleInputChange} 
                required 
              />
              <InputField 
                label="Authors" 
                name="authors" 
                value={currentBook.authors} 
                onChange={handleInputChange} 
                required 
              />
              <InputField 
                label="Publisher" 
                name="publisher" 
                value={currentBook.publisher} 
                onChange={handleInputChange} 
              />
              <InputField 
                label="Year" 
                name="year" 
                value={currentBook.year} 
                onChange={handleInputChange} 
              />
              <InputField 
                label="Category" 
                name="category" 
                value={currentBook.category} 
                onChange={handleInputChange} 
              />
              <InputField 
                label="Pages" 
                name="pages" 
                value={currentBook.pages} 
                onChange={handleInputChange} 
                type="number" 
              />

              <button type="submit" className="btn btn-primary">{editing ? 'Update Book' : 'Add Book'}</button>
            </form>
          </div>
        </div>

        <h2 className="mb-3">Books List</h2>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="table-dark">
              <tr>
                <th>Title</th>
                <th>Authors</th>
                <th>Publisher</th>
                <th>Year</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map(book => (
                <tr>
                  <td>{book.title}</td>
                  <td>{book.authors}</td>
                  <td>{book.publisher}</td>
                  <td>{book.year}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-sm btn-warning"
                        onClick={() => handleEdit(book)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(book.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
