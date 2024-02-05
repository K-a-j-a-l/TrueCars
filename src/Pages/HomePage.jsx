import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomePage = () => {

  const Hero = {
    backgroundImage: "url('https://img.freepik.com/free-vector/realistic-vector-icon-black-car-darkness-with-clouds-dust-lights-glowing-car-rasing_134830-1387.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '180px 0px',
    backgroundPosition: 'center',
  };

  return (
    <>
      {/* Hero Section */}
      <section>
        <div className='container-fluid' style={Hero}>
          <div className='container-md text-center'>
            <h1 className='fs-1 fw-normal mb-4 text-white'>Car buying<br />shaped to your life</h1>
            <form class="flexsearch--form" action="#" method="post">
              <div className='search-form-wrapper'>

              
              <div class="flexsearch--input-wrapper">
                <input class="flexsearch--input" type="search" placeholder="search"/>
              </div>
              
              <input class="flexsearch--submit" type="submit" value="&#10140;" />
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Favourite Brand Section */}
      <section>
        <div className='container-md p-5 text-center'>
          <h2 className='fs-2 text-center'>Shop your favorite brand</h2>
          <div className='Brand-Cards p-5'>
            <div className='row px-5 mb-4'>
              <div className='col-3'>
                <div className='col shadow-sm'>
                  <div className='row p-4 align-items-center'>
                    <img src='https://static.tcimg.net/vehicles/logo/384x384_full_color/cf0bb1b2deca5e84/Toyota.png?auto=format&fill=solid&fit=fill&h=40&w=40' className='img-fluid col-6'/>
                    <p className='fs-6 col-6 p-0 m-0'>Toyota</p>
                  </div>
                </div>
              </div>
              
              <div className='col-3'>
                <div className='col shadow-sm'>
                  <div className='row p-4 align-items-center'>
                    <img src='https://static.tcimg.net/vehicles/logo/991x384_full_color/588008e646f944ab/Ford.png?auto=format&fill=solid&fit=fill&h=40&w=40' className='img-fluid col-6'/>
                    <p className='fs-6 col-6 p-0 m-0'>Ford</p>
                  </div>
                </div>
              </div>
              <div className='col-3'>
                <div className='col shadow-sm'>
                  <div className='row p-4 align-items-center'>
                    <img src='https://static.tcimg.net/vehicles/logo/384x384_full_color/614861eca7caf1b4/BMW.png?auto=format&fill=solid&fit=fill&h=40&w=40' className='img-fluid col-6'/>
                    <p className='fs-6 col-6 p-0 m-0'>BMW</p>
                  </div>
                </div>
              </div>
              <div className='col-3'>
                <div className='col shadow-sm'>
                  <div className='row p-4 align-items-center'>
                    <img src='https://static.tcimg.net/vehicles/logo/1629x384_full_color/638bbde84c5f569e/Kia.png?auto=format&fill=solid&fit=fill&h=40&w=40' className='img-fluid col-6'/>
                    <p className='fs-6 col-6 p-0 m-0'>Kia</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row px-5'>
              <div className='col-3'>
                <div className='col shadow-sm'>
                  <div className='row p-4 align-items-center'>
                    <img src='https://static.tcimg.net/vehicles/logo/605x384_full_color/00fea4dbe4426fc2/Honda.png?auto=format&fill=solid&fit=fill&h=40&w=40' className='img-fluid col-6'/>
                    <p className='fs-6 col-6 p-0 m-0'>Honda</p>
                  </div>
                </div>
              </div>
              
              <div className='col-3'>
                <div className='col shadow-sm'>
                  <div className='row p-4 align-items-center'>
                    <img src='https://static.tcimg.net/vehicles/logo_text/384x384_full_color/d88259cdbac929b7/Hyundai.png?auto=format&fill=solid&fit=fill&h=40&w=40' className='img-fluid col-6'/>
                    <p className='fs-6 col-6 p-0 m-0'>Hyundai</p>
                  </div>
                </div>
              </div>
              <div className='col-3'>
                <div className='col shadow-sm'>
                  <div className='row p-4 align-items-center'>
                    <img src='https://static.tcimg.net/vehicles/logo/384x384_full_color/959be7e00726a9e0/Mercedes-Benz.png?auto=format&fill=solid&fit=fill&h=40&w=40' className='img-fluid col-6'/>
                    <p className='fs-6 col-6 p-0 m-0'>Mercedes</p>
                  </div>
                </div>
              </div>
              <div className='col-3'>
                <div className='col shadow-sm'>
                  <div className='row p-4 align-items-center'>
                    <img src='https://static.tcimg.net/vehicles/logo/1088x384_full_color/0598fce6d069a5a0/Audi.png?auto=format&fill=solid&fit=fill&h=40&w=40' className='img-fluid col-6'/>
                    <p className='fs-6 col-6 p-0 m-0'>Audi</p>
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>
          <button type="button" class="btn btn-outline-dark rounded-pill px-5 py-2">View More!</button>

        </div>
      </section>

      {/* Why True Cars Section */}
      <section>
        <div className='container-fluid text-center' style={{ backgroundColor: 'black', padding: '50px 0px' }}>
          <div className='container-md justify-content-center'>
            <h2 className='h2 text-center text-white'>Why Bajrang Motors ?</h2>
            <div className='row justify-content-center'>
              <div className='col-lg-3'>
                <div className='col p-5 text-center'>
                  <img className="mb-4" src='https://consumer.tcimg.net/assets/_next/static/images/transparent-pricing-4d7899553551b3a2db95d346ac20062f.svg'></img>
                  <p class="h5 mb-3 fs-5 text-white">Transparent Pricing</p>
                  <p class="text-center fs-6 text-white">Center aligned text on all viewport sizes.</p>
                </div>
              </div>
              <div className='col-lg-3 '>
                <div className='col p-5 text-center'>
                  <img className="mb-4" src='https://consumer.tcimg.net/assets/_next/static/images/minutes-not-hours-48afd64860a3e72b36d5986738c77eb4.svg'></img>
                  <p class="h5 mb-3 fs-5 text-white">Minutes, not hours</p>
                  <p class="text-center fs-6 text-white">Center aligned text on all viewport sizes.</p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='col p-5 text-center'>
                  <img className="mb-4" src='https://consumer.tcimg.net/assets/_next/static/images/shop-your-way-f575579b12ccf6daf39539dab242c0e2.svg'></img>
                  <p class="h5 mb-3 fs-5 text-white">Shop your way</p>
                  <p class="text-center fs-6 text-white">Center aligned text on all viewport sizes.</p>
                </div>
              </div>

            </div>
            <button type="button" class="btn btn-outline-light rounded-pill px-5 py-2">Know More!</button>

          </div>
        </div>
      </section>

      {/* Top rated Car Types Section */}
      <section>
        <div className='container-md p-5 text-center'>
          <h2 className='h2 text-center mb-5'>Top Rated Cars by Type</h2>
          <div className='row justify-content-center px-5 mb-5'>
            <div className='col-1 flex-grow-1 px-1'>
              <img src='https://consumer.tcimg.net/assets/_next/static/images/sedan-dff0d70ce3dfc53c7d48d91e79a26652.jpg?auto=format&fit=max&h=851.214953271028&w=360' className='img-fluid mb-2'/>
              <p className='fs-6 text-center'>Sedan</p>
            </div>
            <div className='col-1 flex-grow-1 px-1'>
              <img src='https://consumer.tcimg.net/assets/_next/static/images/sedan-dff0d70ce3dfc53c7d48d91e79a26652.jpg?auto=format&fit=max&h=851.214953271028&w=360' className='img-fluid mb-2 rounded'/>
              <p className='fs-6 text-center'>Sedan</p>
            </div>
            <div className='col-1 flex-grow-1 px-1'>
              <img src='https://consumer.tcimg.net/assets/_next/static/images/suv-275ed70df463ea1cae0748f15eced3ae.jpg?auto=format&fit=max&h=851.214953271028&w=360' className='img-fluid mb-2 rounded'/>
              <p className='fs-6 text-center'>SUVs</p>
            </div>
            <div className='col-1 flex-grow-1 px-1'>
              <img src='https://consumer.tcimg.net/assets/_next/static/images/truck-ad515512810927b6687812b8b9cb64ae.jpg?auto=format&fit=max&h=851.214953271028&w=360' className='img-fluid mb-2 rounded'/>
              <p className='fs-6 text-center'>Trucks</p>
            </div>
            <div className='col-1 flex-grow-1 px-1'>
              <img src='https://consumer.tcimg.net/assets/_next/static/images/van-f52db2b870549226c6612da6419c1896.jpg?auto=format&fit=max&h=851.214953271028&w=360' className='img-fluid mb-2 rounded'/>
              <p className='fs-6 text-center'>Vans</p>
            </div>
            <div className='col-1 flex-grow-1 px-1'>
              <img src='https://consumer.tcimg.net/assets/_next/static/images/ev-a95ca4103bd2356b4c93ca70ec6595e4.jpg?auto=format&fit=max&h=851.214953271028&w=360' className='img-fluid mb-2 rounded'/>
              <p className='fs-6 text-center'>Electric Vehicles</p>
            </div>
            <div className='col-1 flex-grow-1 px-1'>
              <img src='https://consumer.tcimg.net/assets/_next/static/images/hybrid-8674ca92667ba94371e57e7a91f07823.jpg?auto=format&fit=max&h=851.214953271028&w=360' className='img-fluid mb-2 rounded'/>
              <p className='fs-6 text-center'>Hybrids</p>
            </div>
            <div className='col-1 flex-grow-1 px-1'>
              <img src='https://consumer.tcimg.net/assets/_next/static/images/phev-b1b4bb23d87b76a3944a7fe7b7ef7e1d.jpg?auto=format&fit=max&h=851.214953271028&w=360' className='img-fluid mb-2 rounded'/>
              <p className='fs-6 text-center'>Plug-In Hybrids</p>
            </div>
          </div>
          <button type="button" class="btn btn-outline-dark rounded-pill px-5 py-2">See All!</button>

        </div>
      </section>

      {/* Car Reviews */}
      <section id='Car-Reviews'>
        <div className='container-md text-center p-5 '>
          <h2 className="mb-5">Get car reviews from our experts</h2>
          <div className='row px-5 mb-5'>
            <div className='col-4 p-3'>
              <div className='col pb-3 px-0 bg-light'>
                <img src='https://static.tcimg.net/vehicles/oem/8ef27016b2481849/2025-Mazda-CX-70.jpg?auto=format&fit=crop&h=531.0638297872341&w=960' className='img-fluid mb-3'/>
                <p className='fs-5 fw-normal'>2025 Mazda CX-70</p>
                <div className='row justify-content-center align-items-center'>
                  <img src='https://static.tcimg.net/authors/f87b0438776d6ed1/ben-stewart.jpg?auto=format&fit=crop&h=34&w=34' className='img-fluid col-6 rounded-circle profile p-0'/>
                  <p className='col-6 m-0 text-left fs-6 '>By Ben Stewart</p>
                </div>
              </div>
            </div>
            <div className='col-4 p-3'>
              <div className='col pb-3 px-0 bg-light'>
                <img src='https://static.tcimg.net/vehicles/oem/8ef27016b2481849/2025-Mazda-CX-70.jpg?auto=format&fit=crop&h=531.0638297872341&w=960' className='img-fluid mb-3'/>
                <p className='fs-5 fw-normal'>2024 Ferrari Purosangue</p>
                <div className='row justify-content-center align-items-center'>
                  <img src='https://static.tcimg.net/authors/f87b0438776d6ed1/ben-stewart.jpg?auto=format&fit=crop&h=34&w=34' className='img-fluid col-6 rounded-circle profile p-0'/>
                  <p className='col-6 m-0 text-left fs-6 '>By Mark Takahashi</p>
                </div>
              </div>
            </div>
            <div className='col-4 p-3'>
              <div className='col pb-3 px-0 bg-light'>
                <img src='https://static.tcimg.net/vehicles/oem/8ef27016b2481849/2025-Mazda-CX-70.jpg?auto=format&fit=crop&h=531.0638297872341&w=960' className='img-fluid mb-3'/>
                <p className='fs-5 fw-normal'>2024 Porsche Macan Electric</p>
                <div className='row justify-content-center align-items-center'>
                  <img src='https://static.tcimg.net/authors/f87b0438776d6ed1/ben-stewart.jpg?auto=format&fit=crop&h=34&w=34' className='img-fluid col-6 rounded-circle profile p-0'/>
                  <p className='col-6 m-0 text-left fs-6 '>By Perry Stern</p>
                </div>
              </div>
            </div>
          </div>
          <button type="button" class="btn btn-outline-dark rounded-pill px-5 py-2">See All!</button>
        </div>

      </section>

      {/* Resources Section */}
      <section>
        <div className="text-center py-5">
          <h1 className="mb-5"> Resources </h1>
          <div class="container">
            <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
              </li>
            </ul>
            <div class="tab-content mt-1" id="myTabContent">
              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneone" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                      </button>
                    </h2>
                    <div id="collapseOneone" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseoneTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                      </button>
                    </h2>
                    <div id="collapseoneTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseoneThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                      </button>
                    </h2>
                    <div id="collapseoneThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwoOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                      </button>
                    </h2>
                    <div id="collapsetwoOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwoTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                      </button>
                    </h2>
                    <div id="collapsetwoTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwoThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                      </button>
                    </h2>
                    <div id="collapsetwoThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsethreeOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                      </button>
                    </h2>
                    <div id="collapsethreeOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsethreeTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                      </button>
                    </h2>
                    <div id="collapsethreeTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsethreeThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                      </button>
                    </h2>
                    <div id="collapsethreeThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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

export default HomePage;


