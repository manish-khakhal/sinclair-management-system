import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <footer style={{ paddingTop: 75 }}>
      <Navbar
        className="shadow-sm justify-content-center"
        bg="light"
        variant="light"
        fixed="bottom"
      >
        <Navbar.Text>
          © 2020{' '}
          <a
            href="https://thesagenews.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Sage Publication
          </a>
        </Navbar.Text>
      </Navbar>
    </footer>
  );
};

export default Footer;
