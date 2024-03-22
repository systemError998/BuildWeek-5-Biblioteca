import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ActiveBookings from '../Components/ActiveBookings'
import ProfileDetail from '../Components/ProfilePageComp/ProfileDetail'
import ExpiredBookings from '../Components/ProfilePageComp/ExpiredBookings'
import Footer from '../Components/Footer'

export default function ProfilePage() {
  return (
    <Container>
      {/* {posts.length > 0 ?  */} 
      <Row>
        <Col className="d-none d-md-block" md={{ span: 5 }} lg={2}>
          { <div style={{ height: "10rem", border: "1px solid black" }}></div> }
         <ActiveBookings />
        </Col>
        <Col md={{ span: 7 }} lg={{ span: 8 }}>
          {/* Componenti Main*/}
          { <div style={{ height: "10rem", border: "1px solid black" }}></div> }
          <ProfileDetail />
           
        </Col>
        <Col className="d-none d-md-block" lg={2} style={{ position: "relative" }}>
          {/* Componenti Sidebar Destro*/}
          { <div style={{ height: "10rem", border: "1px solid black" }}></div> }
          <ExpiredBookings />
        </Col>
      </Row> 
      {/* : <LoadingHomeComponent />}  */}

      <Footer />

      </Container>
  )
}
