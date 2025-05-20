import React from "react";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <section id="experience" className="section">
        <div className="section-content">
          <div className="text">
            <h2>Experience</h2>
            <p>
              At LawStart, we bridge the gap between innovative startups and
              legal professionals. Our mission is to help startups, especially
              those at early stages with limited funds and reach, get critical
              legal support. Whether it's incorporation, IP protection, or
              contract reviews, our platform makes legal guidance accessible
              through a collaborative question-and-answer forum.
            </p>
          </div>
          <img
            src="/images/experience.jpeg"
            alt="Startup and lawyer experience"
            className="section-image"
          />
        </div>
      </section>

      <section id="testimonials" className="section alt-bg">
        <div className="section-content">
          <img
            src="/images/testimonial.jpeg"
            alt="Testimonials"
            className="section-image"
          />
          <div className="text">
            <h2>Testimonials</h2>
            <div className="testimonial">
              <p>
                “LawStart gave us the legal confidence to pitch to our first
                investor. The advice we got on incorporation and IP saved us
                time and money.”
              </p>
              <span>— Maya G., Founder, TechKind</span>
            </div>
            <div className="testimonial">
              <p>
                “As a solo legal practitioner, LawStart has allowed me to give
                back to the startup community and connect with amazing future
                clients.”
              </p>
              <span>— Daniel P., Startup Lawyer</span>
            </div>
            <div className="testimonial">
              <p>
                “The forum model is genius. It’s like Stack Overflow for legal
                help, but better — it led to a real legal partnership.”
              </p>
              <span>— Aaron K., Startup CTO</span>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="section">
        <div className="section-content">
          <div className="text">
            <h2>Pricing</h2>
            <p>
              <strong>For Startups:</strong> Asking questions on the forum is
              completely free. Get quality legal input without upfront costs.
            </p>
            <p>
              <strong>For Lawyers:</strong> Browsing and answering forum
              questions is also free. Build your reputation and discover
              meaningful client relationships.
            </p>
            <p>
              <strong>Coming Soon:</strong> Verified profiles, direct messaging,
              and premium collaboration tools tailored to early-stage legal
              needs.
            </p>
          </div>
          <img
            src="/images/pricing.png"
            alt="Pricing plans"
            className="section-image"
          />
        </div>
      </section>

      <section id="faq" className="section alt-bg">
        <div className="section-content">
          <img
            src="/images/faq.jpeg"
            alt="FAQ illustration"
            className="section-image"
          />
          <div className="text faq">
            <h2>FAQ</h2>
            <h4>Who can ask questions on LawStart?</h4>
            <p>Any registered startup user can post legal questions.</p>

            <h4>Are the lawyers verified?</h4>
            <p>
              We are working on a lawyer verification system. In the meantime,
              each lawyer has a public profile and contribution history.
            </p>

            <h4>Can users contact each other directly?</h4>
            <p>
              Yes! After interacting through the forum, both startups and
              lawyers can choose to connect for direct communication.
            </p>

            <h4>Is this a substitute for hiring a lawyer?</h4>
            <p>
              No — LawStart provides insight and connection, not legal
              contracts. For formal representation or document signing, consult
              a licensed attorney.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
