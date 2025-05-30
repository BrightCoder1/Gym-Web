const Aboutus = () => {
    return (
        <section className="about-section">
            <div className="video-container">
                <div className="video-wrapper">
                    <video autoPlay poster="/path-to-poster.jpg" muted loop>
                        <source src="/public/gym video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <div className="text-container">
                <p className="subheading">ABOUT US</p>
                <h2 className="heading">WHAT WE HAVE DONE</h2>
                <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    Aliquip ex ea commodo consequat sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>

                <div className="progress-bar">
                    <label>Body building <span>80%</span></label>
                    <progress value="80" max="100"></progress>
                </div>

                <div className="progress-bar">
                    <label>Training <span>85%</span></label>
                    <progress value="85" max="100"></progress>
                </div>

                <div className="progress-bar">
                    <label>Fitness <span>75%</span></label>
                    <progress value="75" max="100"></progress>
                </div>
            </div>
        </section>
    );
};

export default Aboutus;
