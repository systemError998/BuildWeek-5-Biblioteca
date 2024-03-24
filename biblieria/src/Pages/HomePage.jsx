import React, { useEffect, useState } from 'react';
import axios from "../api/axios";
import { Container, Col, Row,Button } from "react-bootstrap";
import CategoriesList from '../Components/HomepageComp/CategoriesList'
import BooksList from '../Components/HomepageComp/BooksList'
import LoadingHomeComponent from '../Components/HomepageComp/LoadingHomeComponent'
import Pagination from '../Components/Pagination'
import MyFavorites from '../Components/MyFavorites'
import ActiveBookings from '../Components/ActiveBookings'
import Footer from '../Components/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { getAuthors } from '../slice/authorSlice';
import { getCategorie } from '../slice/categorySlice';
import {getAllBooks} from "../slice/bookSlice";
import FakeCarousel from '../Components/FakeCarousel';

export default function HomePage() {
  const dispatch = useDispatch();
  const authors= useSelector(state=>state.authors.listaAuthors);
  const loading= useSelector(state=>state.authors.loading);
  const erros= useSelector(state=>state.authors.error);
  const category= useSelector(state=>state.categorie.listaCategorie);
  const listaLibri = useSelector(state => state.libri.listaLibri);

  async function handleSubmit(e) {
    e.preventDefault();
  
    /* await axios.get("/sanctum/csrf-cookie").then(response=>console.log(response)).catch(error=>console.log(error));

    await axios.post("/login", {
      email: "test@example.com",
      password: "password"
    }).then(response=>console.log(response)).catch(error=>console.log(error));

    await axios.get("/sanctum/csrf-cookie").then(response=>console.log(response)).catch(error=>console.log(error)); */
    dispatch(getAllBooks({category:"Molestias", page:"2"}));
  }
  

  
  useEffect(()=>{
    dispatch(getAuthors())
  },[])
  useEffect(()=>{
    console.log(listaLibri);
  },[listaLibri])

  useEffect(()=>{
    console.log(authors)
  },[authors])
/* 
  useEffect(()=>{
    dispatch(getCategorie())
  },[])
  
  useEffect(()=>{
    console.log(category)
  },[category])
   */
  
  return (
    <>
      <FakeCarousel />
      <Button onClick={handleSubmit}>CLICCA QUI PERDIANA</Button>
      <Container>
      {/* {posts.length > 0 ?  */}
      <Row>
        <Col className="d-none d-md-block" md={{ span: 5 }} lg={2}>
          {/* { <div style={{ height: "10rem", border: "1px solid black" }}></div> } */}
          <CategoriesList />
        </Col>
        <Col md={{ span: 7 }} lg={{ span: 8 }}>
          {/* Componenti Main*/}
          {/* { <div style={{ height: "10rem", border: "1px solid black" }}></div> } */}
          <BooksList />
          <Pagination />
        </Col>
        <Col className="d-none d-md-block" lg={2} style={{ position: "relative" }}>
          {/* Componenti Sidebar Destro*/}
          {/* { <div style={{ height: "10rem", border: "1px solid black" }}></div> } */}
          <MyFavorites />
          <ActiveBookings />
        </Col>
      </Row> 
      {/* : <LoadingHomeComponent />}  */}

      <Footer />

      </Container>
    </>
   
  )
}
