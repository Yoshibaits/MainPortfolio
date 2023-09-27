import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand'
import Stack from 'react-bootstrap/Stack'

function Firstpart(){
  return (
    <div className='mb-5'>
        <Navbar expand='lg' className='bg-name-tertiary'>
            <Container>
                <NavbarBrand href='#Home'>Portfolio</NavbarBrand> 
                    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                    <Nav>
                        <Stack  direction='horizontal' gap={3}>
                        <Nav.Link className='p-2' href='#Home'>Home</Nav.Link>
                        <Nav.Link className='p-2' href='#About'>About</Nav.Link>
                        <Nav.Link className='p-2' href='#Contact'>Contact</Nav.Link>
                        </Stack>                
                    </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Firstpart;