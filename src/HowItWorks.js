import React, { useState } from "react";
import workapi from "./API/workApi.js";

const HowItWorks = () => {
  const [workData, setWorkData] = useState(workapi);
  console.log(workData);
  return (
    <>
      <section>
        <div className="work-container container">
          <h1 className="main-heading text-center">Why Us?</h1>
          <h4 className="main-h4">FreeTechCafe is a provider of a wide range of business solutions that are innovative, secure, and user-friendly designed to meet the peculiar needs of various companies be it large, medium or small scale. As a Custom Application Development Services company, our delivery approaches, methodologies, tools, and teams are designed to ensure that the solution delivered to the customer meets their needs. We strive to get it right the first time whilst ensuring speed and world-class quality. We are at the forefront of providing multiple end-to-end business services that focus on maximum scalability and better performance for your organisation. Our teams help you decide the right architecture and processes to follow and oversee the successful delivery of your software projects.</h4>
          <div className="row">
            {workData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div className="col-12 col-lg-4 text-center work-container-subdiv">
                    {/* <i class={`fontawesome-style ${logo}`}></i> */}
                    <img src={logo} alt="" />
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para w-100">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
