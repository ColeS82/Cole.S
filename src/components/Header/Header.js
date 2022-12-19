export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid mx-3">
                    <a className="navbar-brand col-sm" href="#">Logo</a>
                    <div className="text-secondary text-center col">
                        Time & weather
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="col-1 justify-content-end collapse navbar-collapse" id="collapsibleNavbar">
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