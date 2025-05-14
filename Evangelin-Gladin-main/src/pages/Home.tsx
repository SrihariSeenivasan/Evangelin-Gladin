import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';


const Home: React.FC = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, I am</h3>
          <h1>Evangelin Gladin</h1>
          <h2>"Helping Entrepreneurs Scale Smarter — Not Harder."</h2>
          <p>
            <br /> Strategic support for founders who need clarity, momentum, and scalable marketing systems.
          </p>

          <div className="social-media">
            <a href="https://www.facebook.com/share/1Fm7a5Lk32/">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://www.instagram.com/evangelingladin/">
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAAwTp_ABp1aegA5D-B2UkvbQ6Vzazs7zUe4&keywords=evangelin%20gladin&origin=RICH_QUERY_SUGGESTION&position=0&searchId=b7316e13-bb1b-4019-aa6b-2c275477a8de&sid=D~S&spellCorrectionEnabled=false">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>

          <Link to="#" className="btn">
            Book Your Strategy Call
          </Link>
          <br />
          <br />
          <Link to="#" className="btn1">
            Download My 90-Day Growth Checklist
          </Link>
        </div>

        <div className="profession-container">
          <div className="profession-box">
            <div className="profession" style={{ '--i': 0 } as React.CSSProperties}>
              <h3>Founder of BOT</h3>
            </div>
            <div className="profession" style={{ '--i': 1 } as React.CSSProperties}>
              <h3>Marketing Consultant</h3>
            </div>
            <div className="profession" style={{ '--i': 2 } as React.CSSProperties}>
              <h3>ICF PCC-Leadership</h3>
            </div>
            <div className="profession" style={{ '--i': 3 } as React.CSSProperties}>
              <h3>Strategic Coach</h3>
            </div>

            <div className="circle"></div>
          </div>

          <div className="overlay"></div>
        </div>

        <div className="home-img">
          <img src="/images/Pic.png" alt="Profile" />
        </div>
      </section>

      {/* ✅ Footer Added Below */}
      <Footer />
    </>
  );
};

export default Home;
