import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Image from 'react-bootstrap/esm/Image'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Inasal from '../assets/Photos/Workexp/Mang Inasal Sanroque.png'
import './workexp.css'

function Workexp(){
  return (
    <div>
        <Container>
            <h1 className='text-center my-5'>
                Work Experience
            </h1>
            <Row>
                <Col className='my-auto px-0'>
                    <div className='me-5'>
                        <h2 className='text-end mb-5'>
                            Customer Service Representative, Concentrix
                        </h2>

                        <p className='lead p-auto text-end'>
                        Duration: From June 2022 to March 2023
                        </p>
                    </div>
                </Col>
                <Col className='px-0'>
                    <div >
                        <Image src='https://analyticsindiamag.com/wp-content/uploads/2021/01/concentrix.jpg' fluid />
                    </div>  
                </Col>
            </Row>
            {/* 2nd Row */}
            <Row>
                <Col className='px-0'>
                    <div>
                        <Image src={Inasal} fluid/>
                    </div>
                </Col>
                <Col className='my-auto px-0'>
                    <div className='ms-5'>
                        <h2 className='text-start mb-5'>
                            Crew, Mang Inasal
                        </h2>

                        <p className='lead p-auto text-start'>
                            Duration: From April 2017 from June 2017
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Workexp