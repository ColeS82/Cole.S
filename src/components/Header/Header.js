import { Link } from 'react-router-dom'
import Clock from '../Clock/Clock'
import logo from '../../images/channels4_profile.jpg'
import './Header.css'

export default function Header() {

    return (
        <header>
            <nav className="navbar navbar-expand-sm bg-black navbar-dark">
                <div className="container-fluid mx-2">
                    <div className='col-sm-3'>
                        <Link to='/' className='text-decoration-none'>
                            <img id='logo' className='mx-1' src={logo} alt='logo' />
                            
                            <div className='text-white '>
                                Cole.S
                            </div>
                        </Link>
                    </div>
                    <Clock />

                    <button className="navbar-toggler col-sm-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="col justify-content-end collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Tools</a>
                                <ul className="dropdown-menu" style={{ backgroundColor: 'rgb(18, 164, 237)' }}>
                                    <li>
                                        <a className="dropdown-item" href="#">Password Generator</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="https://coles82.github.io/Workday-Sceduler/" target='_blank'>Work Day Scheduler</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link to='/Myworks' className="nav-link" href="#">My Work</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/Aboutme" className="nav-link">About Me</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    )
}