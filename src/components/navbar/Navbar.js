import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo-nav.png'
export default function navbar() {
    return (
        <div className='container-sm'>
            <h1>Navbar</h1>
            <nav className='navbar navbar-expand-sm'>
                <div className='container-fluid'>
                    <img src={logo} alt="Logo" className='navbar-brand' />
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a href="#" className='nav-link'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link'>About Us</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link'>Features</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link'>Contact</a>
                        </li>
                    </ul>
                    <form action="" className=''>
                        <button className='btn btn-outline-primary px-4 mx-2'>Sign in</button>
                        <button className='btn btn-primary px-4'>Sign up</button>
                    </form>
                    
                </div>
            </nav>
        </div>
    );
}