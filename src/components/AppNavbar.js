import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function AppNavbar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Link to="/" className='navbar-brand'>Navbar</Link>
                    <Nav className="me-auto">
                        <Link to="/ProductesPage" className='nav-link'>Producte</Link>
                        <Link to="/CartPage" className='nav-link'>Cart -1</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}