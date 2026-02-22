export default function Hero() {
    return (
        <section className="hero-section p-0">
            <div className="hero-container d-none d-lg-block position-relative w-100">
                <img
                    src="assets/BANNER1.JPG"
                    alt="Natural ingredients"
                    className="hero-image"
                />
                <div className="hero-content">
                    <h1 className="mb-3">Learn. Improve. Grow</h1>
                    <p className="mb-4">
                        Build your skills through job-ready programs and earn your
                        certification to propel your career.
                    </p>
                </div>
                <div className="hero-indicators position-absolute bottom-0 end-0 mb-4 me-5 d-flex gap-2">
                    <div className="hero-dot active" style={{ backgroundColor: "white" }}></div>
                    <div className="hero-dot" style={{ backgroundColor: "white" }}></div>
                    <div className="hero-dot" style={{ backgroundColor: "white" }}></div>
                </div>
            </div>

            <div className="hero-mobile d-lg-none">
                <img
                    src="assets/BANNER1.JPG"
                    alt="Natural ingredients"
                    className="img-fluid w-100"
                />
                <div className="px-4 py-5 text-center" style={{ backgroundColor: "var(--light-bg)" }}>
                    <h1 className="h2 mb-3">Learn. Improve. Grow</h1>
                    <p className="text-muted mb-4" style={{ fontSize: "1.1rem" }}>
                        Build your skills through job-ready programs and earn your
                        certification to propel your career.
                    </p>
                    <div className="d-flex justify-content-center gap-2 mt-4">
                        <div className="hero-dot bg-secondary border border-white" style={{ width: "10px", height: "10px", borderRadius: "50%" }}></div>
                        <div className="hero-dot bg-secondary border border-white" style={{ width: "10px", height: "10px", borderRadius: "50%" }}></div>
                        <div className="hero-dot bg-secondary border border-white" style={{ width: "10px", height: "10px", borderRadius: "50%" }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
