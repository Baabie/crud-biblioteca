// src/App.tsx
import React, { useState } from "react";
import AddBookForm from "./components/AddBookForm";
import BookList from "./components/BookList";
import EditBookForm from "./components/EditBookForm";
import BookDetails from "./components/BookDetails";
import { Book } from "./types";

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const addBook = (book: Book) => setBooks([...books, book]);

  const updateBook = (updatedBook: Book) => {
    setBooks(
      books.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
    setSelectedBook(null);
  };

  const deleteBook = (id: string) => {
    if (window.confirm("Tem certeza de que deseja excluir este livro?")) {
      setBooks(books.filter((book) => book.id !== id));
    }
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Biblioteca Encantada</h1>
      <input
        type="text"
        placeholder="Pesquisar por título ou autor"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <AddBookForm addBook={addBook} />
      <BookList
        books={filteredBooks}
        deleteBook={deleteBook}
        editBook={setSelectedBook}
        viewDetails={setSelectedBook}
      />
      {selectedBook && <BookDetails book={selectedBook} />}
    </div>
  );
};

export default App;
