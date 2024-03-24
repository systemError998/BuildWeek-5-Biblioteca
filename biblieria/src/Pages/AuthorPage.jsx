import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RelatedContent from '../Components/RelatedContent'
import AuthorDetail from '../Components/AuthorPageComp/AuthorDetail'
import MyFavorites from '../Components/MyFavorites'
import Pagination from '../Components/Pagination'
import ActiveBookings from '../Components/ActiveBookings'
import Footer from '../Components/Footer'

export const AuthorPage = () => {
  return (
    <>
      <div className='mx-3'>
      {/* {posts.length > 0 ?  */} 
      <Row>
        <Col className="d-none d-md-block" md={{ span: 5 }} lg={2}>
          
         <RelatedContent />
        </Col>
        <Col md={{ span: 7 }} lg={{ span: 8 }}>
          {/* Componenti Main*/}
          <AuthorDetail /> {/* qui dentro ci vorrà il fake carousel */}
           
        </Col>
        <Col className="d-none d-md-block" lg={2} style={{ position: "relative" }}>
          {/* Componenti Sidebar Destro*/}
          <MyFavorites />
          <Pagination />
          <ActiveBookings />
          <Pagination />
        </Col>
      </Row> 
      {/* : <LoadingHomeComponent />}  */}
      </div>
      <Footer />
    </>
  )
}
