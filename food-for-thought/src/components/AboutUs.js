import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import image1 from "../images/jimmy-dean-Yn0l7uwBrpw-unsplash.jpg"
import image2 from "../images/image 2.jpg"
import image3 from "../images/lily-banse--YHSwy6uqvk-unsplash.jpg"
import image4 from  "../images/image4.jpg"


function AboutUs() {
  return (
    <Container>
      <Row>
        <Col>1 of 1</Col>
        <Col>
          <Row>
            <Col>
            <img  className='img-fluid mt-3' src={image3} alt="ima"/>            
            </Col>
            <Col>
              <img  className='img-fluid mt-3' src={image2} alt="ima"/> 
            </Col>
          </Row>
          <Row>
            <Col>
              <img  className='img-fluid mt-3' src={image1} alt="ima"/>
            </Col>
            <Col>
              <img  className='img-fluid mt-3' src={image4} alt="ima"/>
            </Col>
          </Row>
        </Col>

      </Row>
    </Container>
  )
}

export default AboutUs