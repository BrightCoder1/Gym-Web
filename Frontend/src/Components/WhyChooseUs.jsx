import { FaDumbbell, FaHeartbeat, FaAppleAlt, FaRunning } from 'react-icons/fa';

function WhyChooseUs() {
    const features = [
        {
            icon: <FaRunning />,
            title: 'Modern equipment',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.'
        },
        {
            icon: <FaAppleAlt />,
            title: 'Healthy nutrition plan',
            desc: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
        },
        {
            icon: <FaDumbbell />,
            title: 'Proffesponal training plan',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.'
        },
        {
            icon: <FaHeartbeat />,
            title: 'Unique to your needs',
            desc: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
        }
    ];

    return (
        <div className="why-container">
            <h5 className="why-subtitle">WHY CHOSE US?</h5>
            <h2 className="why-title">PUSH YOUR LIMITS FORWARD</h2>
            <div className="why-features">
                {features.map((item, index) => (
                    <div className="why-card" key={index}>
                        <div className="why-icon">{item.icon}</div>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WhyChooseUs;
