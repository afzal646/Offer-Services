import React from 'react'

const StillThinkingAboutProcess = () => {
  return (
    <>
        <section className="container Stillthinking">
          <div className="row">
            <div className="col-12 col-lg-8 header-left-side d-flex justify-content-center flex-column">
              <h1 className="display-2">
              Still Thinking About Process?
              </h1>
              <p className="Stillthinking-para">
              Our application development services come with utmost quality. Why think a lot, talk to our experts and move without a doubt. Our teams help you decide the right architecture and processes to follow and oversee the successful delivery of your software projects.
              </p>            
              <button className="btn btn-style" type="submit">
              <i className="fas fa-phone-alt"><span>Talk To Us</span></i>
                </button>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-4">             

            <div className="card mb-3 shadow">
  <div className="row g-0">
    <div className="col-12 col-lg-3">
      <img src="https://freetechcafe.com/wp-content/uploads/2021/10/installation-icon.jpg" className='img-fluid rounded-start' alt="img"/>
    </div>
    <div className="col-12 col-lg-9">
      <div className="card-body">        
        <h5 className="card-text">The Applications developed by us has crossed more than 50k+ installations in two years.</h5> 
      </div>
    </div>
  </div>
</div>



<div className="card mb-3 shadow">
  <div className="row g-0">
    <div className="col-12 col-lg-3">
      <img src="https://freetechcafe.com/wp-content/uploads/2021/10/money-icon.jpg" className='img-fluid rounded-start' alt="img"/>
    </div>
    <div className="col-12 col-lg-9">
      <div className="card-body">        
        <h5 className="card-text">The Financial applications developed by us has already processed millions of dollars.</h5> 
      </div>
    </div>
  </div>
</div>

            </div>
          </div>
        </section>
    </>
  )
}

export default StillThinkingAboutProcess