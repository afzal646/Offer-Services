import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last">
              <h1 className="display-2">
              Design & grow your <br />website with us!
              </h1>
              <p className="main-hero-para">
              We are expert in web design and development. We offer complete website solution from developing your website to bringing organic traffic.
              </p>
              {/* <h3>Get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill  w-50 w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                />
                <div className="input-group-button">Get it now</div>
              </div> */}
              <button class="btn btn-style" type="submit">
                  Get Your Proposal
                </button>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images order-md-first order-sm-first">
              <img
                src="https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?w=740&t=st=1660382964~exp=1660383564~hmac=bd32f82aa7535c5430a1a7aae4558ac8a09b85b023e1d5f6970183f927a85c6c"
                alt="heroimg"
                className="img-fluid"
              />
              <img
                src="https://img.freepik.com/free-vector/new-app-development-desktop_23-2148684987.jpg?w=740&t=st=1660383592~exp=1660384192~hmac=f5df4ba7a91556650c3572a1a29ce10f4992ebca0f4f557bfada6c857409f6e8"
                alt="heroimg4"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
