import React from 'react'


const AboutPage = () => {

  const Hero = {
    backgroundImage: "url('https://i.pinimg.com/originals/44/44/10/4444106f8e5fd6cd2a654b5a31fb0941.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingTop: '340px',
    backgroundPosition: 'center',
  };

  const Ceomessage = {
    backgroundImage: "url('https://www.uber-assets.com/image/upload/v1590112350/assets/ba/e2d6c0-0335-4c4c-ad45-04097c24e819/original/dara-desktop.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '140px 0px 90px 0px',
  };

  return (
    <>

      {/* Hero Section */}
      <section>
        <div className='container-fluid pb-5' style={Hero}>
          <div className='container-md p-5'>
            <h1 className='text-white fs-1'>About Us</h1>
          </div>
        </div>
      </section>

      {/* About Intro Section */}
      <section>
        <div className='container-md p-5'>
          <div className='row'>
            <div className='col-8'>
              <h2 className='fw-medium fs-1 mb-4'>We reimagine the way the world moves for the better</h2>
              <p className='fs-6 mb-4'>Movement is what we power. It’s our lifeblood. It runs through our veins. It’s what gets us out of bed each morning. It pushes us to constantly reimagine how we can move better. For you. For all the places you want to go. For all the things you want to get. For all the ways you want to earn. Across the entire world. In real time. At the incredible speed of now.</p>
            </div>
            <div className='col-12'>
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Read our full mission statement
                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">We are Bajrang Motors. The go-getters. The kind of people who are relentless about our mission to help people go anywhere and get anything and earn their way. Movement is what we power. It’s our lifeblood. It runs through our veins. It’s what gets us out of bed each morning. It pushes us to constantly reimagine how we can move better. For you. For all the places you want to go. For all the things you want to get. For all the ways you want to earn. Across the entire world. In real time. At the incredible speed of now.<br /><br />

                      We are a tech company that connects the physical and digital worlds to help make movement happen at the tap of a button. Because we believe in a world where movement should be accessible. So you can move and earn safely. In a way that’s sustainable for our planet. And regardless of your gender, race, religion, abilities, or sexual orientation, we champion your right to move and earn freely and without fear. Of course, we haven’t always gotten it right. But we’re not afraid of failure, because it makes us better, wiser, and stronger. And it makes us even more committed to do the right thing by our customers, local communities and cities, and our incredibly diverse set of international partners.<br /><br />

                      The idea for Uber was born on a snowy night in Paris in 2008, and ever since then our DNA of reimagination and reinvention carries on. We’ve grown into a global platform powering flexible earnings and the movement of people and things in ever expanding ways. We’ve gone from connecting rides on 4 wheels to 2 wheels to 18-wheel freight deliveries. From takeout meals to daily essentials to prescription drugs to just about anything you need at any time and earning your way. From drivers with background checks to real-time verification, safety is a top priority every single day. At Uber, the pursuit of reimagination is never finished, never stops, and is always just beginning.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Ceo's Message Section */}
      <section>
        <div className='container-fluid ' style={Ceomessage}>
          <div className='container-md p-4'>
            <div className='col-5'>
              <h1 className='fw-normal text-white mb-4 fs-1' >A letter from our CEO</h1>
              <p className='text-white mb-4 fs-6'>Read about our team’s commitment to provide everyone on our global platform with the technology that can help them move ahead.</p>
              <button type="button" class="btn btn-light rounded-pill px-5 py-2">Read More!</button>
            </div>

          </div>

        </div>
      </section>

      {/* info section 1 */}
      <section>
        <div className='container-md' style={{ padding: '80px 0px' }}>
          <div className='row justify-content-around'>
            <div className='col-5'>
              <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_600,h_400/v1554854756/assets/74/0853d5-80e4-414a-91d7-6fd0b15a136d/original/UberIM_20250-medium-%282%29.jpg" className="img-fluid" />
            </div>
            <div className='col-5'>
              <h3 className='fw-medium fs-2 mb-3'>Sustainability</h3>
              <p className='fs-6'>Bajrang Motors is committing to becoming a fully electric, zero-emission platform by 2040, with 100% of rides taking place in zero-emission vehicles, on public transit, or with micromobility. It is our responsibility as the largest mobility platform in the world to more aggressively tackle the challenge of climate change. We will do this by offering riders more ways to ride green, helping drivers go electric, making transparency a priority and partnering with NGOs and the private sector to help expedite a clean and just energy transition.</p>
              <p className='fs-6'><a class="link-offset-3 text-black" href="#">Learn More</a></p>

            </div>
          </div>
        </div>
      </section>

      {/* info section 2 */}
      <section>
        <div className='container-md' style={{ padding: '80px 0px' }}>
          <div className='row justify-content-around'>
            <div className='col-5'>
              <h3 className='fw-medium fs-2 mb-3'>Sustainability</h3>
              <p className='fs-6 '>Bajrang Motors is committing to becoming a fully electric, zero-emission platform by 2040, with 100% of rides taking place in zero-emission vehicles, on public transit, or with micromobility. It is our responsibility as the largest mobility platform in the world to more aggressively tackle the challenge of climate change. We will do this by offering riders more ways to ride green, helping drivers go electric, making transparency a priority and partnering with NGOs and the private sector to help expedite a clean and just energy transition.</p>
              <p className='fs-6'><a class="link-offset-3 text-black" href="#">Learn More</a></p>
            </div>
            <div className='col-5'>
              <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_698,h_465/v1555433729/assets/13/b383de-93a1-4327-8812-91de86e3edd9/original/_background-01.svg" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* company info section */}
      <section>
        <div className='container-md p-5'>
          <h3 className='fw-normal mb-3 fs-2 p-3'>Company info</h3>
          <div className='row'>
            <div className='col-4 p-4'>
              <img src="../xyz.jpg" className="img-fluid mb-3" />
              <h5 className=''>Who's driving Bajrang Motors</h5>
              <p className='fs-6'>We’re building a culture within Bajrang Motor that emphasizes doing the right thing, period, for riders, drivers, and employees. Find out more about the team that’s leading the way.</p>
              <p className='fs-6'><a class="link-offset-3 text-black" href="#">See our leadership</a></p>
            </div>
            <div className='col-4 p-4'>
              <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_450,h_300/v1619719896/assets/96/8d24b6-76cd-4dcb-8b89-e3125c603538/original/test2259.jpg" className="img-fluid mb-3" />
              <h5 className=''>Who's driving Bajrang Motors</h5>
              <p className='fs-6'>We’re building a culture within Bajrang Motor that emphasizes doing the right thing, period, for riders, drivers, and employees. Find out more about the team that’s leading the way.</p>
              <p className='fs-6'><a class="link-offset-3 text-black" href="#">Read About Diversity</a></p>
            </div>
            <div className='col-4 p-4'>
              <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_450,h_300/v1664822806/assets/b6/c8a24d-8e79-45a1-9e03-adead244ef0a/original/about-ec-image-01-thumb.png" className="img-fluid mb-3" />
              <h5 className=''>Who's driving Bajrang Motors</h5>
              <p className='fs-6'>We’re building a culture within Bajrang Motor that emphasizes doing the right thing, period, for riders, drivers, and employees. Find out more about the team that’s leading the way.</p>
              <p className='fs-6'><a class="link-offset-3 text-black" href="#">Learn More</a></p>
            </div>

          </div>
        </div>
      </section>

      {/* Make your Brand Section */}
      <section>
        <div className='container-md' style={{ padding: '80px 0px' }}>
          <div className='row justify-content-around'>
            <div className='col-5'>
              <h3 className='fw-medium fs-2 mb-3'>Make your brand go where people go</h3>
              <p className='fs-6 '>Bajrang Motor is committing to becoming a fully electric, zero-emission platform by 2040, with 100% of rides taking place in zero-emission vehicles, on public transit, or with micromobility. It is our responsibility as the largest mobility platform in the world to more aggressively tackle the challenge of climate change. We will do this by offering riders more ways to ride green, helping drivers go electric, making transparency a priority and partnering with NGOs and the private sector to help expedite a clean and just energy transition.</p>
              <p className='fs-6'><a class="link-offset-3 text-black" href="#">Learn More</a></p>
            </div>
            <div className='col-5'>
              <img src="../car.jpg" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Section */}
      <section>
        <div className='container-md p-5'>
          <h3 className='fw-normal mb-4 fs-2'>Company info</h3>
          <div className='row'>
            <div className='col-4 p-4'>
              <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_30,h_30/v1542255691/assets/85/aa54ca-6b5b-48d7-82ac-20657ec53f51/original/megaphone-outlined.svg" className="img-fluid mb-3" />
              <h5 className=''>Newsroom</h5>
              <p className='fs-6'>Get announcements about partnerships, app updates, initiatives, and more near you and around the world.</p>
              <p className='fs-6'><a class="link-offset-3 text-black" href="#">Go to Newsroom</a></p>
            </div>
            <div className='col-4 p-4'>
              <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_30,h_30/v1542250072/assets/b8/ea1bfc-215a-4246-97f2-a7ac03cd67bd/original/person_group-filled.svg" className="img-fluid mb-3" />
              <h5 className=''>Blog</h5>
              <p className='fs-6'>Find new places to explore and learn about Bajrang Motor products, partnerships, and more.</p>
              <p className='fs-6'><a class="link-offset-3 text-black" href="#">Read our Posts</a></p>
            </div>
            <div className='col-4 p-4'>
              <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_30,h_30/v1542249793/assets/34/131a8c-392f-44a9-9745-3b8c110502f5/original/network-filled.svg" className="img-fluid mb-3" />
              <h5 className=''>Investor Relations</h5>
              <p className='fs-6'>Download financial reports, see next-quarter plans, and read about our corporate responsibility initiatives.</p>
              <p className='fs-6'><a class="link-offset-3 text-black" href="#">Learn More</a></p>
            </div>

          </div>
        </div>
      </section>

      {/* Reimagine Section */}
      <section>
        <div className='container-fluid' style={{ background: '#f6f6f6' }}>
          <div className='container-md' style={{ padding: '80px 0px' }}>
            <div className='row justify-content-around'>
              <div className='col-5' style={{ paddingTop: '80px' }}>
                <h1 className='fw-medium fs-1 mb-3 text-black'>Come reimagine<br/>with us</h1>
                <button type="button" class="btn btn-dark rounded-pill px-5 py-2">Know More!</button>
              </div>
              <div className='col-5'>
                <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_698,h_465/v1555543261/assets/cb/bed1c3-cb3e-4a20-9790-df8c8a2951fc/original/globe_background-01.svg" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default AboutPage;
