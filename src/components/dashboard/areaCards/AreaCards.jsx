import React from 'react';
import AreaCard from './AreaCard';
import './AreaCards.scss';

const AreaCards = () => {
  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={80}
        cardInfo={{
          title: "School Count",
          value: "100",
          text: "Total number of schools.",
        }}
        icon="school"
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50}
        cardInfo={{
          title: "Bus Count",
          value: "760",
          text: "Total number of buses.",
        }}
        icon="bus"
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "Student Count",
          value: "34000",
          text: "Total number of students.",
        }}
        icon="student"
      />
      <AreaCard
        colors={["#e4e8ef", "#f2b632"]}
        percentFillValue={40}
        cardInfo={{
          title: "Total Revenue",
          value: "18420",
          text: "Total revenue generated.",
        }}
        icon="revenue"
      />
    </section>
  );
};

export default AreaCards;
