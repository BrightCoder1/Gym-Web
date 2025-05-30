import { FaDumbbell, FaHeartbeat, FaAppleAlt, FaCog } from "react-icons/fa";

const features = [
  {
    icon: <FaCog />,
    title: "Modern equipment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis."
  },
  {
    icon: <FaAppleAlt />,
    title: "Healthy nutrition plan",
    desc: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
  },
  {
    icon: <FaDumbbell />,
    title: "Proffesponal training plan",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis."
  },
  {
    icon: <FaHeartbeat />,
    title: "Unique to your needs",
    desc: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
  }
];

const WhyChooseUsAbout = () => {
  return (
    <section className="why-choose-us">
      <p className="subheading">WHY CHOSE US?</p>
      <h2 className="heading">PUSH YOUR LIMITS FORWARD</h2>
      <div className="features">
        {features.map((item, index) => (
          <div className="feature" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsAbout;
