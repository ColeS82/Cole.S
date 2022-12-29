import { Link } from 'react-router-dom'
import Clock from '../Clock/Clock'
import logo from '../../images/channels4_profile.jpg'
import './Header.css'

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid mx-2">
                    <div className='col-sm-3'>
                    <img id='logo'className='mx-1' src={logo} />

                    <div className='text-white '>
                        Cole.S
                    </div>
                    </div>
                    <Clock />
                    
                    <button className="navbar-toggler col-sm-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="col justify-content-end collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/cole.s" className="nav-link">Home</Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">My Work</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Tools</a>
                            </li>

                            <li className="nav-item">
                                <Link to ="/Aboutme" className="nav-link">About Me</Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
        </header>
    )
}