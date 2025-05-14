import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <>
      <section className="services" id="services">
        <h2 className="heading">
          My <span>Services</span>
        </h2>

        <div className="services-container">
          <div className="services-box">
            <i className="bx bx-code-alt"></i>
            <h3>Strategic Marketing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi itaque similique, architecto
              eaque ut quas delectus pariatur nesciunt in eligendi mollitia dicta.
            </p>
            <Link to="#" className="btn">
              Read More
            </Link>
          </div>
          <div className="services-box">
            <i className="bx bxs-paint"></i>
            <h3>Rapid Growth</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi itaque similique, architecto
              eaque ut quas delectus pariatur nesciunt in eligendi mollitia dicta.
            </p>
            <Link to="#" className="btn">
              Read More
            </Link>
          </div>
          <div className="services-box">
            <i className="bx bx-bar-chart-alt"></i>
            <h3>Real Results</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi itaque similique, architecto
              eaque ut quas delectus pariatur nesciunt in eligendi mollitia dicta.
            </p>
            <Link to="#" className="btn">
              Read More
            </Link>
          </div>
        </div>
      </section>

      <section className="services" id="packages">
        <h2 className="heading">
          <span>Packages</span>
        </h2>

        <div className="services-container">
          <div className="services-box">
            <h3>30-Day Clarity Sprint (Positioning + Roadmap)</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi itaque similique, architecto
              eaque ut quas delectus pariatur nesciunt in eligendi mollitia dicta.
            </p>
            <Link to="#" className="btn">
              Read More
            </Link>
          </div>
          <div className="services-box">
            <h3>60-Day Growth Activation (Brand + Outreach Setup)</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi itaque similique, architecto
              eaque ut quas delectus pariatur nesciunt in eligendi mollitia dicta.
            </p>
            <Link to="#" className="btn">
              Read More
            </Link>
          </div>
          <div className="services-box">
            <h3>90-Day Scale-Up Support (Campaigns + Planning)</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi itaque similique, architecto
              eaque ut quas delectus pariatur nesciunt in eligendi mollitia dicta.
            </p>
            <Link to="#" className="btn">
              Read More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services; 