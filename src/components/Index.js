import React from 'react'
  import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Index() {

  
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
   


    <>
  <nav className="navbar navbar-expand-lg navbarbg">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src="./images/logo.webp" alt="" srcSet="" className="navlogo" />
      </a>
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="toggler-icon top-bar" />
        <span className="toggler-icon middle-bar" />
        <span className="toggler-icon bottom-bar" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Add ms-auto class to move all items to the right */}
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a
              className="nav-link active textcolor"
              aria-current="page"
              href="#features"
            >
              Featured
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link textcolor" href="#faq">
              FAQ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link textcolor" href="#pricing">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link textcolor" href="#testimonials">
              Testimonial
            </a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <button
              type="button"
              style={{ backgroundColor: "#fff" }}
              className="btn  mx-2 p-2 button_navbar"
            >
              <b>Buy Template</b>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <section className="setion1 mb-5">
    <div className="d-flex justify-content-center">
      <button type="button" className="btn btn-light btn_para text-primary">
        👋 &nbsp;<b>WELCOME TO MANAGE WISE</b>
      </button>
    </div>
    <div
      className="d-flex justify-content-center"
      data-aos="fade-up"
      data-aos-duration={2500}
    >
      <p className="para1">Empower your business with </p>
    </div>
    <div
      className="d-flex justify-content-center"
      style={{ marginTop: "-35px" }}
      data-aos="fade-up"
      data-aos-duration={2500}
    >
      <p className="para1">
        <span className="para2">
          {" "}
          <span className="para3">Strategic</span> insights
        </span>
      </p>
    </div>
    <div
      className="d-flex justify-content-center"
      data-aos="fade-up"
      data-aos-duration={1500}
    >
      <p className="para4">
        Powerful management platform designed to streamline your business{" "}
      </p>
    </div>
    <div
      className="d-flex justify-content-center"
      data-aos="fade-up"
      data-aos-duration={1500}
    >
      <p className="para4">operations, boost productivity, and drive success</p>
    </div>
    <div
      className="d-flex justify-content-center"
      data-aos="fade-up"
      data-aos-duration={1000}
    >
      <button type="button" className="btn btn-primary btn1">
        <b>Get Started</b>
      </button>
      <button type="button" className="btn btn-light mx-3 btn1">
        <b>Watch Demo </b>
        <i className="fa fa-play-circle icon1" />
      </button>
    </div>
  </section>





















  
  <section
    className="mt-5 imgsection"
    data-aos="zoom-in-up"
    data-aos-duration={1000}
  >
    <div className="container mb-5 imagesection1">
      <img
        src="./images/1.webp"
        className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
        alt=""
      />
    </div>
  </section>
  <section className="mb-5 mt-5 " id="discover_section_main ">
    <div className="container main" id="features">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <button type="button" className="btn btn-light btn_para text-primary">
            👋 &nbsp; <b>PREMIER FEATURES</b>
          </button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <p className="para6">
            Discover our product's <span className="para3">Capabilities</span>
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <p className="para4">
            Don't settle for mediocrity - embrace the future of management
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <p className="para4">with Manage Wise.</p>
        </div>
      </div>
    </div>
  </section>















  <section className="discover_product main p-1" id="section2">
  <div className="container px-2 px-md-5">
    <div className="row">
      <div
        className="col-lg-6 col-md-8 col-sm-10 mx-auto mb-4"
        data-aos="fade-up"
        data-aos-duration={1000}
      >
        <div className="card discover_product_div22">
          <div className="card-body">
            <img
              src="./images/star.png"
              alt=""
              className="mb-2"
              style={{ width: "40px", marginTop: "45px" }}
            />
            <h1 className="text-center">
              Boost productivity and streamline workflow with us. Enjoy our
              intuitive interface and robust features.
            </h1>
          </div>
        </div>
      </div>
      <div
        className="col-lg-6 col-md-8 col-sm-10 mx-auto mb-4"
        data-aos="fade-up"
        data-aos-duration={1500}
      >
        <div className="card discover_product_div2">
          <div className="card-body">
            <img
              src="./images/2.webp"
              className="img-fluid rounded-circle"
              alt=""
            />
            <h3 className="para7">SmartTask Management</h3>
            <p className="para8">
              Say goodbye to chaos with our smart task management system
            </p>
          </div>
        </div>
      </div>
    </div>



    <div className="row discover_product_div3">
    <div className="col-lg-4 col-md-6 mb-4">
        <div className="card discover_product_card1" data-aos="fade-up">
          <img src="./images/3.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              <b>Flexible Scheduling</b>
            </h5>
            <p className="card-text para9">
              Stay productive with our flexible <br /> scheduling system
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div
          className="card discover_product_card1"
          data-aos="fade-up"
          data-aos-duration={1500}
        >
          <img src="./images/4.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              <b>Easy Communication</b>
            </h5>
            <p className="card-text para9">
              Collaborate seamlessly with your team <br /> in real-time
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div
          className="card discover_product_card1"
          data-aos="fade-up"
          data-aos-duration={2000}
        >
          <img src="./images/5.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              <b>Analytics</b>
            </h5>
            <p className="card-text para9">
              Gain valuable insights with our advanced <br /> analytics feature
            </p>
          </div>
        </div>
      </div>
    </div>














  </div>
</section>








  
  <section className="productivity pt-5">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <button type="button" className="btn text-primary btn-light btn_para">
            🙋‍♀️ &nbsp;<b>🤩 AND MORE...</b>
          </button>
          <h1 className="mt-4">
            Explore an array of features that elevate your{" "}
            <span> Productivity </span> to new heights
          </h1>
          <p className="headp">
            Discover the tools that will revolutionize the way <br /> you manage
            and optimize your operations
          </p>
        </div>
        <div className="col-md-12 d-flex flex-wrap">
          <div
            className="col-md-6 col-lg-4 col-xl-4 mob"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            <div className="card mb-4" style={{ width: "18rem" }}>
              <div className="imgdiv">
                <img src="./images/i1.png" className="card-img-top" alt="" />
              </div>
              <div className="card-body">
                <div className="details">
                  <h3 className="card-title">Cross-Platform Compatibility</h3>
                  <p className="card-text">
                    Enjoy the flexibility of cross-platform compatibility. Our
                    product works seamlessly across desktop, web, and mobile
                    devices, allowing you to work from your preferred device.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 col-xl-4 mob"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div className="card mb-4" style={{ width: "18rem" }}>
              <div className="imgdiv">
                <img src="./images/i2.png" className="card-img-top" alt="" />
              </div>
              <div className="card-body">
                <div className="details">
                  <h3 className="card-title">
                    Stay Informed with Essential Notifications
                  </h3>
                  <p className="card-text">
                    Automate support from first customer contact to closing the
                    ticket. Drastically improve time to resolution.Automate
                    support from first customer contact to closing the ticket.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 col-xl-4 mob"
            data-aos="fade-up"
            data-aos-duration={2000}
          >
            <div className="card mb-4" style={{ width: "18rem" }}>
              <div className="imgdiv">
                <img src="./images/i3.png" className="card-img-top" alt="" />
              </div>
              <div className="card-body">
                <div className="details">
                  <h3 className="card-title">
                    Secure Data Encryption at all times
                  </h3>
                  <p className="card-text">
                    Trust in our robust data encryption to keep your sensitive
                    information safe and secure. Rest easy knowing your data is
                    protected at all times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row productivity_second_row">
        <div className="col-md-3" data-aos="fade-up" data-aos-duration={2000}>
          <div className="row">
            <div className="col-md-6">
              <img
                src="./images/app-removebg-preview.png"
                alt=""
                srcSet=""
                id="appimg"
              />
              {/* 
                      <img src="./images/app5.png" alt="" srcset="" id="appimg">
                      <img src="./images/app6-removebg-preview.png" alt="" srcset="" id="appimg">
                      <img src="./images/app7-removebg-preview.png" alt="" srcset="" id="appimg">
                      <img src="./images/app8-removebg-preview.png" alt="" srcset="" id="appimg">
                      <img src="./images/app9-removebg-preview.png" alt="" srcset="" id="appimg">
                      <img src="./images/app10-removebg-preview.png" alt="" srcset="" id="appimg"> */}
            </div>
            <div className="col-md-6">
              <img
                src="./images/app2-removebg-preview.png"
                alt=""
                srcSet=""
                id="appimg2"
              />
            </div>
            <div className="col-md-6">
              <img src="./images/app3.png" alt="" srcSet="" id="appimg3" />
            </div>
            <div className="col-md-6">
              <img
                src="./images/notion-removebg-preview.png"
                alt=""
                srcSet=""
                id="appimg4"
              />
            </div>
            <div className="col-md-6">
              <img
                src="./images/4672500-removebg-preview.png"
                alt=""
                srcSet=""
                id="appimg6"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className=" d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            <button
              type="button"
              className="btn text-primary btn-light btn_para"
            >
              <i
                className="fa fa-cog"
                style={{ fontSize: 18 }}
                aria-hidden="true"
              />
              &nbsp;<b>integration</b>
            </button>
          </div>
          <p
            className="mt-4 para18"
            data-aos="fade-up"
            data-aos-duration={1000}
            style={{ color: "#fff" }}
          >
            Enable <br />
            <span className="para11">integration</span>
            with other popular tools and platforms
          </p>
          <h5
            className="mt-2 mb-5 para10  text-center "
            data-aos="fade-up"
            data-aos-duration={2500}
          >
            Seamlessly connect and amplify your workflow <br />
            by enabling integration with a diverse array of <br /> widely-used
            tools and platforms.
          </h5>
          <img
            src="./images/framer.webp"
            data-aos="fade-up"
            data-aos-duration={2000}
            style={{ width: "90%", height: 290 }}
            className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
            alt=""
          />
        </div>
        <div className="col-md-1" />
        <div className="col-md-2" data-aos="fade-up" data-aos-duration={2000}>
          <div className="row">
            <div className="col-md-6">
              <img
                src="./images/framer_2_2x-removebg-preview.png"
                alt=""
                srcSet=""
                id="appimg11"
              />
            </div>
            <div className="col-md-6">
              <img
                src="./images/app9-removebg-preview.png"
                alt=""
                srcSet=""
                id="appimg12"
              />
            </div>
            <div className="col-md-6">
              <img
                src="./images/app7-removebg-preview.png"
                alt=""
                srcSet=""
                id="appimg3"
              />
            </div>
            <div className="col-md-6">
              <img
                src="./images/metaverse-removebg-preview.png"
                alt=""
                srcSet=""
                id="appimg13"
              />
            </div>
            <div className="col-md-6">
              <img src="./images/app5.png" alt="" srcSet="" id="appimg14" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>










































  
  <section className="need_answer main" id="faq">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="">
            <button
              type="button"
              className="btn text-primary btn-light btn_para"
            >
              🙋‍♀️ &nbsp;<b>FAQ</b>
            </button>
          </div>
          <p className="mt-4 para12">
            Need <br />
            <span className="para11">Answers?</span>
          </p>
          <h5 className="mt-3 para10">
            Check out our most commonly <br />
            asked questions below to find the
            <br />
            information you need.
          </h5>
        </div>
        <div className="col-md-8" data-aos="fade-up" data-aos-duration={2000}>
          <div className="m-4">
            <div className="accordion" id="myAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    type="button"
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    <h5> What is Manage Wise and what does it offer?</h5>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <p>
                      Manage Wise is a comprehensive management platform
                      designed to streamline your business operations, enhance
                      productivity, and drive success. It offers a range of
                      features including task management, scheduling,
                      communication tools, analytics, and more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    type="button"
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                  >
                    <h5>
                      {" "}
                      Is Manage Wise suitable for small businesses and larger
                      enterprises alike?
                    </h5>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <p>
                      Yes, Manage Wise is designed to cater to the needs of both
                      small businesses and larger enterprises. Its scalable
                      features and customizable options make it versatile for
                      various business sizes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    type="button"
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                  >
                    <h5>
                      {" "}
                      Can I access Manage Wise from different devices and
                      platforms?
                    </h5>
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <p>
                      Yes, Manage Wise offers cross-platform compatibility,
                      allowing you to access and use the platform seamlessly on
                      desktops, web browsers, and mobile devices.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    type="button"
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                  >
                    <h5>
                      {" "}
                      What kind of support options do you offer to users?
                    </h5>
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <p>
                      We provide responsive customer support via chat and email
                      to assist you with any inquiries, issues, or guidance you
                      may need while using Manage Wise.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    type="button"
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                  >
                    <h5> How secure is the data stored within Manage Wise?</h5>
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  data-bs-parent="#myAccordion"
                >
                  <div className="card-body">
                    <p>
                      Your data's security is a top priority. Manage Wise
                      employs robust data encryption and follows industry best
                      practices to ensure your sensitive information is safe and
                      protected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="price pt-5 main " id="pricing">
    <div className="container">
      <div className="row ">
        <div className="col-md-12">
          <div className="d-flex justify-content-center mb-3">
            <button
              type="button"
              className="btn text-primary btn-light btn_para"
            >
              <i className="fa fa-dollar" />
              &nbsp;<b>Pricing</b>
            </button>
          </div>
          <h1 data-aos="fade-up" data-aos-duration={1500}>
            Select your ideal <span> Pricing </span> plan
          </h1>
          <p className="headp">
            At Manage Wise, we believe in providing you with <br /> pricing
            plans that adapt to your unique needs.
          </p>
        </div>
        <div className="col-md-12 d-flex flex-wrap mt-5">
          <div
            className="col-md-6 col-lg-4 col-xl-4 mob"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            <div className="card mb-4 pricecard" style={{ width: "18rem" }}>
              <div className="card-body">
                <div className="details">
                  <span className="label1">FREE</span>
                  <p className="card-title">
                    <span>$0</span>/month
                  </p>
                  <ul>
                    <li>
                      <img
                        src="./images/i4.png"
                        className="card-img-top"
                        alt=""
                      />{" "}
                      Access to all basic features
                    </li>
                    <li>
                      <img
                        src="./images/i4.png"
                        className="card-img-top"
                        alt=""
                      />{" "}
                      Reporting and analytics
                    </li>
                    <li>
                      <img
                        src="./images/i4.png"
                        className="card-img-top"
                        alt=""
                      />{" "}
                      Up to 5 individual users
                    </li>
                    <li>
                      <img
                        src="./images/i4.png"
                        className="card-img-top"
                        alt=""
                      />{" "}
                      Chat and email support
                    </li>
                  </ul>
                  <p className="button b2">Get Started</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 col-xl-4 mob"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <div
              className="card mb-4 pricecard special"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <div className="details">
                  <span className="label1">STANDARD</span>
                  <p className="card-title">
                    <span>$25</span>/month
                  </p>
                  <ul>
                    <li>
                      <img
                        src="./images/i4.png"
                        className="card-img-top"
                        alt=""
                      />{" "}
                      Access to all basic features
                    </li>
                    <li>
                      <img
                        src="./images/i4.png"
                        className="card-img-top"
                        alt=""
                      />{" "}
                      Reporting and analytics
                    </li>
                    <li>
                      <img
                        src="./images/i4.png"
                        className="card-img-top"
                        alt=""
                      />{" "}
                      Up to 5 individual users
                    </li>
                    <li>
                      <img
                        src="./images/i4.png"
                        className="card-img-top"
                        alt=""
                      />{" "}
                      Chat and email support
                    </li>
                    <li>
                      <img
                        src="./images/i4.png"
                        className="card-img-top"
                        alt=""
                      />{" "}
                      3+ integrations
                    </li>
                    <li>
                      <img
                        src="./images/i4.png"
                        className="card-img-top"
                        alt=""
                      />{" "}
                      Account performance reporting
                    </li>
                  </ul>
                  <p className="button b3">Get Started</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 col-xl-4 mob"
            data-aos="fade-up"
            data-aos-duration={2500}
          >
            <div className="card mb-4 pricecard" style={{ width: "18rem" }}>
              <div className="card-body">
                <div className="details">
                  <span className="label1">BUSINESS</span>
                  <p className="card-title">
                    <span>$42</span>/month
                  </p>
                  <ul>
                    <li>
                      <img
                        src="./images/i4.png"
                        className="card-img-top"
                        alt=""
                      />{" "}
                      Access to all basic features
                    </li>
                    <li>
                      <img
                        src="./images/i4.png"
                        className="card-img-top"
                        alt=""
                      />{" "}
                      Reporting and analytics
                    </li>
                    <li>
                      <img
                        src="./images/i4.png"
                        className="card-img-top"
                        alt=""
                      />{" "}
                      Up to 5 individual users
                    </li>
                    <li>
                      <img
                        src="./images/i4.png"
                        className="card-img-top"
                        alt=""
                      />{" "}
                      Chat and email support
                    </li>
                    <li>
                      <img
                        src="./images/i4.png"
                        className="card-img-top"
                        alt=""
                      />{" "}
                      3+ integrations
                    </li>
                  </ul>
                  <p className="button">Get Started</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>












  
  <section className="testimonial my-5 main" id="testimonials">
    <div className="container">
      <div className="row">
        <div className="" id="testimonials_div1">
          <button type="button" className="btn text-primary btn-light btn_para">
            🧡
            <b>TESTIMONIALS</b>
          </button>
        </div>
        <p className="mt-4 para12">
          Hear from our
          <span className="para11">Satisfied</span> clients
        </p>
        <h5 className="para10 mb-5">
          Discover why our clients love working with us. Read their <br />{" "}
          testimonials and learn how we has helped businesses.
        </h5>
        <div className="row">


        <Carousel responsive={responsive} autoPlay={true} infinite={true} autoPlaySpeed={1000} >
        
            <div className="card testimonial_card mx-2">
              <div className="card-body">
                <h5 className="mt-5">
                  "I can't imagine running my business without this product. The
                  automation features have saved me hours of manual work,
                  allowing me to focus on strategic tasks{" "}
                </h5>
                <div className="card-text">
                  <div className="row mt-5">
                    <div className="col-md-3">
                      <img
                        src="./images/profile1.webp"
                        className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                        alt=""
                      />
                    </div>
                    <div className="col-md-7">
                      <p>
                        <b>
                          Alex <br />
                          <span className="para14">IT Manager</span>{" "}
                        </b>
                      </p>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="card testimonial_card mx-2">
              <div className="card-body">
                <h5 className="mt-5">
                "Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations"
                </h5>
                <div className="card-text">
                  <div className="row mt-5">
                    <div className="col-md-3">
                      <img
                        src="./images/profile3.webp"
                        className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                        alt=""
                      />
                    </div>
                    <div className="col-md-7">
                      <p>
                        <b>
                        Emily <br />
                          <span className="para14">Art Director</span>{" "}
                        </b>
                      </p>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card testimonial_card mx-2">
              <div className="card-body">
                <h5 className="mt-5">
                "Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity
                </h5>
                <div className="card-text">
                  <div className="row mt-5">
                    <div className="col-md-3">
                      <img
                        src="./images/profile4.webp"
                        className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                        alt=""
                      />
                    </div>
                    <div className="col-md-7">
                      <p>
                        <b>
                        David <br />
                          <span className="para14">Freelancer</span>{" "}
                        </b>
                      </p>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="card testimonial_card mx-2">
              <div className="card-body">
                <h5 className="mt-5">
                "The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly.
                </h5>
                <div className="card-text">
                  <div className="row mt-5">
                    <div className="col-md-3">
                      <img
                        src="./images/profile2.webp"
                        className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                        alt=""
                      />
                    </div>
                    <div className="col-md-7">
                      <p>
                        <b>
                          Sarah <br />
                          <span className="para14">Project Manager</span>{" "}
                        </b>
                      </p>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>


           
        

          </Carousel>



        </div>
      </div>
    </div>
  </section>
  <section className="mainsection">
    <section
      className="happy_customer_main"
      data-aos="zoom-in"
      data-aos-duration={2500}
    >
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10">
            <div className="card p-5 happy_customer ">
              <div className="row">
                <div className="col-md-6">
                  <div className="card-body">
                    <button
                      type="button"
                      className="btn btn-light btn_para text-primary"
                    >
                      👋 &nbsp;<b> DON'T MISS OUT</b>
                    </button>
                    <p className="mt-4 para12">
                      Unleash your <br />
                      <span className="para11">Potential </span> with us
                    </p>
                    <p className="para15">
                      Join our community of ambitious <br />
                      individuals and organizations eager to <br /> make a
                      difference.
                    </p>
                    <button
                      type="button"
                      className="button_hover btn btn1 button1"
                    >
                      <span>
                        <b>Try Out Now</b>{" "}
                      </span>
                      <i
                        className="fa fa-arrow-circle-right ml-2"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-light button2 ">
                      <span className="para16">200+</span> Happy users{" "}
                    </button>
                  </div>
                  <img
                    src="./images/pic-removebg-preview.png"
                    className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="footer">
      <div className="container footer1">
        <div className="row footer2">
          <div className="col-md-10">
            <img
              src="./images/logo.webp"
              alt=""
              srcSet=""
              className="navlogo"
            />
          </div>
          <div className="col-md-2">
            <ul>
              <li>
                {" "}
                <a href="#features"> Features</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          {/* Left column for the <p> tag */}
          <div className="col-md-10">
            <p className="para17">@2022 ManageWise, Inc.</p>
          </div>
          {/* Right column for the images */}
          <div className="col-md-2">
            <img
              width={38}
              height={38}
              src="https://img.icons8.com/sf-regular-filled/48/1A1A1A/instagram-new.png"
              alt="instagram-new"
            />{" "}
            <img
              src="./images/icons8-twitterx-50.png"
              className="social_icon img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
              alt=""
            />
            <img
              src="./images/icons8-linkedin-50.png"
              className="social_icon img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </section>
</>


  )
}

export default Index