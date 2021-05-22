import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; ProShop</Col>
          <Col className='text-center py-3'>Copyright2 &copy; ProShop2</Col>
          <Col className='text-center py-3'>Copyright1 &copy; ProShop1</Col>
          <Col className='text-center py-3'>This is from development branch</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
