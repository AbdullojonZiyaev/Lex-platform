import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left section: logo and tagline */}
        <div className="footer-left">
          <img
            src="/Logo.jpeg"
            alt="LawStart logo"
            className="footer-logo"
          />
          <p>Empowering startups with accessible legal help.</p>
        </div>

        {/* Center section: quick links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a> <a href="#experience">Experience</a></li>
            <li><a href="#testimonials">Testimonials</a> <a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a> <a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right section: contact or newsletter */}
        <div className="footer-contact">
          <h4>Stay Connected</h4>
          <p>Subscribe to stay updated on legal tools for startups.</p>
          <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} LawStart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
