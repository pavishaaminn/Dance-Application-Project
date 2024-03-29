import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles  = styled.div`
    .navbar{
      background-color: #222;
    }
    
    .navbar-brand, .navbar-nav .nav-link {
      color: #bbb;

      &:hover {
      color: white;
     } 
    }
    `;

export const Navigationbar = () => {
    return (
        <Styles>
            <Navbar expand="lg">
                <Navbar.Brand href="/">SMDA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/AboutUs">About Us</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/Classical">Classical</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/Modern">Modern</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/Performances">Performances</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/ContactUs">Contact Us</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/Login">Login</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
};