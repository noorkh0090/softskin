export default function CourseCatalog() {
    return (
        <>
            <section className="course-catalog py-5 text-center w-100">
                <div className="container w-100">
                    <h2 className="mb-4">Explore our courses catalogue</h2>

                    <div className="search-bar d-flex justify-content-center mb-2">
                        <div className="input-group search-container mt-0 mb-0">
                            <input
                                type="text"
                                className="form-control border-0 mb-0"
                                placeholder="Search courses catalog"
                            />
                            <button className="btn border-0 bg-transparent text-secondary px-3">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                    <div>
                        <button className="category-btn btn-browse mt-3 m-2 px-4 py-2">Browse Courses</button>
                        <button className="category-btn btn-featured mt-3 m-2 px-4 py-2">
                            Featured Category
                        </button>
                        <button className="category-btn btn-recent mt-3 m-2 px-4 py-2">Recent Courses</button>
                    </div>
                </div>
            </section>

            {/*  Recent Courses  */}
            <div className="container w-100">
                <div className="section-header d-flex align-items-center py-3 mt-5 mb-4">
                    <div className="section-header-title flex-shrink-0">
                        <h3 className="section-title mb-0 fw-bold">Recent Courses</h3>
                    </div>
                    <div className="section-header-desc flex-grow-1 px-4">
                        <p className="text-muted mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula nunc in neque sollicitudin,
                            ac cursus tellus semper. Morbi posuere elit mollis erat gravida rhoncus.
                        </p>
                    </div>
                    <div className="section-header-btn flex-shrink-0">
                        <a href="#" className="view-all px-4 py-2">View all courses</a>
                    </div>
                </div>
            </div>
        </>
    );
}
