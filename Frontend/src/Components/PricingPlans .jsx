const plans = [
  {
    title: 'Class drop-in',
    price: 39.0,
    duration: 'SINGLE CLASS',
    features: [
      'Free riding',
      'Unlimited equipments',
      'Personal trainer',
      'Weight losing classes',
      'Month to mouth',
      'No time restriction',
    ],
    highlight: false,
  },
  {
    title: '12 Month unlimited',
    price: 99.0,
    duration: 'SINGLE CLASS',
    features: [
      'Free riding',
      'Unlimited equipments',
      'Personal trainer',
      'Weight losing classes',
      'Month to mouth',
      'No time restriction',
    ],
    highlight: true,
  },
  {
    title: '6 Month unlimited',
    price: 59.0,
    duration: 'SINGLE CLASS',
    features: [
      'Free riding',
      'Unlimited equipments',
      'Personal trainer',
      'Weight losing classes',
      'Month to mouth',
      'No time restriction',
    ],
    highlight: false,
  },
];

const PricingPlans = () => {
  return (
    <div className="pricing-section">
      <p className="plan-title">OUR PLAN</p>
      <h2 className="plan-heading">CHOOSE YOUR PRICING PLAN</h2>
      <div className="pricing-container">
        {plans.map((plan, index) => (
          <div
            className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}
            key={index}
          >
            <h3>{plan.title}</h3>
            <h1>${plan.price.toFixed(1)}</h1>
            <p className="duration">{plan.duration}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="enroll-btn">ENROLL NOW</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
