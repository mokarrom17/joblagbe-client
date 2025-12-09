import React from "react";
import logo from "../../assets/jobhub-logo.svg";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { Link } from "react-router";
import apple from "../../assets/Footer btn/app-store.png";
import google from "../../assets/Footer btn/android.png";

const Footer = () => {
  return (
    <div className="mt-12 px-12">
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content px-10 py-16">
        <aside className="w-64">
          <img src={logo} alt="JobHub Logo" />
          <p>
            JobBox is the heart of the design community and the best resource to
            discover and connect with designers and jobs worldwide.
          </p>
          <div className="flex gap-4 text-3xl mt-4">
            <Link>
              <FaFacebook />
            </Link>
            <Link>
              <FaInstagram />
            </Link>
            <Link>
              <FaTwitter />
            </Link>
            <Link>
              <TiSocialLinkedinCircular />
            </Link>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <Link>About Us</Link>
          <Link>Our Team</Link>
          <Link>Products</Link>
          <Link>Contact</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Community</h6>
          <Link>Feature</Link>
          <Link>Pricing</Link>
          <Link>Credit</Link>
          <Link>FAQ</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Quick Link</h6>
          <Link>iOS</Link>
          <Link>Android</Link>
          <Link>Microsoft</Link>
          <Link>Desktop</Link>
        </nav>
        <nav>
          <h6 className="footer-title">More</h6>
          <Link>Privacy</Link>
          <Link>Help</Link>
          <Link>Terms</Link>
        </nav>
        <nav className="w-48">
          <h6 className="footer-title">Download App</h6>
          <p className="text-xs">
            Download our Apps and get extra 15% Discount on your first Order…!
          </p>
          <div className="flex md:flex-col lg:flex-row gap-2 mt-4">
            <Link to="/app-store">
              <button>
                <img src={apple} alt="App Store" />
              </button>
            </Link>

            <Link to="/google-play">
              <button>
                <img src={google} alt="Google Play Store" />
              </button>
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
