import React from 'react';
import './Footer.css'
function Footer() {
  return (
    <section className="footer">
      <div className="content">
        
        <div className="top">
          <div className="logo-details">
             <img src="/src/underdog.png" alt="Logo"/>  
          </div>
          <div className="media-icons">
            <a href="" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        
        <div className="link-boxes">
          <ul className="box">
           
          </ul>
        </div>

        
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">
              Copyright © 2025{' '}
              <a href="https://www.omegapsiphi.org" target="_blank" rel="noopener noreferrer">
                Underdog Landscaping
              </a>{' '}
              All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
