import React from 'react';
import axios from "../api/axios";
import { Container, Col, Row } from "react-bootstrap";
import CategoriesList from '../Components/HomepageComp/CategoriesList'
import BooksList from '../Components/HomepageComp/BooksList'
import LoadingHomeComponent from '../Components/HomepageComp/LoadingHomeComponent'
import Pagination from '../Components/Pagination'
import MyFavorites from '../Components/MyFavorites'
import ActiveBookings from '../Components/ActiveBookings'
import Footer from '../Components/Footer'
export default function HomePage() {

  async function handleSubmit(e) {
    e.preventDefault();
  
    await axios.get("/sanctum/csrf-cookie").then(response=>console.log(response)).catch(error=>console.log(error));

    await axios.post("/login", {
      email: "test@example.com",
      password: "password"
    }).then(response=>console.log(response)).catch(error=>console.log(error));

    await axios.get("/sanctum/csrf-cookie").then(response=>console.log(response)).catch(error=>console.log(error));

    await axios.get("/api/user").catch(error=>console.log(error));
  }

  
  return (
    <>
    <div>HomePage
       <button onClick={handleSubmit}>Cliccami</button></div>
      <Container>
      {/* {posts.length > 0 ?  */}
      <Row>
        <Col className="d-none d-md-block" md={{ span: 5 }} lg={2}>
          { <div style={{ height: "10rem", border: "1px solid black" }}></div> }
          <CategoriesList />
        </Col>
        <Col md={{ span: 7 }} lg={{ span: 8 }}>
          {/* Componenti Main*/}
          { <div style={{ height: "10rem", border: "1px solid black" }}></div> }
          <BooksList />
          <Pagination />
        </Col>
        <Col className="d-none d-md-block" lg={2} style={{ position: "relative" }}>
          {/* Componenti Sidebar Destro*/}
          { <div style={{ height: "10rem", border: "1px solid black" }}></div> }
          <MyFavorites />
          <Pagination />
          <ActiveBookings />
          <Pagination />
        </Col>
      </Row> 
      {/* : <LoadingHomeComponent />}  */}

      <Footer />

      </Container>
    </>
   
  )
}
