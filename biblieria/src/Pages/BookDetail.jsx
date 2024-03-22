import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RelatedContent from '../Components/RelatedContent'
import BookDetailComponent from '../Components/BookDetailComp/BookDetailComponent'
import MyFavorites from '../Components/MyFavorites'
import Pagination from '../Components/Pagination'
import ActiveBookings from '../Components/ActiveBookings'
import Footer from '../Components/Footer'




export const BookDetail = () => {
  return (
    <>
      <Container>
      {/* {posts.length > 0 ?  */}
      <Row>
        <Col className="d-none d-md-block" md={{ span: 5 }} lg={2}>
          { <div style={{ height: "10rem", border: "1px solid black" }}></div> }
         <RelatedContent />
         <RelatedContent />
          
        </Col>
        <Col md={{ span: 7 }} lg={{ span: 8 }}>
          {/* Componenti Main*/}
          { <div style={{ height: "10rem", border: "1px solid black" }}></div> }
          <BookDetailComponent />
           
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
