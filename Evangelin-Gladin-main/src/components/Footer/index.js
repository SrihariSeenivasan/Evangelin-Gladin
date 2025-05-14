import CustomImage from "../custom/Image";
import style from "./styles.module.css";
import { Link } from 'react-router-dom'; 

import ContactUs from "../ContactUs";
import FooterCopyRights from "./copyrights";


const Footer = () => {
  return (
    <footer className={`text-color-white footer mt-auto py-3 text-white`}>
      <ContactUs />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3">
            <Link href="/">
              <CustomImage
                src={"/logo.png"}
                wrapperClss={` m-0 pb-3`}
                height="auto"
                imgClass={"m-0"}
              />
            </Link>

            <div>WinCity InfraWorks LLP - An initiative of Lokmat Media.</div>
            {/* <div className="py-3">
              <Link href="#" className={`pe-2`} target="_blank">
                <i
                  className={`fa fa-2x fa-facebook-square ${style.share_button}`}
                ></i>
              </Link>
              <Link href="#" className={`px-2`} target="_blank">
                <i
                  className={`fa fa-2x fa-instagram ${style.share_button}`}
                ></i>
              </Link>
              <Link href="#" className={`px-2`} target="_blank">
                <i
                  className={`fa fa-2x fa-linkedin-square ${style.share_button}`}
                ></i>
              </Link>
            </div> */}
          </div>
          <div className="col-md-3">
            <div className={`${style.footer_menu_header}`}>Useful Links</div>
            <div className="fw-light py-2">
              <Link href={"/about-us"} className="py-2 text-white nav-link">
                About Us
              </Link>
              <Link href={"/services"} className="py-2 text-white nav-link">
                Our Services
              </Link>
              <Link href={"/blogs"} className="py-2 text-white nav-link">
              Blogs
              </Link>
              <Link href={"/#contactUs"} className="py-2 text-white nav-link">
                Contact Us
              </Link>
              
            </div>
          </div>
          <div className="col-md-3">
            <div className={`${style.footer_menu_header}`}>Other</div>
            <div className="fw-light py-2">
              <Link
                href={"/privacy-policy"}
                className="py-2 text-white nav-link"
              >
                Privacy Policy
              </Link>
              <Link
                href={"/terms-and-condition"}
                className="py-2 text-white nav-link"
              >
                Term & Conditions
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className={`${style.footer_menu_header}`}>Contact</div>
            <div className="py-2 text-white nav-link">
              <i class="fa fa-map-marker pe-2 fs-4" aria-hidden="true"></i>
              <span>
              B-126, Floor 12TH, Plot No 210, B-Wing, Mittal Tower, Free Press Journal Marg, Nariman Point, Mumbai.
              </span>
            </div>
            <div className="py-2 text-white nav-link">
              <Link
                href="mailto:kiran.masoriya@wincityinfraworks.com"
                data-rel="external"
                rel="noreferrer"
                className="text-white nav-link"
              >
                <i class="fa fa-envelope-o pe-2 fs-4" aria-hidden="true"></i>{" "}
                <span>admin@wincityinfraworks.com</span>
              </Link>
            </div>
            <div className="py-2 text-white nav-link">
              <Link
                className="text-white nav-link"
                href="tel:02244516981"
                data-rel="external"
                rel="noreferrer"
              >
                <i class="fa fa-phone-square pe-2 fs-4" aria-hidden="true"></i>
                <span>022-44516981</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-start pt-5 flex-wrap">
          <FooterCopyRights />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
