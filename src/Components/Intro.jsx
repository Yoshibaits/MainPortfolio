import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/Image';
import myImage from '../assets/Photos/GONZALES (27).jpg'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../Components/intro.css';

function Intro(){
  return (
    <div >
        <Container>
            <Row>
                <Col className='my-auto'>
                  <h1 className='text-capitalize text-center'> Hi! my name is Neil Gonzales.</h1>
                  <p className= 'lead text-center'>I am currently looking for a position that will help me expand my knowledge in terms of developing and programming a website. </p>
                </Col>
                <Col className='d-flex justify-content-center'>
                  <Image className='profile' src={myImage} rounded/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
// className='d-flex justify-content-center'
export default Intro;