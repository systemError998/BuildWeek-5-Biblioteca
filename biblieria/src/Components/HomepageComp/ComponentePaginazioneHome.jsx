
import React, { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../../slice/bookSlice";


export default function ComponentePaginazioneHome() {

  const dispatch = useDispatch();
  const pagineTotali = useSelector(state => state.libri.pagineTotali);
  const paginaCorrente = useSelector(state => state.libri.paginaCorrente);
  const categoriaSelezionata = useSelector(state => state.categorie.categoriaSelezionata);
  const mostraPagine = 7;
  const handlePageClick = (pagina) => {
    window.scrollTo(0, 0);
    dispatch(getAllBooks({category: categoriaSelezionata, page: pagina}));
  };

  let primaPagina = Math.max(1, paginaCorrente - Math.floor(mostraPagine / 2));
  let ultimaPagina = Math.min(pagineTotali, primaPagina + mostraPagine - 1);

  if (ultimaPagina - primaPagina < mostraPagine - 1) {
    primaPagina = Math.max(1, ultimaPagina - mostraPagine + 1);
  }

  const pagine = Array.from(
    { length: ultimaPagina - primaPagina + 1 },
    (_, index) => (
      <Pagination.Item
        style={{ width: "2.5rem" }}
        key={primaPagina + index}
        active={primaPagina + index == paginaCorrente}
        onClick={() => handlePageClick(primaPagina + index)}
      >
        {primaPagina + index}
      </Pagination.Item>
    )
  );

  return (
    <Pagination>
      <Pagination.First onClick={() => handlePageClick(1)} />
      <Pagination.Prev
        onClick={() => handlePageClick(Math.max(1, paginaCorrente - 1))}
      />
      {pagine}
      <Pagination.Next
        onClick={() =>
          handlePageClick(Math.min(pagineTotali, paginaCorrente + 1))
        }
      />
      <Pagination.Last onClick={() => {handlePageClick(pagineTotali)}} />
    </Pagination>
  );
}
