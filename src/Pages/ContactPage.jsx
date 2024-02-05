import React from 'react'


const ContactPage = () => {

  const Hero = {
    backgroundImage: "url('https://t4.ftcdn.net/jpg/05/51/75/07/360_F_551750713_JdiH991rrrSFL5i7DAAYsL0Ua0riYpUO.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingTop: '340px',
    backgroundPosition: 'center',
  };

  return (
    <>
      {/* Hero Section */}
      <section>
        <div className='container-fluid pb-5' style={Hero}>
          <div className='container-md p-5'>
            <h1 className='text-white fs-1'>Contact Us</h1>
          </div>
        </div>
      </section>

      {/* Button Filters Section */}
      <section>
        <div className='container-sm p-5'>
          <h1 className='fs-1 text-center mb-3'>Welcome to Bajrang Motors Support</h1>
          <p className='fs-6 text-center max-width-800 mb-4'>We’re here to help. Looking for customer service contact information? Explore support resources for the relevant products below to find the best way to reach out about your issue.</p>
          <div className='row justify-content-center'>
            <div className='col-3 p-4 text-center'>
              <div className='col shadow-lg p-5'>
                <svg className='mb-4' width="28px" height="28px" viewBox="0 0 24 24" fill="none"><title>Car front</title><path d="m20.9 9-1.5-4.6c-.3-.8-1-1.4-1.9-1.4H6.4c-.9 0-1.6.5-1.9 1.4L3 9H1v3h1v9h4v-2h12v2h4v-9h1V9h-2.1ZM5 14h4v2H5v-2Zm10 2v-2h4v2h-4ZM7.1 6h9.7l1.3 4H5.8l1.3-4Z" fill="currentColor"></path></svg>
                <p className='fs-6 fw-normal'>User Support</p>
              </div>
            </div>
            <div className='col-3 p-4 text-center'>
              <div className='col shadow-lg p-5'>
                <svg className='mb-4' width="28px" height="28px" viewBox="0 0 24 24" fill="none"><title>Car front</title><path d="m20.9 9-1.5-4.6c-.3-.8-1-1.4-1.9-1.4H6.4c-.9 0-1.6.5-1.9 1.4L3 9H1v3h1v9h4v-2h12v2h4v-9h1V9h-2.1ZM5 14h4v2H5v-2Zm10 2v-2h4v2h-4ZM7.1 6h9.7l1.3 4H5.8l1.3-4Z" fill="currentColor"></path></svg>
                <p className='fs-6 fw-normal'>Dealer Support</p>
              </div>
            </div>
            <div className='col-3 p-4 text-center'>
              <div className='col shadow-lg p-5'>
                <svg className='mb-4' width="28px" height="28px" viewBox="0 0 24 24" fill="none"><title>Car front</title><path d="m20.9 9-1.5-4.6c-.3-.8-1-1.4-1.9-1.4H6.4c-.9 0-1.6.5-1.9 1.4L3 9H1v3h1v9h4v-2h12v2h4v-9h1V9h-2.1ZM5 14h4v2H5v-2Zm10 2v-2h4v2h-4ZM7.1 6h9.7l1.3 4H5.8l1.3-4Z" fill="currentColor"></path></svg>
                <p className='fs-6 fw-normal'>General Enquiry</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Info Section */}
      <section>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-4 p-0'>
              <div className='col p-0' style={{ height: '100%' }}>
                <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                  style={{ border: "0", width: "100%", height: "100%" }} allowfullscreen title='map'></iframe>
              </div>
            </div>
            <div className='col-4 p-0' style={{ backgroundColor: '#f7f7f7' }}>
              <div className='col p-5'>
                <h1 className='fs-1 mb-4'>Meet Us</h1>
                <div className='row align-items-baseline'>
                  <i className="fa fa-phone col-1" aria-hidden="true"></i>
                  <p className='fs-6 col-11 p-0'>+40724343949</p>
                </div>
                <div className='row  align-items-baseline'>
                  <i className="fa fa-envelope col-1" aria-hidden="true"></i>
                  <p className='fs-6 col-11 p-0'>contact@brandaffair.ro</p>
                </div>
                <div className='row  align-items-baseline'>
                  <i className="fa fa-globe col-1" aria-hidden="true"></i>
                  <p className='fs-6 col-11 p-0'>Amman St, no 35, 4th floor, ap 10, Bucharest</p>
                </div>
              </div>
            </div>
            <div className='col-4 p-0' style={{ backgroundColor: '#ededed' }}>
              <div className='col p-5'>
                <h1 className='fs-1 mb-4'>Contact Us</h1>
                <p className='fs-6 col-11 p-0'>Hello,<br /><br />My name is <span>your-name</span> and my e-mail address is <span>your-email</span> and I would like to discuss about <span>this Project</span>.</p>
                <button type="button" class="btn btn-dark rounded-pill px-5 py-2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-3 fw-normal" id="exampleModalLabel">Get in Touch!</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <form id="contact-form" name="myForm" className="form py-3" action="#" onsubmit="return validateForm()" method="POST" role="form">

                          <div class="form-group">
                            <label class="form-label" id="nameLabel" for="name"></label>
                            <input type="text" class="form-control" id="name" name="name" placeholder="Your name" tabindex="1" />
                          </div>

                          <div class="form-group">
                            <label class="form-label" id="emailLabel" for="email"></label>
                            <input type="email" class="form-control" id="email" name="email" placeholder="Your Email" tabindex="2" />
                          </div>

                          <div class="form-group">
                            <label class="form-label" id="subjectLabel" for="sublect"></label>
                            <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" tabindex="3" />
                          </div>

                          <div class="form-group">
                            <label class="form-label" id="messageLabel" for="message"></label>
                            <textarea rows="6" cols="60" name="message" class="form-control" id="message" placeholder="Your message" tabindex="4"></textarea>
                          </div>

                          <div class="text-center margin-top-25">
                            <button type="submit" class="btn btn-mod btn-border btn-large">Send Message</button>
                          </div>

                        </form>
                        {/* <!-- End form --> */}
                      </div>
                    </div>
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

export default ContactPage;
