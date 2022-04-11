import './assets/Navbar.css';
import './assets/navbar.js';
import favicon from './assets/favicon.png';

export default function Navbar() {
    return (
        <div className='header-container'>
            <div id='top-bar'>
                <div className='brand-container'>
                    <img src={favicon} className="img-logo" alt='logo'></img>
                    <span className='brand-text'>Jesse's Code</span>
                </div>
                <span className='fa fa-bars'></span>
            </div>
            <nav className='navbar' id='nav'>
                <div className='brand-container'>
                    <img src={favicon} className="img-logo" alt='logo'></img>
                    <span className='brand-text'>Jesse's Code</span>
                </div>
                <ul className='nav-list'>
                    <li className='nav-item'><a href='/' className='nav-link'><i className='fa fa-home'></i> Home</a></li>
                    <li className='nav-item'><a href='/about' className='nav-link'><i className='fa fa-user'></i> About Me</a></li>
                    <li className='nav-item'><a href='/contact' className='nav-link'><i className='fa fa-phone'></i> Contact</a></li>
                    <li className='nav-item disable'><a href='/' className='nav-link'><i className='fa fa-tasks'></i> Portfolio</a></li>
                </ul>
            </nav>
        </div>
    )
}