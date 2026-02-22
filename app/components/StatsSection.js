export default function StatsSection() {
    return (
        <section className="stats-section position-relative z-3" style={{
            backgroundColor: '#f5f7ec',
            paddingTop: '8rem',
            paddingBottom: '4rem',
            marginTop: '-5rem',
            clipPath: 'polygon(0 5rem, 100% 0, 100% 100%, 0 100%)'
        }}>
            <div className="container w-100">
                <div className="row align-items-center m-0">
                    <div className="col-lg-4 text-center">
                        <div className="stats-badge text-center">
                            <img
                                src="assets/10years.png"
                                alt="10 years badge"
                                className="mb-3"
                                style={{ width: '250px' }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <ul className="stats-list list-unstyled ps-lg-5 p-0 m-0">
                            <li className="d-flex align-items-start mb-4">
                                <img src="assets/leaf.png" alt="leaf" className="me-3 mt-1 object-fit-contain" style={{ width: "24px", height: "auto" }} />
                                <div>
                                    <strong className="d-block h4 mb-0 text-dark">2K</strong>
                                    <span className="text-muted">New products</span>
                                </div>
                            </li>
                            <li className="d-flex align-items-start mb-4">
                                <img src="assets/leaf.png" alt="leaf" className="me-3 mt-1 object-fit-contain" style={{ width: "24px", height: "auto" }} />
                                <div>
                                    <strong className="d-block h4 mb-0 text-dark">100K</strong>
                                    <span className="text-muted">Students</span>
                                </div>
                            </li>
                            <li className="d-flex align-items-start mb-4">
                                <img src="assets/leaf.png" alt="leaf" className="me-3 mt-1 object-fit-contain" style={{ width: "24px", height: "auto" }} />
                                <div>
                                    <strong className="d-block h4 mb-0 text-dark">10K</strong>
                                    <span className="text-muted">Students</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <div className="impressive-track">
                            <h3 className="mb-3" style={{ fontSize: '1.8rem', color: 'var(--primary-green)' }}>Impressive track record</h3>
                            <p className="text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
