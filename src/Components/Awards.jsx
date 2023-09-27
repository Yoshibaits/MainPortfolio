import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import WebDev2023 from '../assets/Photos/Awards-Cert/Web Dev Bootcamp Certificate - Neil Gonzales img.jpg'
import DataAnalytics from '../assets/Photos/Awards-Cert/Data Analytics Certificate.jpg'
import HCIACloudService from '../assets/Photos/Awards-Cert/Huawei - HCIA Cloud Service V2.2 Certificate.png'
import Imagemanagement from '../assets/Photos/Awards-Cert/Huawei - Image Management _ Elastic Volume Service Certificate-page-001.jpg'
import Computecloud from '../assets/Photos/Awards-Cert/Huawei - Compute Cloud Services Certificate (March 12)-page-001.jpg'
import Python from '../assets/Photos/Awards-Cert/Python Essentials Certificate-page-001.jpg'
import Sap from '../assets/Photos/Awards-Cert/Neil-Gonzales-Sap-Certificate-page-001.jpg'
import Image from 'react-bootstrap/esm/Image'
import award1 from '../assets/Photos/Awards-Cert/Award-Grad.png'
import '../Components/Awards.css'



function Awards(){
  return (
      <div>
          <Container>
          <h1 className='my-5 text-center'>Awards</h1>
          <div className='my-5'>
            <Row>
              <Col className='d-flex justify-content-center'>
                <div >
                <Image className='award-img' src={award1}/>
                </div>
              </Col>
              <Col className='d-flex align-items-center'>
                <div>
                  <h3>
                    Graduated with honor
                  </h3>
                  <p className='lead'>
                    Graduated as Cumlaude with a cumulative GWA of 1.45
                  </p>
                </div>
              </Col>
            </Row>
              <Col>

              </Col>
            <Row>

            </Row>
          </div>
          <h1 className='my-5 text-center'>Certificate</h1>
          <div className='my-3'>
            {/* 1st Row */}
            <Row>
              <Col>
                  <Card style={{ height: '26rem'}}>
                      <div className='my-auto'>
                        <a href='https://drive.google.com/file/d/1fEuGQrYygfPan3Q6XlbcAuJxAY6hRb9X/view?usp=drive_link'>
                        <Card.Img variant='top' className='image-custom px-3 mb-2' src={WebDev2023} ></Card.Img>
                        </a>
                      <Card.Title className='mx-2 text-center'>
                        <a className='text_custom' href='https://drive.google.com/file/d/1fEuGQrYygfPan3Q6XlbcAuJxAY6hRb9X/view?usp=drive_link'>
                          The Complete 2023 Web Development Bootcamp Certificate
                          </a>
                        </Card.Title>
                      </div>
                  </Card>
              </Col>
              <Col >
                  <Card style={{ height: '26rem'}}>
                      <div className='my-auto'>
                        <a href='https://drive.google.com/file/d/1ikEZwuls3WDbcn-7ALNjiHXH2WiDmUo3/view?usp=drive_link'>
                        <Card.Img variant='top' className='image-custom px-3' src={DataAnalytics}></Card.Img>
                        </a>
                      <Card.Title className='mx-2 text-center'>
                        <a className='text_custom' href='https://drive.google.com/file/d/1ikEZwuls3WDbcn-7ALNjiHXH2WiDmUo3/view?usp=drive_link'>
                        Data Analytics Certificate
                        </a>
                        </Card.Title>
                      </div>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ height: '26rem'}}>
                      <div className='my-auto'>
                        <a href='https://drive.google.com/file/d/18SkRtuXU8cjpIKgsGOdNsH5F6-Ugdfv8/view'>
                        <Card.Img variant='top' className='image-custom px-3 mb-2' src={HCIACloudService}></Card.Img>
                        </a>
                      <Card.Title className='mx-2 text-center'>
                        <a className='text_custom' href='https://drive.google.com/file/d/18SkRtuXU8cjpIKgsGOdNsH5F6-Ugdfv8/view'>
                          Huawei - HCIA Cloud Service V2.2
                          </a>
                      </Card.Title>
                      {/* <Card.Text>Date Issued:</Card.Text> */}
                      </div>
                  </Card>
                </Col>
            </Row>
          </div>
            {/* 2nd Row */}
          <div className='my-3'>
            <Row>
              <Col >
                <Card  style={{ height: '26rem'}}>
                  <div className='my-auto'>
                    <a href='https://drive.google.com/file/d/1f-7rz1gp5I4Z7EglbtXQBDfkemzDwNH4/view?usp=drive_link'>
                      <Card.Img variant='top' className='image-custom mb-2' src={Imagemanagement}></Card.Img>
                    </a>
                    <Card.Title className='mx-2 text-center'>
                      <a className='text_custom' href='https://drive.google.com/file/d/1f-7rz1gp5I4Z7EglbtXQBDfkemzDwNH4/view?usp=drive_link'>
                      Huawei - Image Management & Elastic Volume Service Certificate
                      </a>
                    </Card.Title> 
                  </div>
                </Card>
              </Col>
              <Col>
                <Card style={{ height: '26rem'}}>
                  <div className='my-auto'>
                      <a href='https://drive.google.com/file/d/148BWvcz84B4-zvH7KLwS854RNuhXa5-2/view'>
                        <Card.Img variant='top' className='image-custom mb-2' src={Computecloud}></Card.Img>
                      </a>
                      <Card.Title className='mx-2 text-center'>
                        <a className='text_custom' href='https://drive.google.com/file/d/148BWvcz84B4-zvH7KLwS854RNuhXa5-2/view'>
                        Huawei - Compute Cloud Services
                        </a>
                      </Card.Title> 
                    </div>
                </Card>
              </Col>

              <Col>
                <Card style={{ height: '26rem'}}>
                  <div className='my-auto'>
                    <a href='https://drive.google.com/file/d/1FclpsDcHtTYLaxO8c0Wv0-gOpn2EVfwF/view'>
                      <Card.Img variant='top' className='image-custom mb-2' src={Python}></Card.Img>
                    </a>
                    <Card.Title className='mx-2 text-center'>
                      <a className='text_custom' href='https://drive.google.com/file/d/1FclpsDcHtTYLaxO8c0Wv0-gOpn2EVfwF/view'>
                      Python Essentials Certificate
                      </a>
                    </Card.Title>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
              {/* 3rd Row */}

            <Row className="justify-content-md-center">
                <Col md lg="4">
                  <Card style={{ height: '26rem'}}>
                    <div className='my-auto'>
                      <a href='https://drive.google.com/file/d/17YGPzxYNyXLMo7DtO6TA2aejnaN-1dVx/view'>
                        <Card.Img variant='top' className='image-custom px-3 mb-2' src={Sap}></Card.Img>
                      </a>
                      <Card.Title className='mx-2 text-center'>
                        <a className='text_custom' href='https://drive.google.com/file/d/17YGPzxYNyXLMo7DtO6TA2aejnaN-1dVx/view'>
                          Sap Business One Certificate
                        </a>
                      </Card.Title>
                    </div>
                  </Card>
                </Col>
            </Row>
          </Container>
      </div>
  )
}

export default Awards;

// style={{width: '30rem'}}