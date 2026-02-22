export default function BeautyProducts() {
    return (
        <section className="beauty-products position-relative z-1" style={{
            backgroundColor: '#fbfbe4',
            backgroundImage: `url('assets/soap_flavours.jpg')`,
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto',
            marginTop: '-120px',
            paddingTop: '220px',
            paddingBottom: '55vw',
            clipPath: 'polygon(0 80px, 100% 0, 100% 100%, 0 100%)'
        }}>
            <div className="container w-100">
                <div className="row m-0">
                    <div className="col-lg-5 mb-4 mb-lg-0">
                        <h2 className="mb-4 display-5 fw-light text-secondary lh-sm" style={{ fontSize: '3rem', color: '#555' }}>Beauty products <br />of your own!</h2>
                        <p className="text-muted pe-lg-5 fw-light lh-base mb-0" style={{ fontSize: '1.2rem', color: '#666' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="col-lg-7">
                        <div className="row m-0">
                            <div className="col-md-6">
                                <ul className="product-features list-unstyled p-0 m-0">
                                    <li className="mb-3 d-flex align-items-center fw-light text-muted" style={{ fontSize: '1.2rem' }}><i className="bi bi-check-circle text-success me-3"></i> Pellentesque suscipit justo quis</li>
                                    <li className="mb-3 d-flex align-items-center fw-light text-muted" style={{ fontSize: '1.2rem' }}><i className="bi bi-check-circle text-success me-3"></i> Curabitur ac odio lacus</li>
                                    <li className="mb-3 d-flex align-items-center fw-light text-muted" style={{ fontSize: '1.2rem' }}><i className="bi bi-check-circle text-success me-3"></i> Nulla ligula metus, maximus</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="product-features list-unstyled p-0 m-0">
                                    <li className="mb-3 d-flex align-items-center fw-light text-muted" style={{ fontSize: '1.2rem' }}><i className="bi bi-check-circle text-success me-3"></i> incididunt ut labore et</li>
                                    <li className="mb-3 d-flex align-items-center fw-light text-muted" style={{ fontSize: '1.2rem' }}><i className="bi bi-check-circle text-success me-3"></i> Nulla ligula metus, maximus</li>
                                    <li className="mb-3 d-flex align-items-center fw-light text-muted" style={{ fontSize: '1.2rem' }}><i className="bi bi-check-circle text-success me-3"></i> Nulla ligula metus, maximus</li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-end mt-4 pe-4">
                            <button className="read-more-btn px-4 py-2 rounded text-white bg-secondary border-0 fw-medium transition-all" style={{ fontSize: '1.2rem' }}>Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
