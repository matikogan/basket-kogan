import React, {useContext} from 'react';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom' ;
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from '../../Context/CartContext';
 

const NavMenu = () => {

    const {cartProducts} = useContext(CartContext)
  
    return (
        <header>
            <Navbar className='navbar'>
                <Container>
                    <Navbar.Brand>
                        <Link to={'/'}><img
                            src="../logo1.png"
                            className="d-inline-block align-top logo-container"
                            alt="Logo Basketball"
                        /></Link>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home">
                            <Link to={'/'}><button id='btn-navbar'>Home</button></Link>
                        </Nav.Link>  
                        <DropdownButton variant="outline-secondary" title="Produts" id="input-group-dropdown-1">
                            <Dropdown.Item>
                                <Link to={'/regular-season'}>Regular Season 2022</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={'/all-star'}>All-Star Edition</Link>
                            </Dropdown.Item>
                        </DropdownButton>
                        <Nav.Link>
                            <Link to={'/contact'}><button id='btn-navbar'>Contact</button></Link>
                        </Nav.Link>  
                        <Nav.Link>
                          <Link to='./'><ShoppingCartIcon /> 
                          </Link>
                        </Nav.Link>
                        <p id='cart-amount'>{cartProducts.length}</p>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}


export default NavMenu

     