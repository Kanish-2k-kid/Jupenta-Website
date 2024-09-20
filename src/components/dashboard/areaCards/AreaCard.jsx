import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FaSchool, FaBus, FaUser, FaDollarSign } from 'react-icons/fa';
import './AreaCard.scss';

const AreaCard = ({ colors, percentFillValue, cardInfo, icon }) => {
  const { title, value, text } = cardInfo;

  // Animation for the number value
  const { number } = useSpring({
    from: { number: 0 },
    number: parseFloat(value.replace(/[^0-9.-]+/g, "")), // Remove currency symbols
    config: { duration: 1500 },
  });

  // Icons mapping
  const icons = {
    school: <FaSchool size={30} color="white" />,
    bus: <FaBus size={30} color="white" />,
    student: <FaUser size={30} color="white" />,
    revenue: <FaDollarSign size={30} color="white" />,
  };

  return (
    <div className="area-card" style={{ background: `linear-gradient(${colors[0]}, ${colors[1]})` }}>
      <div className="icon-container">
        {icons[icon]}
      </div>
      <div className="info">
        <div className="info-title">{title}</div>
        <div className="info-value">
          <animated.span>{number.to(n => n.toFixed(0))}</animated.span>
        </div>
        <div className="info-text">{text}</div>
      </div>
    </div>
  );
};

export default AreaCard;
