import React, {useContext} from 'react';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom' ;
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CartContext from '../../Context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';




const NavMenu = () => {

    const {cartProducts} = useContext(CartContext)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
        };
    const handleClose = () => {
    setAnchorEl(null);
        };

  
    return (
        <header className='position-sticky'>
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
                        <Nav.Link>
                            <Link to={'/'}><button id='btn-navbar'>Home</button></Link>
                        </Nav.Link>  
                        {/*<DropdownButton variant="outline-secondary" title="Produts" id="input-group-dropdown-1">
                            <Dropdown.Item>
                                <Link to={'/regular-season'}>Regular Season 2022</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to={'/all-star'}>All-Star Edition</Link>
                            </Dropdown.Item>
                        </DropdownButton>*/}
                        <div className="btn-container">
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                className='product-btn'
                            >
                                Products
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                <Link to='/regular-season'><MenuItem onClick={handleClose}>Regular Season</MenuItem></Link>
                                <Link to='/all-star'><MenuItem onClick={handleClose}>All-Star</MenuItem></Link>
                            </Menu>
                        </div>
                        <Nav.Link>
                            <Link to={'/contact'}><button id='btn-navbar'>Contact</button></Link>
                        </Nav.Link>  
                        <Nav.Link>
                        <CartWidget />
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}


export default NavMenu

     