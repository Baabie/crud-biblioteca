import React, { useState } from "react";
import { Book } from "../types";

interface AddBookFormProps {
  addBook: (book: Book) => void;
}

const AddBookForm: React.FC<AddBookFormProps> = ({ addBook }) => {
  const [newBook, setNewBook] = useState<Book>({
    id: "",
    title: "",
    author: "",
    year: new Date().getFullYear(),
    dateAdded: new Date().toISOString().split("T")[0],
    genre: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newBook.year > new Date().getFullYear()) {
      alert("O ano de publicação não pode ser no futuro!");
      return;
    }
    addBook(newBook);
    setNewBook({
      id: "",
      title: "",
      author: "",
      year: new Date().getFullYear(),
      dateAdded: new Date().toISOString().split("T")[0],
      genre: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="id"
        value={newBook.id}
        onChange={handleChange}
        placeholder="ID"
        required
      />
      <input
        name="title"
        value={newBook.title}
        onChange={handleChange}
        placeholder="Título"
        required
      />
      <input
        name="author"
        value={newBook.author}
        onChange={handleChange}
        placeholder="Autor"
        required
      />
      <input
        name="year"
        type="number"
        value={newBook.year}
        onChange={handleChange}
        placeholder="Ano de Publicação"
        required
      />
      <input
        name="genre"
        value={newBook.genre}
        onChange={handleChange}
        placeholder="Gênero"
        required
      />
      <textarea
        name="description"
        value={newBook.description}
        onChange={handleChange}
        placeholder="Descrição"
        required
      />
      <button type="submit">Adicionar Livro</button>
    </form>
  );
};

export default AddBookForm;
