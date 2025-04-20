import { useState } from 'react';


import 'src/components/Navbar.css'; 

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className="navigation-wrap bg-light start-header start-style">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <a className="navbar-brand" href="/src/underdog.png" target="_blank" rel="noopener noreferrer">
                            <img src="/src/underdog.png" alt="Logo" />
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded={click ? 'true' : 'false'}
                                aria-label="Toggle navigation"
                                onClick={handleClick}
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className={`collapse navbar-collapse ${click ? 'show' : ''}`} id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto py-4 py-md-0">

                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                <a className="nav-link dropdown-toggle"  href="#home" role="button" aria-haspopup="true" aria-expanded="false">Home</a>
                                        
                                    </li>

                                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                                    <a className="nav-link dropdown-toggle"  href="#serv" role="button" aria-haspopup="true" aria-expanded="false">Services</a>
                                    </li>
                                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                    <a className="nav-link dropdown-toggle"  href="#contact" role="button" aria-haspopup="true" aria-expanded="false">Contact</a>

                                    </li>
                                    
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
