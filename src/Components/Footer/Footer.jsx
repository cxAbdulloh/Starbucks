import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <>
      <div class="footer-copyright">
        <div>
          *Starbucks Rewards is available at participating stores. Some
          restrictions apply. For full program details, visit
          starbucks.com/rewards
        </div>
        <div className="footer-summary">
          <p>
            **Available on delivery orders from participating Starbucks
            restaurant locations on the Grubhub platform (including Seamless)
            only. Order subtotal must be at least $15 (before tax, tip, and
            fees). Maximum five dollars ($5.00) discount will apply to order
            subtotal only. Users will remain responsible for any applicable tax,
            fees, and optional tip. To redeem, enter code SBUX25 at checkout on
            a qualifying order. Subject to restaurant and/or delivery
            availability. Limit four (4) redemptions per user. Available for
            eligible delivery orders placed between 8/5/2024 at 12:00 AM local
            time and 8/11/2024 at 11:59 PM local time. Subject to promo code max
            redemption and cancellation at any time. Cannot be combined with
            certain other discounts or cash. May not be applied toward orders
            containing alcohol. Not valid for catering or group orders. Offer
            and participation are subject to the Grubhub Terms of Use (including
            the Perks Terms of Use), available at
            https://www.grubhub.com/legal/terms-of-use. Grubhub reserves the
            right to cancel, suspend and/or modify any aspect of or the entirety
            of this offer, for any reason at any time, with or without notice,
            including, without limitation, if any fraud or technical failure
            impairs the integrity or proper functioning of the offer.
          </p>
        </div>
      </div>
      <hr />
      <div className="footer-icon">
        <img src={assets.spotify_icon} alt="" className="icon_"/>
        <img src={assets.pinterest_icon} alt="" className="icon_____" />
        <img src={assets.instagram_icon} alt="" className="icon__" />
        <img src={assets.facebook_icon} alt="" className="icon______" />
        <img src={assets.twitter_icon} alt="" className="icon___" />
        <img src={assets.youtube_icon} alt="" className="icon____" />
      </div>
      <div className="footer-container">
        <ul className="footer-links">
          <li>
            <a href="" className="footer-text">Privacy Police</a>
          </li>
          <li>
            <a href="" className="footer-text">Consumer Health Privacy Notice</a>
          </li>
          <li>
            <a href="" className="footer-text">Termes of Use</a>
          </li>
          <li>
            <a href="" className="footer-text">Do Not Share My Personal Information</a>
          </li>
          <li>
            <a href="" className="footer-text">CA Supply Chain Act</a>
          </li>
          <li>
            <a href="" className="footer-text">Accessibility</a>
          </li>
          <li>
            <a href="" className="footer-text">Cookie Preferenkes</a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p>© 2024 Starbucks Coffee Company. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
