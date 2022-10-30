import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

function Home() {
  const settings1 = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="mb-3">
        <MDBCarousel showControls showIndicators>
          <MDBCarouselItem
            className="w-100  d-block"
            style={{ height: "600px" }}
            itemId={1}
            src="https://res.cloudinary.com/azeem413/image/upload/v166427536/images/Slider/entrance_hyz8jh.jpg"
            alt="..."
          />
          <MDBCarouselItem
            className="w-100  d-block"
            style={{ height: "600px" }}
            itemId={2}
            src="https://res.cloudinary.com/azeem413/image/upload/v1664035593/images/Slider/gallary_1_oxlnfo.jpg"
            alt="..."
          />
          <MDBCarouselItem
            className="w-100  d-block"
            style={{ height: "600px" }}
            itemId={3}
            src="https://res.cloudinary.com/azeem413/image/upload/v1664035593/images/Slider/galary_2_ev11u3.jpg"
            alt="..."
          />
          <MDBCarouselItem
            className="w-100  d-block"
            style={{ height: "600px" }}
            itemId={4}
            src="https://res.cloudinary.com/azeem413/image/upload/v1664035591/images/Slider/hajvery_hall_vrojec.jpg"
            alt="..."
          />
          <MDBCarouselItem
            className="w-100  d-block"
            style={{ height: "600px" }}
            itemId={5}
            src="https://res.cloudinary.com/azeem413/image/upload/v1664035588/images/Slider/education_dptcrop_dgmaz0.jpg"
            alt="..."
          />
        </MDBCarousel>
      </div>
      <section className="container bg-white shadow rounded">
        <h1 className="rounded">Programs</h1>
        <div className="row">
          <div className="col-md-6 col-lg-3 col-sm-12 mb-2">
            <div class="card">
              <img
                class="card-img-top"
                src="https://res.cloudinary.com/azeem413/image/upload/v1664035583/images/interstdnt_jcsrv3.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title text-white"> Intermediate</h5>
                <p class="card-text text-white">
                  Done with Matrric? Now its time to move on to the next phase
                  of your journey of knowledge.
                </p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                <a href="/Intermediate" className="button_programs">
                  All Courses
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-12 mb-2">
            <div class="card">
              <img
                class="card-img-top"
                src="https://res.cloudinary.com/azeem413/image/upload/v1664035545/images/bechlorimggirl_lfiell.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title text-white">Bechelors</h5>
                <p class="card-text text-white">
                  {" "}
                  Now its all upto you to choose wisely in which field you have
                  most interest and want to harn your specifical skills.
                </p>
                <a href="/Bacholer_programs_list" className="button_programs">
                  All Courses
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-12 mb-2 ">
            <div class="card">
              <img
                class="card-img-top"
                src="https://res.cloudinary.com/azeem413/image/upload/v1664035586/images/postgraduatepics_popj9n.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title text-white">Post Graduate</h5>
                <p class="card-text text-white">
                  {" "}
                  Now its all upto you to choose wisely in which field you have
                  most interest and want to harn your specifical skills.
                </p>
                <a href="PostGraduate" className="button_programs">
                  All Courses
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-12 ">
            <h3 className=""> Notice Board</h3>
            <marquee width="100%"
             direction="up" scrollamount="1">
              <ul>
                <li>
                  <a href="/apply">Addmission Open</a>
                </li>
                <br />
                <li>
                  <a href="https://bit.ly/3SHNrrT">
                    <i> Intermediate Merit List-1 2023</i>
                  </a>
                </li>

                <br />
                <li>
                  <a href="https://bit.ly/3SHNrrT">
                    Intermediate Merit List-2 2023
                  </a>
                </li>
                <br />
                <li>
                  <a href="https://bit.ly/3SHNrrT">
                    {" "}
                    Bechelor Merit List-1 2023
                  </a>
                </li>
                <br />
                <li>
                  <a href="https://bit.ly/3SHNrrT">
                    {" "}
                    Bechelor Merit List-2 2023
                  </a>
                </li>
                <br />
                <li>
                  <a href="https://bit.ly/3SHNrrT">
                    {" "}
                    Post Graduate Merit List-2 2023
                  </a>
                </li>
                <br />
                <li>
                  <a href="https://bit.ly/3SHNrrT">
                    {" "}
                    Post Graduate Merit List-2 2023
                  </a>
                </li>
                <br />
              </ul>
            </marquee>
          </div>
        </div>
      </section>

       <section id='Departments'>
          <div className='container mt-3 dept_container rounded shadow mb-5 bg-white'>
            <h1 className='custom_head rounded mt-5 '>
              {' '}
              BS Departments
            </h1>

            <div className='row '>
              <div className='col-md-6 col-sm-6  bsdept mt-3 col-lg-3'>
                <a className='' href='/ComputerScience'>
                  Computer Science
                </a>
              </div>

              <div className='col-md-6 col-sm-6     mt-3 bsdept col-lg-3'>
                <a className='' href='/Chemistry_'>
                  Chemistry
                </a>
              </div>
              <div className='col-md-6 col-sm-6  mt-3 bsdept col-lg-3'>
                <a className='' href='/Physics_'>
                  Physics
                </a>
              </div>
              <div className='col-md-6 col-sm-6     mt-3 bsdept col-lg-3'>
                <a className='' href='/Mathematics_'>
                  Mathematics
                </a>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 col-sm-6  bsdept mt-3 col-lg-3'>
                <a className='' href='/Economics_'>
                  Economics
                </a>
              </div>

              <div className='col-md-6 col-sm-6  mt-3 bsdept col-lg-3'>
                <a className='' href='/Islamiyat_'>
                  Islamiyat
                </a>
              </div>
              <div className='col-md-6 col-sm-6  mt-3 bsdept col-lg-3'>
                <a className='' href='/BBA'>
                  BBA
                </a>
              </div>
              <div className='col-md-6 col-sm-6  mt-3 bsdept col-lg-3'>
                <a className='' href='/MassCom'>
                  Mass Comm.
                </a>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 col-sm-6  bsdept mt-3 col-lg-3'>
                <a className='' href='/Sociology'>
                  Sociology
                </a>
              </div>

              <div className='col-md-6 col-sm-6  mt-3 bsdept col-lg-3'>
                <a className='' href='/Botany'>
                  Botany
                </a>
              </div>
              <div className='col-md-6 col-sm-6  mt-3 bsdept col-lg-3'>
                <a className='' href='/Zoology_'>
                  Zoology
                </a>
              </div>
              <div className='col-md-6 col-sm-6  mt-3 bsdept col-lg-3'>
                <a className='' href='/Education'>
                  Education
                </a>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 col-sm-6  bsdept mt-3 col-lg-3'>
                <a className='' href='/English'>
                  {' '}
                  English
                </a>
              </div>

              <div className='col-md-6 col-sm-6  mt-3 bsdept col-lg-3'>
                <a className='' href='/Urdu'>
                  Urdu
                </a>
              </div>
              <div className='col-md-6 col-sm-6 mb-2 mt-3 bsdept col-lg-3'>
                <a className='' href='/PoliticalScience'>
                  Political Science
                </a>
              </div>
              <div className='col-md-6 col-sm-6 mb-2  mt-3 bsdept col-lg-3'>
                <a className='' href='/Statistics'>
                  Statistics
                </a>
              </div>
            </div>
          </div>
        </section>



      <div className=" container shadow rounded mb-5 bg-white slider_container">
        <h2 className="mb-5 h2_border rounded"> Gallary </h2>
        <Slider {...settings1}>
          <img
            className=" w-75 h-50"
            src="https://res.cloudinary.com/azeem413/image/upload/v1664035572/images/Gallary/cricket_Ground_wx2nun.jpg"
            alt="Credit to Joshua Earle on Unsplash"
          />
          <img
            className="w-75 h-50"
            src="https://res.cloudinary.com/azeem413/image/upload/v1664035583/images/Gallary/library_jf2ldg.jpg"
            alt="Credit to Alisa Anton on Unsplash"
          />

          <img
            className="h-50 w-75"
            src="https://res.cloudinary.com/azeem413/image/upload/v1664035582/images/Gallary/pricipal_vj8zjp.jpg"
            alt="Credit to Richard Nolan on Unsplash"
          />
          <img
            className="h-50 w-75"
            src="https://res.cloudinary.com/azeem413/image/upload/v1664035582/images/Gallary/registrar_office_rev0mz.jpg"
            alt="Credit to Cristina Gottardi on Unsplash"
          />
          <img
            className="h-50 w-75"
            src="https://res.cloudinary.com/azeem413/image/upload/v1664035581/images/Gallary/hostel_ejydew.jpg"
            alt="Credit to Cristina Gottardi on Unsplash"
          />
          <img
            className="h-50 w-75"
            src="https://res.cloudinary.com/azeem413/image/upload/v1664035580/images/Gallary/gallary_7_xtvup8.png"
            alt="Credit to Cristina Gottardi on Unsplash"
          />
          <img
            className="h-50 w-75"
            src="https://res.cloudinary.com/azeem413/image/upload/v1664035580/images/Gallary/hajveri_ground_oer61m.jpg"
            alt="Credit to Cristina Gottardi on Unsplash"
          />
          <img
            className="w-75 h-50"
            src="https://res.cloudinary.com/azeem413/image/upload/v1664035578/images/Gallary/gallary_8_hrl1ny.png"
            alt="Credit to Cristina Gottardi on Unsplash"
          />
          <img
            className="h-50 w-75"
            src="https://res.cloudinary.com/azeem413/image/upload/v1664035578/images/Gallary/gallary_4_kaeszw.png"
            alt="Credit to Cristina Gottardi on Unsplash"
          />
          <img
            className="h-50 w-75"
            src="https://res.cloudinary.com/azeem413/image/upload/v1664035574/images/Gallary/gallary_3_bmjsf1.png"
            alt="Credit to Cristina Gottardi on Unsplash"
          />
          <img
            className="h-50 w-75"
            src="https://res.cloudinary.com/azeem413/image/upload/v1664035574/images/Gallary/canteen_dum0xo.jpg"
            alt="Credit to Cristina Gottardi on Unsplash"
          />
        </Slider>
      </div>
    </div>
  );
}

export default Home;
