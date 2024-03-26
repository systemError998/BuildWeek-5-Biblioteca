import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { useNavigate, useParams } from "react-router-dom";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import useAuthContext from "../../context/AuthContext";
import { createBooking } from "../../slice/bookingSlice";
import ModBook from "../ModBook";

export default function BookDetailComponent() {
  const { user } = useAuthContext();

  const mybooking = useSelector((state) => state.bookings.listaBooking);
  console.log(mybooking);
  let { id } = useParams();

  let [book, setBook] = useState({});
  let dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios("/api/book/" + id)
      .then((response) => {
        console.log(response);
        setBook(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (mybooking) {
      let alreadyBooked = mybooking.some((b) => b.book_id == id);
      console.log(alreadyBooked);
    }
  }, [book]);

  //   update book


  // end update book

  return book.author ? (
    <>
      <div className="container bg-white rounded-2 p-5 my-5 font-sans">
        <div>
          {user && user.is_admin ? (
            <div>
              <button className="btn btn-light w-75">Elimina libro</button>
              <ModBook  id={id}/>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="row">
          <div className="col">
            <div className="border-1 border-light rounded-1">
              <Image src={book.cover_url}></Image>
            </div>
          </div>
          <div className="col">
            <h1 className="uppercase fs-2">{book.title}</h1>
            <h3 className="text-secondary">
              <button
                className="flex no-underline"
                onClick={() => navigate(`/author/${book.author.id}`)}
              >
                <span className="testoSide"> {book.author.full_name} </span>
              </button>
            </h3>
            <div className="my-3">
              <p className="m-0">
                <b>Anno pubblicazione: </b>{" "}
                <span className="text-secondary">{book.year}</span>
              </p>
              <p className="m-0">
                <b>Categoria: </b>{" "}
                <span className="text-secondary">{book.category.name}</span>
              </p>
              <p className="m-0">
                <b>Copie disponibili: </b>{" "}
                <span className="text-secondary">{book.available_copies}</span>
              </p>
            </div>
            <div className="my-4">{book.abstract}</div>
          </div>
        </div>
        <div className="row text-center mt-3">
          <div className="col">
            <button
              className="btn btn-dark w-75"
              onClick={() => dispatch(createBooking(book.id))}
            >
              PRENOTA
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div class="container bg-info p-5">
      <h1>mettere gestione caricamento</h1>
    </div>
  );
}
