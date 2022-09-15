import React, { useState } from "react";
import serviceapi from "./API/serviceApi.js";

const Services = () => {
  const [serviceData, setServiceData] = useState(serviceapi);
  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
          Our Key Services
          </h1>
          <h4 className="main-h4">
          We offer consistent Web Development Services, Business Automation Services, Mobile Application Development services and IoT Solutions to our diverse clientele. As a Custom Application Development Services company, our delivery approaches, methodologies, tools, and teams are designed to ensure that the solution delivered to the customer meets their needs. We strive to get it right the first time whilst ensuring speed and world-class quality. We are at the forefront of providing multiple end-to-end business services that focus on maximum scalability and better performance for your organisation.
          </h4>
          <div className="row">
            {serviceData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div
                    className="col-11 col-lg-4 col-xxl-4 work-container-subdiv"
                    key={id}>
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para">{info}</p>
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

export default Services;
