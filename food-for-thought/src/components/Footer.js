import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={4}>
          <p className='fs-3 fw-bold text-success pt-3 px-5'>Food4Thought</p>
          <p className=' px-5'>Foof4Thought is an application <br/> used to find variety of famous food recipes <br/> From all around the world</p>
        </Col>
        <Col xs={6} md={2} className='p-4'>
          <p className='fw-bold fs-4'>About</p>
          <p>About Us</p>
          <p>Recipes</p>
          <p>Download</p>
        </Col>
        <Col xs={6} md={2} className='p-4'>
          <p className='fw-bold fs-4'>Company</p>
          <p>Our Recipes</p>
          <p>Subscribe</p>
          <p>FAQ</p>
        </Col>
        <Col xs={6} md={2} className='p-4'>
          <p className='fw-bold fs-4'>Support</p>
          <p>Account</p>
          <p>Support</p>
          <p>Feedback</p>
        </Col>
        <Col xs={6} md={2} className='p-4'>
          <p className='fw-bold fs-4'>Get in Touch</p>
          <p>Reach out</p>
          <p>Call us</p>
          <p>Email us</p>
        </Col>
      </Row>
      <Row className='bg-success text-center text-white fw-bold p-2'>
        <Col>
          <p>Copyright @bossteve 2022</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer