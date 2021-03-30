import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

// const NavBar = (props) => (
// <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//     <Navbar.Brand href="#home">{props.title} - Strive for food</Navbar.Brand>
//     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//     <Navbar.Collapse id="responsive-navbar-nav">
//         <Nav className="ml-auto">
//             {
//                 props.links.map(link => <Nav.Link key={link} href={'#' + link.toLowerCase()}>{link}</Nav.Link>)
//             }
//         </Nav>
//     </Navbar.Collapse>
// </Navbar>
// )

class NavBar extends Component {
  constructor(props) {
    super(props);
    console.log('rendering class constructor from NavBar.jsx... (3rd task)');
  }

  render() {
    return (
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>
          {this.props.title}
          {this.props.links.includes('Alfredo') ? (
            <p>- The perfect place for pasta lovers</p>
          ) : (
            <p>- Strive for food</p>
          )}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            {this.props.links.map((link) => (
              <Nav.Link key={link} href={'#' + link.toLowerCase()}>
                {link}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;

// functional components are a touch faster than class based ones
