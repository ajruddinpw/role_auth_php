import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PartnerDashboard() {
  const cards = [
    { title: "Profile Views", value: 123 },
    { title: "Referrals", value: 17 },
    { title: "Sales This Month", value: 8 },
    { title: "Active Campaigns", value: 3 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(2, cards.length),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Partner Dashboard</h2>
      </div>

      <div style={{ marginBottom: 16 }}>
        <Slider {...settings}>
          {cards.map((c, i) => (
            <div key={i}>
              <div className="slider-card">
                <h3>{c.title}</h3>
                <p style={{ fontSize: 28, fontWeight: 700 }}>{c.value}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="card">
        <h3>Partner Profile</h3>
        <p className="small-muted">Short details / placeholders — you can replace with real data.</p>
      </div>
    </div>
  );
}
