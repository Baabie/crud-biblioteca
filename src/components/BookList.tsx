import React from "react";
import { Book } from "../types";

interface BookListProps {
  books: Book[];
  deleteBook: (id: string) => void;
  editBook: (book: Book) => void;
  viewDetails: (book: Book) => void;
}

const BookList: React.FC<BookListProps> = ({
  books,
  deleteBook,
  editBook,
  viewDetails,
}) => {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h3>
            {book.title} ({book.year})
          </h3>
          <p>Autor: {book.author}</p>
          <button onClick={() => viewDetails(book)}>Ver Detalhes</button>
          <button onClick={() => editBook(book)}>Editar</button>
          <button onClick={() => deleteBook(book.id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
