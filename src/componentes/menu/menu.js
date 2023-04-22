import {
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import './menu.css';
import icone from '../../img/advogado.png';
import logo from '../../img/logo.webp';

function Menu() {
    return (
        <div>
            <Nav className='bg-primary shadow p-1 justify-content-between'>
                <div className='d-flex justify-content-start align-items-center'>
                    <NavItem>
                        <NavLink className='text-light mr-n2' href='/'> <img className='icone' src={logo}></img> Advogado </NavLink>
                    </NavItem>
                </div>
                <div className='d-flex flex-row align-items-center mr-3'>
                    <NavItem className=''>
                        <NavLink className='text-light m-4' href='/'> Inicio</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='text-light' href='/sobre'> Sobre</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='text-light' href='/contato'> Contato</NavLink>
                    </NavItem>
                </div>
            </Nav>
        </div>
    )
}
export default Menu;