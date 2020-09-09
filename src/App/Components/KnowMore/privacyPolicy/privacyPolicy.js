import React, { Component } from "react";

class PrivacyPolicy extends Component {
  render() {
    return (
      <div className="mt-lg-5 mb-lg-5 th-privacy-container">
        <h2 className="text-center">Privacy Policy </h2>
        <div>
          <span>
            We are here to ensure you that users’ private information is
            protected by us. Here, it will be informed how we operate your
            information, your privacy rights and how law protects you.
            Information we ask for:
          </span>
          <ol>
            <li>Name</li>
            <li>Contact information(mail ID, phone no.)</li>
            <li>Postal Address</li>
            <li>Account details</li>
            <li>Location information</li>
            <li>Device informaton</li>
          </ol>
        </div>
        <div className="mb-2">
          <p className="mb-0">How we use your information:</p>
          <p className="mb-0">
            We may use your information to contact you for small surveys, offers
            and feedback.
          </p>
        </div>
        <div className="mb-2">
          <p className="mb-0">Banners of other websites:</p>
          <p className="mb-0">
            You may see ads to some other websites on our website. We don’t
            control these websites and we cannot be held responsible for any
            consequences of you giving your information on such websites. Be
            cautious about their own privacy policies.
          </p>
        </div>
        <div className="mb-2">
          <p className="mb-0">Change in privacy policy:</p>
          <p className="mb-0">
            Changes in our privacy statement may occur from time to time.We’ll
            keep you informed by e-mail or through our website.
          </p>
        </div>
      </div>
    );
  }
}

export default PrivacyPolicy;
