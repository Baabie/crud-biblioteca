import React from "react";
import { Book } from "../types";

interface BookDetailsProps {
  book: Book;
}

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>Autor: {book.author}</p>
      <p>Ano de Publicação: {book.year}</p>
      <p>Gênero: {book.genre}</p>
      <p>Descrição: {book.description}</p>
      <p>Data de Cadastro: {book.dateAdded}</p>
    </div>
  );
};

export default BookDetails;
