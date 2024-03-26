import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import axios from "../api/axios";
import { Form } from "react-bootstrap";

export default function ModBook({id}) {

    const [bookData, setBookData] = useState({});

    const getBookData = () => {
      axios(`/api/book/${id}/edit`).then((res) => {
        setBookData(res.data);
   
        console.log(res.data);
      });
    };
  
    useEffect(() => {
      getBookData();
    }, []);

    useEffect(() => {
        setTitle(bookData.book.title);
        setAuthor(bookData.book.author_id);
        setYear(bookData.book.year);
        setAvailableCopies(bookData.book.available_copies);
        setCoverUrl(bookData.book.cover_url);
        setAbstract(bookData.book.abstract);
        setCategory(bookData.book.category_id);
        setCategories(bookData.categories);
        setAuthors(bookData.authors);

      }, [bookData]);

  const [title, setTitle] = useState();
  const [author_id, setAuthor] = useState();
  const [year, setYear] = useState();
  const [available_copies, setAvailableCopies] = useState();
  const [cover_url, setCoverUrl] = useState();
  const [abstract, setAbstract] = useState();
  const [category_id, setCategory] = useState();

  const [authors, setAuthors] = useState();
  const [categories, setCategories] = useState();


  const handleUpdateBook = () => {
    axios.put(`api/book/${bookData.book.id}`, {
      title,
      author_id,
      abstract,
      year,
      cover_url,
      available_copies,
      category_id,
    });
  };

  return (
     bookData.authors ?
     <>
      <button
        type="button"
        class="btn btn-dark"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i class="bi bi-card-text"></i>
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modifica Libro
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleUpdateBook}>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  class="form-control my-1"
                  name="title"
                  placeholder="titolo libro"
                />

                <Form.Select
                  aria-label="Default select example"
                  name="autore"
                  onChange={(e) => setAuthor(e.target.value)}
                  value={author_id}
                >
                  {bookData.authors.map((author) => {
                    if (author.id === bookData.book.author.id) {
                      return (
                        <option
                          key={author.id}
                          selected="selected"
                          value={author.id}
                        >
                          {author.full_name}
                        </option>
                      );
                    } else {
                      return (
                        <option key={author.id} value={author.id}>
                          {author.full_name}
                        </option>
                      );
                    }
                  })}
                </Form.Select>

                <input
                  type="number"
                  class="form-control my-1"
                  name="year"
                  placeholder="anno"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
                <input
                  type="number"
                  class="form-control my-1"
                  name="avalaible_copies"
                  placeholder="copie disponibili"
                  value={available_copies}
                  onChange={(e) => setAvailableCopies(e.target.value)}
                />
                <input
                  type="text"
                  class="form-control my-1"
                  name="cover_url"
                  placeholder="url immagine"
                  value={cover_url}
                  onChange={(e) => setCoverUrl(e.target.value)}
                />
                <input
                  type="text"
                  class="form-control my-1"
                  name="abstract"
                  placeholder="descrizione"
                  value={abstract}
                  onChange={(e) => setAbstract(e.target.value)}
                />

                <Form.Select
                  aria-label="Default select example"
                  name="category"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {bookData.categories.map((category) => {
                    return (
                      <option
                        key={category.id}
                        value={category.id}
                        selected={
                          category.id === bookData.book.category.id
                            ? "selected"
                            : ""
                        }
                      >
                        {category.name}
                      </option>
                    );
                  })}
                </Form.Select>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Chiudi
                  </button>
                  <button type="submit" className="btn btn-success">
                    Salva modifiche
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </> : 'sdfgjmh'
  );
}
