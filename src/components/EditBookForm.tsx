import React, { useState } from "react";
import { Book } from "../types";

interface EditBookFormProps {
  bookToEdit: Book;
  updateBook: (book: Book) => void;
}

const EditBookForm: React.FC<EditBookFormProps> = ({
  bookToEdit,
  updateBook,
}) => {
  const [editedBook, setEditedBook] = useState<Book>(bookToEdit);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEditedBook({ ...editedBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateBook(editedBook);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={editedBook.title}
        onChange={handleChange}
        placeholder="Título"
        required
      />
      <input
        name="author"
        value={editedBook.author}
        onChange={handleChange}
        placeholder="Autor"
        required
      />
      <input
        name="year"
        type="number"
        value={editedBook.year}
        onChange={handleChange}
        placeholder="Ano de Publicação"
        required
      />
      <input
        name="genre"
        value={editedBook.genre}
        onChange={handleChange}
        placeholder="Gênero"
        required
      />
      <textarea
        name="description"
        value={editedBook.description}
        onChange={handleChange}
        placeholder="Descrição"
        required
      />
      <button type="submit">Salvar Alterações</button>
    </form>
  );
};

export default EditBookForm;
