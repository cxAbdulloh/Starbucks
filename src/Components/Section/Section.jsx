import React from "react";
import "./Section.css";
import { assets } from "../../assets/assets";

const Section = () => {
  return (
    <>
        <div className="container">
          <div className="product-container">
            <div className="one-product">
              <div className="product-left">
                <img
                  alt="Starbucks products with gold stars featured on a pink and purple gradient background."
                  className="block"
                  src={assets.photo_1}
                />
              </div>
              <div className="product-right">
                <div className="one-product-title">
                  Summer is brighter with free treats.
                </div>
                <div className="one-product-button">
                  Join To Rewards
                </div>
              </div>
            </div>
          </div>
          <div className="product-container">
            <div className="second-product">
              <div className="product-right">
                <div className="second-product-title">
                  Deliver summer to your door
                </div>
                <div className="second-product-description">
                  Starbucks is now on Grubhub! Get 25% off your Starbucks order
                  of $15 or more on Grubhub until 8/11. Use promo code SBUX25 to
                  redeem.**
                </div>
                <div className="second-product-button">
                  Order Now
                </div>
              </div>
              <div className="product-left">
                <img
                  alt="Two yellow iced drinks with pineapple inclusions in tall glasses."
                  className="block"
                  src={assets.photo_2}
                />
              </div>
            </div>
          </div>
          <div className="product-container">
            <div className="three-product">
              <div className="product-left">
                <img
                  alt="Three venti-sized iced drinks, two are a sparkling clear beverage topped with a pink or green tea, and the third is frozen with pink swirls of strawberry puree."
                  class="block"
                  src={assets.photo_5}
                ></img>
              </div>
              <div className="product-right">
                <div className="three-product-title">New Iced Energy.</div>
                <div className="three-product-description">
                  Enjoy a powerful boost of energy handcrafted with sparkling
                  fruit flavors. Try it frozen with a swirl of strawberry puree.
                </div>
                <div className="three-product-button">
                  Order Now
                </div>
              </div>
            </div>
          </div>
          <div className="product-container">
            <div className="five-product">
              <div className="product-right">
                <div className="five-product-title">Here’s an A+ gift</div>
                <div className="five-product-description">
                Celebrate back to school by sending your favorite students,
                 parents and school staff members a Starbucks eGift.
                </div>
                <div className="five-product-button">
                  Send an eGift
                </div>
              </div>
              <div className="product-left">
                <img
                  alt="Here’s an A+ gift"
                  className="block"
                  src={assets.photo_6}
                />
              </div>
            </div>
          </div>
          <div className="product-container">
            <div className="four-product">
              <div className="product-right">
                <div className="four-product-title">Personal cups for good</div>
                <div className="four-product-description">
                Your choice is a positive and responsible one — because bringing your clean reusable cup helps our planet.
                </div>
                <div className="four-product-button">
                  Send an eGift
                </div>
              </div>
              <div className="product-left">
                <img
                  alt="Gift card with an illustrated backpack and “BACK AT IT!” message."
                  className="block"
                  src={assets.photo_4}
                />
              </div>
            </div>
          </div>  
        </div>
    </>
  );
};

export default Section;
