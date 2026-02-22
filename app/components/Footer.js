export default function Footer() {
    return (
        <footer className="footer pt-5 pb-3 text-white" style={{ backgroundColor: "var(--primary-green)" }}>
            <div className="container w-100">
                <div className="row m-0">
                    <div className="col-md-3 mb-4">
                        <h5 className="text-uppercase mb-3 fw-semibold" style={{ fontSize: "1rem", color: "#fff" }}>SOCIÉTÉ</h5>
                        <ul className="list-unstyled p-0 m-0" style={{ lineHeight: "2" }}>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none small opacity-75" style={{ fontSize: '0.9rem' }}>Contact</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none small opacity-75" style={{ fontSize: '0.9rem' }}>Presse</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none small opacity-75" style={{ fontSize: '0.9rem' }}>Recrutements</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none small opacity-75" style={{ fontSize: '0.9rem' }}>English</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-4">
                        <h5 className="text-uppercase mb-3 fw-semibold" style={{ fontSize: "1rem", color: "#fff" }}>Solutions</h5>
                        <ul className="list-unstyled p-0 m-0" style={{ lineHeight: "2" }}>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none small opacity-75" style={{ fontSize: '0.9rem' }}>Plateformes d'apprentissage</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none small opacity-75" style={{ fontSize: '0.9rem' }}>Fonctionnalités</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none small opacity-75" style={{ fontSize: '0.9rem' }}>Mask</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-4">
                        <h5 className="text-uppercase mb-3 fw-semibold" style={{ fontSize: "1rem", color: "#fff" }}>Offres</h5>
                        <ul className="list-unstyled p-0 m-0" style={{ lineHeight: "2" }}>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none small opacity-75" style={{ fontSize: '0.9rem' }}>Académiques</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none small opacity-75" style={{ fontSize: '0.9rem' }}>Organismes de formations</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none small opacity-75" style={{ fontSize: '0.9rem' }}>Entreprise</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-4 text-center text-md-end">
                        <div className="d-flex align-items-center justify-content-center justify-content-md-end mb-4">
                            <div className="text-end me-3 lh-1">
                                <small className="d-block opacity-75" style={{ fontSize: "0.7rem" }}>powered by</small>
                                <strong style={{ fontSize: "1.1rem" }}>trainerzone</strong>
                                <small className="d-block opacity-75" style={{ fontSize: "0.6rem", letterSpacing: "1px" }}>training platform</small>
                            </div>
                            <h4 className="mb-0 fw-light" style={{ fontSize: "1.5rem" }}>Softína</h4>
                        </div>
                        <div className="social-icons">
                            <a href="#" className="text-white mx-2 opacity-75" style={{ fontSize: '1.2rem' }}><i className="bi bi-twitter"></i></a>
                            <a href="#" className="text-white mx-2 opacity-75" style={{ fontSize: '1.2rem' }}><i className="bi bi-instagram"></i></a>
                            <a href="#" className="text-white mx-2 opacity-75" style={{ fontSize: '1.2rem' }}><i className="bi bi-youtube"></i></a>
                            <a href="#" className="text-white mx-2 opacity-75" style={{ fontSize: '1.2rem' }}><i className="bi bi-facebook"></i></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom mt-5 pt-4 opacity-75 small text-center text-md-start align-items-center border-top d-flex flex-wrap" style={{ borderColor: "rgba(255,255,255,0.2) !important", fontSize: '0.85rem' }}>
                    <div className="col-md-4 mb-2 mb-md-0">
                        Copyright © 2022
                    </div>
                    <div className="col-md-4 mb-2 mb-md-0 text-center">
                        All rights reserved. Worldwide.
                    </div>
                    <div className="col-md-4 text-center text-md-end">
                        <a href="#" className="text-white text-decoration-none">Contact us</a> |
                        <a href="#" className="text-white text-decoration-none ms-1 me-1">Sitemap</a> |
                        <a href="#" className="text-white text-decoration-none ms-1">Legal disclaimer</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
