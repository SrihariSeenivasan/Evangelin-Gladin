import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="\images\Bot-new-logo.jpg" alt="About" />
      </div>

      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>
          Evangelin Gladin, a seasoned international sales & marketing strategist, has spent the last 19 years working with businesses in India, the Gulf, and Africa, helping them expand their brands and scale internationally.
        </h3>
        <p>
          Through deep experience in export branding, SaaS marketing, and B2B sales strategies, she realized that most businesses struggle with digital transformation, lead generation, and positioning themselves globally.
        </p>
        <p>
          This led to the creation of The Bot Agency—a high-impact digital growth partner for businesses ready to scale beyond borders. Today, she and her expert team of strategists, content creators, and digital growth specialists are on a mission to help businesses scale, automate, and dominate their industries.
        </p>
        <Link to="#" className="btn">
          Read More
        </Link>
      </div>
    </section>
  );
};

export default About; 