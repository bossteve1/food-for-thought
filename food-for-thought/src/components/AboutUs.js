import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import image1 from "../images/fathul-abrar-T-qI_MI2EMA-unsplash.jpg"
import image2 from "../images/victoria-shes-UC0HZdUitWY-unsplash.jpg"
import image3 from "../images/lily-banse--YHSwy6uqvk-unsplash.jpg"



function AboutUs() {
  return (
    <Container>
      <Row>
        <Col>1 of 1</Col>
        <Col>
          <Row>
            <Col>
              <img   height="200" className='img-fluid' src={image1} alt="ima"/>            
            </Col>
            <Col>
              <img  className='img-fluid' src={image2} alt="ima"/> 
            </Col>
          </Row>
          <Row>
            <Col>
              <img  className='img-fluid' src={image3} alt="ima"/>
            </Col>
            <Col>1 of 1</Col>
          </Row>
        </Col>

      </Row>
    </Container>
  )
}

export default AboutUs