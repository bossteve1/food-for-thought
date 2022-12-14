import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import image1 from "../images/jimmy-dean-Yn0l7uwBrpw-unsplash.jpg"
import image2 from "../images/image 2.jpg"
import image3 from "../images/lily-banse--YHSwy6uqvk-unsplash.jpg"
import image4 from  "../images/image4.jpg"


function AboutUs() {
  return (
    <Container id="about">
      <Row>
        <Col xs={12} md={6}className='p-5'>
          <p className='fs-1 text-success fw-bold m-3' >
            ABOUT US
          </p>
          <p className='p-3'>
            Food4thought is here to reduce the thinking process of what to cook 
            and how to cook it.With recipes from all over the world,the perfect meal 
            is just a click away.<br/>Food4thought is here to help you make those delicious 
            and scrumptous meals with very little stress.
          </p>
        </Col>
        <Col xs={12} md={6}>
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
              <img  className='img-fluid mt-3 mb-3' src={image1} alt="ima"/>
            </Col>
            <Col>
              <img  className='img-fluid mt-3 mb-3' src={image4} alt="ima"/>
            </Col>
          </Row>
        </Col>

      </Row>
    </Container>
  )
}

export default AboutUs