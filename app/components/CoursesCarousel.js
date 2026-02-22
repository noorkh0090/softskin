export default function CoursesCarousel() {
    return (
        <section className="courses-Carousel py-4 px-md-5">
            <div className="courses-carousel position-relative">
                <button className="carousel-arrow carousel-arrow-left" aria-label="Previous">
                    <i className="bi bi-chevron-left"></i>
                </button>

                <div className="row g-4 m-0">
                    {/*  Course Card 1  */}
                    <div className="col-md-3">
                        <div className="course-card d-flex flex-column h-100 bg-white rounded-4 overflow-hidden shadow">
                            <div className="course-image-wrapper position-relative" style={{ height: '180px' }}>
                                <img
                                    src="assets/card(1).png"
                                    alt="Course"
                                    className="course-image w-100 h-100 object-fit-cover"
                                />
                                <div className="course-badge position-absolute bottom-0 start-0 m-3 px-3 py-1 bg-warning text-dark rounded-pill fw-semibold" style={{ fontSize: '0.75rem' }}>Free Subscription</div>
                            </div>
                            <div className="course-info p-4 d-flex flex-column flex-grow-1">
                                <div className="instructor d-flex align-items-center mb-3">
                                    <img
                                        src="assets/success_story_icon1__.png"
                                        alt="Instructor"
                                        className="rounded-circle me-3"
                                        style={{ width: '40px', height: '40px' }}
                                    />
                                    <div className="instructor-details d-flex flex-column lh-sm">
                                        <span className="instructor-label text-muted" style={{ fontSize: '0.7rem' }}>Instructor</span>
                                        <span className="instructor-name text-dark fw-bold" style={{ fontSize: '0.85rem' }}>Dr. Harald Helfeger</span>
                                    </div>
                                </div>
                                <h4 className="course-title text-dark fw-bolder mb-2" style={{ fontSize: '1rem' }}>
                                    Effective use and understanding of clinical ....
                                </h4>
                                <p className="course-description text-muted mb-4 flex-grow-1" style={{ fontSize: '0.85rem' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <div className="course-stats mb-2 text-end">
                                </div>
                                <button className="course-details-btn mt-auto w-100 py-2 px-3 bg-white text-success border rounded-pill d-flex justify-content-between align-items-center fw-semibold transition-all">
                                    Course details <i className="bi bi-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/*  Course Card 2  */}
                    <div className="col-md-3">
                        <div className="course-card d-flex flex-column h-100 bg-white rounded-4 overflow-hidden shadow">
                            <div className="course-image-wrapper position-relative" style={{ height: '180px' }}>
                                <img
                                    src="assets/card2.png"
                                    alt="Course"
                                    className="course-image w-100 h-100 object-fit-cover"
                                />
                            </div>
                            <div className="course-info p-4 d-flex flex-column flex-grow-1">
                                <div className="instructor d-flex align-items-center mb-3">
                                    <img
                                        src="assets/success_story_icon1__.png"
                                        alt="Instructor"
                                        className="rounded-circle me-3"
                                        style={{ width: '40px', height: '40px' }}
                                    />
                                    <div className="instructor-details d-flex flex-column lh-sm">
                                        <span className="instructor-label text-muted" style={{ fontSize: '0.7rem' }}>Instructor</span>
                                        <span className="instructor-name text-dark fw-bold" style={{ fontSize: '0.85rem' }}>Dr. Harald Helfeger</span>
                                    </div>
                                </div>
                                <h4 className="course-title text-dark fw-bolder mb-2" style={{ fontSize: '1rem' }}>
                                    Effective use and
                                </h4>
                                <p className="course-description text-muted mb-4 flex-grow-1" style={{ fontSize: '0.85rem' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <div className="course-stats mb-2 text-end">
                                    <span className="course-price-old text-muted text-decoration-line-through me-2" style={{ fontSize: '0.9rem' }}>399$</span>
                                    <span className="course-price text-dark fw-bolder" style={{ fontSize: '1.2rem' }}>299$</span>
                                </div>
                                <button className="course-details-btn mt-auto w-100 py-2 px-3 bg-white text-success border rounded-pill d-flex justify-content-between align-items-center fw-semibold transition-all">
                                    Course details <i className="bi bi-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/*  Course Card 3  */}
                    <div className="col-md-3">
                        <div className="course-card d-flex flex-column h-100 bg-white rounded-4 overflow-hidden shadow">
                            <div className="course-image-wrapper position-relative" style={{ height: '180px' }}>
                                <img
                                    src="assets/card3.png"
                                    alt="Course"
                                    className="course-image w-100 h-100 object-fit-cover"
                                />
                            </div>
                            <div className="course-info p-4 d-flex flex-column flex-grow-1">
                                <div className="instructor d-flex align-items-center mb-3">
                                    <img
                                        src="assets/success_story_icon1__.png"
                                        alt="Instructor"
                                        className="rounded-circle me-3"
                                        style={{ width: '40px', height: '40px' }}
                                    />
                                    <div className="instructor-details d-flex flex-column lh-sm">
                                        <span className="instructor-label text-muted" style={{ fontSize: '0.7rem' }}>Instructor</span>
                                        <span className="instructor-name text-dark fw-bold" style={{ fontSize: '0.85rem' }}>Dr. Harald Helfeger</span>
                                    </div>
                                </div>
                                <h4 className="course-title text-dark fw-bolder mb-2" style={{ fontSize: '1rem' }}>
                                    Effective use and understanding of clinical ....
                                </h4>
                                <p className="course-description text-muted mb-4 flex-grow-1" style={{ fontSize: '0.85rem' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <div className="course-stats mb-2 text-end">
                                    <span className="course-price text-dark fw-bolder" style={{ fontSize: '1.2rem' }}>149$</span>
                                </div>
                                <button className="course-details-btn mt-auto w-100 py-2 px-3 bg-white text-success border rounded-pill d-flex justify-content-between align-items-center fw-semibold transition-all">
                                    Course details <i className="bi bi-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/*  Course Card 4  */}
                    <div className="col-md-3">
                        <div className="course-card d-flex flex-column h-100 bg-white rounded-4 overflow-hidden shadow">
                            <div className="course-image-wrapper position-relative" style={{ height: '180px' }}>
                                <img
                                    src="assets/card4.png"
                                    alt="Course"
                                    className="course-image w-100 h-100 object-fit-cover"
                                />
                            </div>
                            <div className="course-info p-4 d-flex flex-column flex-grow-1">
                                <div className="instructor d-flex align-items-center mb-3">
                                    <img
                                        src="assets/success_story_icon1__.png"
                                        alt="Instructor"
                                        className="rounded-circle me-3"
                                        style={{ width: '40px', height: '40px' }}
                                    />
                                    <div className="instructor-details d-flex flex-column lh-sm">
                                        <span className="instructor-label text-muted" style={{ fontSize: '0.7rem' }}>Instructor</span>
                                        <span className="instructor-name text-dark fw-bold" style={{ fontSize: '0.85rem' }}>Dr. Harald Helfeger</span>
                                    </div>
                                </div>
                                <h4 className="course-title text-dark fw-bolder mb-2" style={{ fontSize: '1rem' }}>
                                    Effective use and understanding of clinical ....
                                </h4>
                                <p className="course-description text-muted mb-4 flex-grow-1" style={{ fontSize: '0.85rem' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <div className="course-stats mb-2 text-end">
                                    <span className="course-price text-dark fw-bolder" style={{ fontSize: '1.2rem' }}>149$</span>
                                </div>
                                <button className="course-details-btn mt-auto w-100 py-2 px-3 bg-white text-success border rounded-pill d-flex justify-content-between align-items-center fw-semibold transition-all">
                                    Course details <i className="bi bi-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Right Arrow  */}
                <button className="carousel-arrow carousel-arrow-right" aria-label="Next">
                    <i className="bi bi-chevron-right"></i>
                </button>
            </div>
        </section>
    );
}
