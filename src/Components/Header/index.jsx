import ProfilePic from "../../Assets/Images/ProfilePic.jpg";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { LanguageContext } from "../../Controller/LanguageProvider";
import { useEffect, useState, useContext } from "react";


export default function Header() {
    const event = new Event("languageChange");
    const {changeLanguage, menuData} = useContext(LanguageContext);
    function handleChangeLanguage() {
        changeLanguage();
    }
    useEffect(() => {
        document.addEventListener("languageChange", handleChangeLanguage);
        return () => {
            document.removeEventListener("languageChange", handleChangeLanguage);
        }
    }, []);
    return (
        <header>
            <Navbar expand="lg" className="header">
                <Container id="reset" className="justify-content-around">
                    <Navbar.Brand><img src={ProfilePic} alt="Profile Picture" id="profile-pic"/></Navbar.Brand>
                    <div className="justify-content-center">
                        <Navbar.Collapse id="basic-navbar-nav">
                        {/*TODO: Reconfigurar OffCanvas*/}
                        <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                Menu
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="me-auto">
                                    <Nav.Link href="/"><p className="meu-link">{menuData.home}</p></Nav.Link>
                                    <Nav.Link href="/about"><p className="meu-link">{menuData.about}</p></Nav.Link>
                                    <Nav.Link href="/contact"><p className="meu-link">{menuData.contact}</p></Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        </Navbar.Collapse>
                    </div>
                    <Navbar.Brand><h2 id="meu-nome">Lucas Baldasso</h2></Navbar.Brand>
                    <Nav>
                        <Nav.Link className="meu-link" onClick={
                            ()=>{document.dispatchEvent(event)}
                        }>
                            <span className="material-symbols-outlined">
                                language
                            </span>
                        </Nav.Link>
                    </Nav>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>
            </Navbar>
        </header>
    );
}