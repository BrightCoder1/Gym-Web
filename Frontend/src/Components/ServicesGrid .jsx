const ServicesGrid = () => {
  return (
    <div className="services-section">
      <p className="section-subtitle">WHAT WE DO?</p>
      <h2 className="section-title">PUSH YOUR LIMITS FORWARD</h2>

      <div className="services-grid">
        <div className="service-img"><img src="https://themewagon.github.io/gymlife/img/services/services-1.jpg" alt="Pushup" /></div>
        <div className="service-content">
          <h3>Personal training</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.</p>
          <span className="explore-link">EXPLORE</span>
        </div>
        <div className="service-img"><img src="https://themewagon.github.io/gymlife/img/services/services-2.jpg" alt="Training" /></div>
        <div className="service-content">
          <h3>Group fitness classes</h3>
          <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.</p>
          <span className="explore-link">EXPLORE</span>
        </div>
        <div className="service-content">
          <h3>Strength training</h3>
          <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.</p>
          <span className="explore-link">EXPLORE</span>
        </div>
        <div className="service-img"><img src="https://themewagon.github.io/gymlife/img/services/services-3.jpg" alt="Bodybuilding" /></div>
        <div className="service-content">
          <h3>Body building</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.</p>
          <span className="explore-link">EXPLORE</span>
        </div>
        <div className="service-img"><img src="https://themewagon.github.io/gymlife/img/services/services-4.jpg" alt="Measuring tape" /></div>
      </div>
    </div>
  );
};

export default ServicesGrid;
