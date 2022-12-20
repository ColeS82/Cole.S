import Clock from '../Clock/Clock'
import logo from '../../images/channels4_profile.jpg'
import './Header.css'

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid mx-2">
                    <img id='logo' src={logo} className="col"/>
                    <div className='text-white pt-3 ps-1 col-sm-1'>
                        Cole.S
                    </div>
                    <div id='clock' className="text-secondary text-center col-sm-9">
                        <Clock />
                    </div>
                    <button className="navbar-toggler col-sm-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="col justify-content-end collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">My Work</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}