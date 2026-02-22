export default function ContactSection() {
    return (
        <section className="contact-section py-5" style={{ backgroundColor: '#fefefe' }}>
            <div className="container w-100">
                <div className="row m-0">
                    <div className="col-lg-6">
                        <h2 className="mb-4" style={{ fontSize: '2.5rem', color: '#424242' }}>Get in touch</h2>
                        <p className="contact-info text-muted lh-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>

                        <div className="contact-info mt-4 text-muted lh-lg">
                            <h4 className="fw-semibold mt-4 mb-2 text-dark" style={{ fontSize: '1.5rem' }}>Address</h4>
                            <p>Musterstraße 12<br />München, 11229<br />Germany</p>

                            <h4 className="fw-semibold mt-4 mb-2 text-dark" style={{ fontSize: '1.5rem' }}>Phone</h4>
                            <p>030 123 4567<br />Fax: +49 742 4312</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <form>
                            <input
                                type="text"
                                className="form-control rounded-1 p-3 mb-4 shadow-sm border"
                                placeholder="Enter your name"
                                style={{ borderColor: '#ddd' }}
                            />
                            <input
                                type="email"
                                className="form-control rounded-1 p-3 mb-4 shadow-sm border"
                                placeholder="Your email address"
                                style={{ borderColor: '#ddd' }}
                            />
                            <textarea
                                className="form-control rounded-1 p-3 mb-4 shadow-sm border"
                                rows="5"
                                placeholder="Comments"
                                style={{ borderColor: '#ddd' }}
                            ></textarea>
                            <button type="submit" className="submit-btn text-white border-0 py-3 px-5 rounded-pill w-50" style={{ backgroundColor: 'var(--primary-green)' }}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
