import React from 'react'

import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import { NavLink } from 'react-router-dom';

import './Hero.css'

const Hero = () => {
  return (
    <Col lg={12} className="p-0">
        <Jumbotron className="Hero">
            <Image className="Hero-Image" src="./images/hero_image.jpg" fluid />
        </Jumbotron>
  </Col>
  )
}

export default Hero




