import React from "react";
import "../index.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { ImgTwo } from "../index.js";


const courses = () => {


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>

      
        <div className="bg-gray-900 pt-10 pb-44">

            <div className="text-center pt-32">
              <p className="text-green-500 font-semibold">OUR COURSES</p>
              <p className="text-white text-5xl mt-4">
                Explore Our Popular Online Courses
              </p>
            </div>

            <Slider {...settings} className="w-4/5 mx-auto mt-32  max-[1024px]:w-3/5">

                <div className="s1" >
                  <div
                  className="card-1 bg-black py-8"
                  style={{ width: "498px" }}
                >
                  <div className="first flex ml-12">
                    <div className="left rounded-full h-16 w-16 bg-green-500 text-center pt-4">
                      <i class="fa-solid fa-gears text-2xl"></i>
                    </div>

                    <div className="right ml-3">
                      <p
                        className="text-white text-3xl font-bold w-1/2"
                        style={{ width: "325px" }}
                      >
                        Basic Fundamentals for Software Engineering
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex items-center mt-2"
                    style={{ paddingLeft: "123px" }}
                  >
                    <i class="fa-solid fa-star text-green-600 text-xs"></i>
                    <i class="fa-solid fa-star text-green-600 text-xs ml-1"></i>
                    <i class="fa-solid fa-star text-green-600 text-xs ml-1"></i>
                    <i class="fa-solid fa-star text-green-600 text-xs ml-1"></i>
                    <i class="fa-solid fa-star text-green-600 text-xs ml-1"></i>
                    <p className="text-green-600">(5.0)</p>
                  </div>

                  <div
                    className="second flex mt-3"
                    style={{ paddingLeft: "123px" }}
                  >
                    <div className="left profile">
                      <img
                        className="h-8 w-8 rounded-full obect-cover"
                        src={ImgTwo}
                        alt=""
                      />
                    </div>

                    <div className="right ml-3">
                      <p className="text-gray-500 font-semibold">
                        by John Smith
                      </p>
                    </div>
                  </div>

                  <div style={{ paddingLeft: "123px" }}>
                    <p className="text-green-500">50 lectures (190 hrs)</p>
                  </div>

                  <div className="pl-14 mt-8">
                    <p className="border w-96 rounded-md bg-gray-900 border-transparent text-green-500 pl-20 pt-4 pb-4">
                      $100 All Course / $15 per month
                    </p>
                  </div>

                  <div className="pl-14 mt-4">
                    <button className="border w-96 rounded-md  border-green-300 text-green-500  pt-4 pb-4 hover:bg-green-500 hover:text-white">
                      Enroll Now!
                    </button>
                  </div>
                  </div>
                </div>

                <div className="s2">
                  <div
                  className="card-2  bg-black py-8"
                  style={{ width: "498px" }}
                >
                  <div className="first flex ml-12">
                    <div className="left rounded-full h-16 w-16 bg-green-500 text-center pt-4">
                      <i class="fa-solid fa-gears text-2xl"></i>
                    </div>

                    <div className="right ml-3">
                      <p
                        className="text-white text-3xl font-bold w-1/2"
                        style={{ width: "278px" }}
                      >
                        Enhancing Adobe Photoshop CC 2020 Skills
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex items-center mt-2"
                    style={{ paddingLeft: "123px" }}
                  >
                    <i class="fa-solid fa-star text-green-600 text-xs"></i>
                    <i class="fa-solid fa-star text-green-600 text-xs ml-1"></i>
                    <i class="fa-solid fa-star text-green-600 text-xs ml-1"></i>
                    <i class="fa-solid fa-star text-green-600 text-xs ml-1"></i>
                    <i class="fa-solid fa-star text-green-600 text-xs ml-1"></i>
                    <p className="text-green-600">(5.0)</p>
                  </div>

                  <div
                    className="second flex mt-3"
                    style={{ paddingLeft: "123px" }}
                  >
                    <div className="left profile">
                      <img
                        className="h-8 w-8 rounded-full obect-cover"
                        src={ImgTwo}
                        alt=""
                      />
                    </div>

                    <div className="right ml-3">
                      <p className="text-gray-500 font-semibold">
                        by John Smith
                      </p>
                    </div>
                  </div>

                  <div style={{ paddingLeft: "123px" }}>
                    <p className="text-green-500">50 lectures (190 hrs)</p>
                  </div>

                  <div className="pl-14 mt-8">
                    <p className="border w-96 rounded-md bg-gray-900 border-transparent text-green-500 pl-20 pt-4 pb-4">
                      $100 All Course / $15 per month
                    </p>
                  </div>

                  <div className="pl-14 mt-4">
                    <button className="border w-96 rounded-md  border-green-300 text-green-500  pt-4 pb-4 hover:bg-green-500 hover:text-white">
                      Enroll Now!
                    </button>
                  </div>
                  </div>
                </div>

                <div className="s3">
                  <div
                  className="card-3  bg-black py-8"
                  style={{ width: "498px" }}
                >
                  <div className="first flex ml-12">
                    <div className="left rounded-full h-16 w-16 bg-green-500 text-center pt-4">
                      <i class="fa-solid fa-gears text-2xl"></i>
                    </div>

                    <div className="right ml-3">
                      <p
                        className="text-white text-3xl font-bold w-1/2"
                        style={{ width: "278px" }}
                      >
                        HTML, CSS, and Javascript for Web Developers
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex items-center mt-2"
                    style={{ paddingLeft: "123px" }}
                  >
                    <i class="fa-solid fa-star text-green-600 text-xs"></i>
                    <i class="fa-solid fa-star text-green-600 text-xs ml-1"></i>
                    <i class="fa-solid fa-star text-green-600 text-xs ml-1"></i>
                    <i class="fa-solid fa-star text-green-600 text-xs ml-1"></i>
                    <i class="fa-solid fa-star text-green-600 text-xs ml-1"></i>
                    <p className="text-green-600">(5.0)</p>
                  </div>

                  <div
                    className="second flex mt-3"
                    style={{ paddingLeft: "123px" }}
                  >
                    <div className="left profile">
                      <img
                        className="h-8 w-8 rounded-full obect-cover"
                        src={ImgTwo}
                        alt=""
                      />
                    </div>

                    <div className="right ml-3">
                      <p className="text-gray-500 font-semibold">
                        by John Smith
                      </p>
                    </div>
                  </div>

                  <div style={{ paddingLeft: "123px" }}>
                    <p className="text-green-500">50 lectures (190 hrs)</p>
                  </div>

                  <div className="pl-14 mt-8">
                    <p className="border w-96 rounded-md bg-gray-900 border-transparent text-green-500 pl-20 pt-4 pb-4">
                      $100 All Course / $15 per month
                    </p>
                  </div>

                  <div className="pl-14 mt-4">
                    <button className="border w-96 rounded-md  border-green-300 text-green-500  pt-4 pb-4 hover:bg-green-500 hover:text-white">
                      Enroll Now!
                    </button>
                  </div>
                  </div>
                </div>

                <div className="s4">
                  <div
                  className="card-1 bg-black py-8"
                  style={{ width: "498px" }}
                >
                  <div className="first flex ml-12">
                    <div className="left rounded-full h-16 w-16 bg-green-500 text-center pt-4">
                      <i class="fa-solid fa-gears text-2xl"></i>
                    </div>

                    <div className="right ml-3">
                      <p
                        className="text-white text-3xl font-bold w-1/2"
                        style={{ width: "278px" }}
                      >
                        Introducing to Programming with WordPress
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex items-center mt-2"
                    style={{ paddingLeft: "123px" }}
                  >
                    <i class="fa-solid fa-star text-green-600 text-xs"></i>
                    <i class="fa-solid fa-star text-green-600 text-xs ml-1"></i>
                    <i class="fa-solid fa-star text-green-600 text-xs ml-1"></i>
                    <i class="fa-solid fa-star text-green-600 text-xs ml-1"></i>
                    <i class="fa-solid fa-star text-green-600 text-xs ml-1"></i>
                    <p className="text-green-600">(5.0)</p>
                  </div>

                  <div
                    className="second flex mt-3"
                    style={{ paddingLeft: "123px" }}
                  >
                    <div className="left profile">
                      <img
                        className="h-8 w-8 rounded-full obect-cover"
                        src={ImgTwo}
                        alt=""
                      />
                    </div>

                    <div className="right ml-3">
                      <p className="text-gray-500 font-semibold">
                        by John Smith
                      </p>
                    </div>
                  </div>

                  <div style={{ paddingLeft: "123px" }}>
                    <p className="text-green-500">50 lectures (190 hrs)</p>
                  </div>

                  <div className="pl-14 mt-8">
                    <p className="border w-96 rounded-md bg-gray-900 border-transparent text-green-500 pl-20 pt-4 pb-4">
                      $100 All Course / $15 per month
                    </p>
                  </div>

                  <div className="pl-14 mt-4">
                    <button className="border w-96 rounded-md  border-green-300 text-green-500  pt-4 pb-4 hover:bg-green-500 hover:text-white">
                      Enroll Now!
                    </button>
                  </div>
                  </div>
                </div>

            </Slider>

            <section>
            <div className="text-center pt-32">
              <p className="text-green-500 font-semibold">OUR COURSES</p>
              <p className="text-white text-5xl mt-4 w-3/4 mx-auto">
                Browse our Online Course
              </p>
            </div>

          
          <div className="py-5 mx-auto grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center w-3/4 mt-24">
            <div className="hover-box bg-black text-white py-8">
              <div className="left">
                <i class="fa-solid fa-laptop-code text-7xl text-green-500"></i>
              </div>
              <div className="mt-4">
                <p className="font-bold">UI/UX DESIGN</p>
              </div>
              <div className="mt-2 font-bold">
                <p>Courses</p>
              </div>
              <div className="w-3/4 lg:w-44 pl-20 lg:pl-12 mt-2">
                <p className="text-xs border border-transparent bg-gray-900 py-1 rounded-sm text-center">
                  25 COURSES
                </p>
              </div>
            </div>

            <div className="hover-box bg-black text-white py-8">
              <div className="left">
                <i class="fa-solid fa-palette text-7xl text-green-500"></i>
              </div>
              <div className="mt-4">
                <p className="font-bold">Art & Design</p>
              </div>
              <div className="w-3/4 lg:w-44 pl-20 lg:pl-12 mt-2">
                <p className="text-xs border border-transparent bg-gray-900 py-1 rounded-sm">
                  25 COURSES
                </p>
              </div>
            </div>

            <div className="hover-box bg-black text-white py-8">
              <div className="left">
                <i class="fa-solid fa-computer text-7xl text-green-500"></i>
              </div>
              <div className="mt-4">
                <p className="font-bold">Computer Science</p>
              </div>
              <div className="w-3/4 lg:w-44 pl-20 lg:pl-12 mt-2">
                <p className="text-xs border border-transparent bg-gray-900 py-1 rounded-sm">
                  10 COURSES
                </p>
              </div>
            </div>

            <div className="hover-box bg-black text-white py-8">
              <div className="left">
                <i class="fa-solid fa-magnifying-glass text-7xl text-green-500"></i>
              </div>
              <div className="mt-4">
                <p className="font-bold">History & Archeologic</p>
              </div>
              <div className="w-3/4 lg:w-44 pl-20 lg:pl-12 mt-2">
                <p className="text-xs border border-transparent bg-gray-900 py-1 rounded-sm">
                  25 COURSES
                </p>
              </div>
            </div>

            <div className="hover-box bg-black text-white py-8">
              <div className="left">
                <i class="fa-solid fa-desktop text-7xl text-green-500"></i>
              </div>
              <div className="mt-4">
                <p className="font-bold">Software Engineering</p>
              </div>
              <div className="w-3/4 lg:w-44 pl-20 lg:pl-12 mt-2">
                <p className="text-xs border border-transparent bg-gray-900 py-1 rounded-sm">
                  25 COURSES
                </p>
              </div>
            </div>

            <div className="hover-box bg-black text-white py-8">
              <div className="left">
                <i class="fa-solid fa-note-sticky text-7xl text-green-500"></i>
              </div>
              <div className="mt-4">
                <p className="font-bold">Information Software</p>
              </div>
              <div className="w-3/4 lg:w-44 pl-20 lg:pl-12 mt-2">
                <p className="text-xs border border-transparent bg-gray-900 py-1 rounded-sm">
                  25 COURSES
                </p>
              </div>
            </div>

            <div className="hover-box bg-black text-white py-8">
              <div className="left">
                <i class="fa-solid fa-heart-pulse text-7xl text-green-500"></i>
              </div>
              <div className="mt-4">
                <p className="font-bold">Health & Fitness</p>
              </div>
              <div className="w-3/4 lg:w-44 pl-20 lg:pl-12 mt-2">
                <p className="text-xs border border-transparent bg-gray-900 py-1 rounded-sm">
                  25 COURSES
                </p>
              </div>
            </div>

            <div className="hover-box bg-black text-white py-8">
              <div className="left">
                <i class="fa-solid fa-chart-simple text-7xl text-green-500"></i>
              </div>
              <div className="mt-4">
                <p className="font-bold">Marketing</p>
              </div>
              <div className="w-3/4 lg:w-44 pl-20 lg:pl-12 mt-2">
                <p className="text-xs border border-transparent bg-gray-900 py-1 rounded-sm">
                  15 COURSES
                </p>
              </div>
            </div>

            <div className="hover-box bg-black text-white py-8">
              <div className="left">
                <i class="fa-solid fa-wand-magic-sparkles text-7xl text-green-500"></i>
              </div>
              <div className="mt-4">
                <p className="font-bold">Graphic Design</p>
              </div>
              <div className="w-3/4 lg:w-44 pl-20 lg:pl-12 mt-2">
                <p className="text-xs border border-transparent bg-gray-900 py-1 rounded-sm">
                  25 COURSES
                </p>
              </div>
            </div>

            <div className="hover-box bg-black text-white py-8">
              <div className="left">
                <i class="fa-solid fa-music text-7xl text-green-500"></i>
              </div>
              <div className="mt-4">
                <p className="font-bold">Music</p>
              </div>
              <div className="w-3/4 lg:w-44 pl-20 lg:pl-12 mt-2">
                <p className="text-xs border border-transparent bg-gray-900 py-1 rounded-sm">
                  25 COURSES
                </p>
              </div>
            </div>

            <div className="hover-box bg-black text-white py-8">
              <div className="left">
                <i class="fa-solid fa-business-time text-7xl text-green-500"></i>
              </div>
              <div className="mt-4">
                <p className="font-bold">Business Administration</p>
              </div>
              <div className="w-3/4 lg:w-44 pl-20 lg:pl-12 mt-2">
                <p className="text-xs border border-transparent bg-gray-900 py-1 rounded-sm">
                  25 COURSES
                </p>
              </div>
            </div>

            <div className="hover-box bg-black text-white py-8">
              <div className="left">
                <i class="fa-solid fa-code text-7xl text-green-500"></i>
              </div>
              <div className="mt-4">
                <p className="font-bold">Web Management</p>
              </div>
              <div className="w-3/4 lg:w-44 pl-20 lg:pl-12 mt-2">
                <p className="text-xs border border-transparent bg-gray-900 py-1 rounded-sm">
                  25 COURSES
                </p>
              </div>
            </div>
          </div>
          
          
            </section>
            
        </div>
    
      
      
    </>
  );
};

export default courses;
