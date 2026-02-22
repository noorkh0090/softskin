export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark py-3 px-4">
            <div className="container">
                <a className="navbar-brand" href="#">SoftSkin</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto ms-4">
                        <li className="nav-item">
                            <a className="nav-link mx-3" href="#">Learn</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-3" href="#">Explore</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-3" href="#">Contact</a>
                        </li>
                    </ul>
                    <div className="navbar-icons d-flex align-items-center ms-4">
                        <a href="#" className="text-white text-decoration-none ms-3"><i className="bi bi-cart"></i> Cart</a>
                        <a href="#" className="text-white text-decoration-none ms-3"><i className="cil-language"></i> EN</a>
                        <div className="dropdown ms-3">
                            <a
                                className="nav-link dropdown-toggle text-white"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                logged in as samer
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end mt-xxl-3">
                                <li>
                                    <a className="dropdown-item p-2 mx-auto" href="#">Action</a>
                                </li>
                                <li>
                                    <a className="dropdown-item p-2 mx-auto" href="#">Another action</a>
                                </li>
                                <li>
                                    <a className="dropdown-item p-2 mx-auto" href="#">Something else here</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
