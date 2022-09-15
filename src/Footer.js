import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-12 col-lg-5">
                  <h2>Get In Touch</h2>
                  <ul>
                    <li>
                    <i className="fas fa-map-marker-alt m-3"></i>
                      <a href="#">Floor - 4, Tower C, Tek Meadows, No.51, Shollinganallur, Chennai, India - 600119</a>
                    </li>
                    <li>
                    <i className="fas fa-phone-alt"></i>
                      <a href="#">+92-3225454495</a>
                    </li>
                    <li>
                    <i className="fa fa-envelope m-3"></i>
                      <a href="#">ch.afzal646@gmail.con</a>
                    </li>                    
                  </ul>
                </div>                

                <div className="col-12 col-lg-5">
                  <h2>Links To Know More</h2>
                  <ul>
                    <li>
                    <i className="fas fa-arrow-right m-3"></i>
                      <a href="#">Web Development</a>
                    </li>
                    <li>
                    <i className="fas fa-arrow-right m-3"></i>
                      <a href="#">Graphics Designing</a>
                    </li>
                    <li>
                    <i className="fas fa-arrow-right m-3"></i>
                      <a href="#">Snapchat Filters</a>
                    </li>
                    <li>
                    <i className="fas fa-arrow-right m-3"></i>
                      <a href="#">Privcy Policy</a>
                    </li>
                  </ul>
                </div>

                <div className="col-12 col-lg-2">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <i class="fab fa-facebook-f fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/thapatechnical/"
                        target="_thapa">
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-youtube fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-twitter fontawesome-style"></i>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2022 CHAFZAL. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
