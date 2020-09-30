import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import logo from '../Images/logo.png'

import { 
  apptsButtonStyles,
  buttonClasses,
  colClasses, 
  heroContentStyles,
  heroRowStyles, 
  rowClasses,
  servicesButtonStyles,
  whyButtonStyles
} from '../styles';

const Hero = () => {
  return (
    <div 
      className={rowClasses}
      style={heroRowStyles}
    >
      <div
        className={colClasses}
        style={heroContentStyles}
      >
        <img 
          alt="" 
          className="img-fluid"
          src={logo} 
        />
        <h1>Redefining Tire Safety and Performance</h1>
        <div>
          <AnchorLink href="#services">
            <button 
              className={buttonClasses}
              style={servicesButtonStyles}
              type="button" 
            >
              Services
            </button>
          </AnchorLink>
          <AnchorLink href="#booking">
            <button 
              className={buttonClasses}
              style={apptsButtonStyles}
              type="button" 
            >
              Appointments
            </button>
          </AnchorLink>
          <AnchorLink href="#info">
            <button 
              className={buttonClasses}
              style={whyButtonStyles}
              type="button" 
            >
              Why N<sub>2</sub>
            </button>
          </AnchorLink>
        </div>
      </div>
    </div>
  )
};

export default Hero;