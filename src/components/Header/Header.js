import Clock from '../Clock/Clock'
import logo from '../../images/channels4_profile.jpg'
import './Header.css'

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid mx-2">
                    <img id='logo' src={logo} />

                    <div className='text-white pt-4 ps-1 col-sm-3 '>
                        Cole.S
                    </div>
                    
                    <Clock />
                    
                    <button className="navbar-toggler col-sm-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="col justify-content-end collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">My Work</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Tools</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">About Me</a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
        </header>
    )
}