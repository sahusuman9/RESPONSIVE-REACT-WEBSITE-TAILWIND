import React from "react";
import "../index.css";
import Navbar from "../components/navbar";
import Newsletter from "../components/newsletter.jsx";
import Footer from "../components/footer.jsx";
import { ImgTwo } from "../index.js";

const CoursesPage = () => {
  return (
    <>
      <section className="">
        <Navbar />
        <div className="flex justify-center mx-auto py-44">
          <a className="text-white font-bold text-xs" href="/">
            HOME &gt;
          </a>
          <p className="text-white font-bold text-xs px-4">COURSES &gt;</p>
        </div>

        <div className="bg-gray-900">
          <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center w-3/4 mt-24 py-20 justify-center">
            <div className="s1">
              <div className="card-1 bg-black py-8">
                <div className="first flex ml-12 text-left">
                  <div className="left rounded-full h-16 w-16 bg-green-500 text-center pt-4">
                    <i class="fa-solid fa-gears text-2xl"></i>
                  </div>

                  <div className="right ml-3">
                    <p
                      className="text-white text-3xl font-bold w-4/5"
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
                    <p className="text-gray-500 font-semibold">by John Smith</p>
                  </div>
                </div>

                <div style={{ paddingLeft: "123px" }}>
                  <p className="text-green-500 text-left">
                    50 lectures (190 hrs)
                  </p>
                </div>

                <div className="pl-[34px] mt-8">
                  <p className="border w-96 rounded-md bg-gray-900 border-transparent text-green-500  pt-4 pb-4 text-center">
                    $100 All Course / $15 per month
                  </p>
                </div>

                <div className=" mt-4">
                  <button className="border w-96 rounded-md  border-green-300 text-green-500  pt-4 pb-4 hover:bg-green-500 hover:text-white">
                    Enroll Now!
                  </button>
                </div>
              </div>
            </div>

            <div className="s1">
              <div className="card-1 bg-black py-8">
                <div className="first flex ml-12 text-left">
                  <div className="left rounded-full h-16 w-16 bg-green-500 text-center pt-4">
                    <i class="fa-solid fa-gears text-2xl"></i>
                  </div>

                  <div className="right ml-3">
                    <p
                      className="text-white text-3xl font-bold w-4/5"
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
                    <p className="text-gray-500 font-semibold">by John Smith</p>
                  </div>
                </div>

                <div style={{ paddingLeft: "123px" }}>
                  <p className="text-green-500 text-left">
                    50 lectures (190 hrs)
                  </p>
                </div>

                <div className="pl-[34px] mt-8">
                  <p className="border w-96 rounded-md bg-gray-900 border-transparent text-green-500  pt-4 pb-4 text-center">
                    $100 All Course / $15 per month
                  </p>
                </div>

                <div className=" mt-4">
                  <button className="border w-96 rounded-md  border-green-300 text-green-500  pt-4 pb-4 hover:bg-green-500 hover:text-white">
                    Enroll Now!
                  </button>
                </div>
              </div>
            </div>

            <div className="s1">
              <div className="card-1 bg-black py-8">
                <div className="first flex ml-12 text-left">
                  <div className="left rounded-full h-16 w-16 bg-green-500 text-center pt-4">
                    <i class="fa-solid fa-gears text-2xl"></i>
                  </div>

                  <div className="right ml-3">
                    <p
                      className="text-white text-3xl font-bold w-4/5"
                      style={{ width: "325px" }}
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
                    <p className="text-gray-500 font-semibold">by John Smith</p>
                  </div>
                </div>

                <div style={{ paddingLeft: "123px" }}>
                  <p className="text-green-500 text-left">
                    50 lectures (190 hrs)
                  </p>
                </div>

                <div className="pl-[34px] mt-8">
                  <p className="border w-96 rounded-md bg-gray-900 border-transparent text-green-500  pt-4 pb-4 text-center">
                    $100 All Course / $15 per month
                  </p>
                </div>

                <div className=" mt-4">
                  <button className="border w-96 rounded-md  border-green-300 text-green-500  pt-4 pb-4 hover:bg-green-500 hover:text-white">
                    Enroll Now!
                  </button>
                </div>
              </div>
            </div>

            <div className="s1">
              <div className="card-1 bg-black py-8">
                <div className="first flex ml-12 text-left">
                  <div className="left rounded-full h-16 w-16 bg-green-500 text-center pt-4">
                    <i class="fa-solid fa-gears text-2xl"></i>
                  </div>

                  <div className="right ml-3">
                    <p
                      className="text-white text-3xl font-bold w-4/5"
                      style={{ width: "325px" }}
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
                    <p className="text-gray-500 font-semibold">by John Smith</p>
                  </div>
                </div>

                <div style={{ paddingLeft: "123px" }}>
                  <p className="text-green-500 text-left">
                    50 lectures (190 hrs)
                  </p>
                </div>

                <div className="pl-[34px] mt-8">
                  <p className="border w-96 rounded-md bg-gray-900 border-transparent text-green-500  pt-4 pb-4 text-center">
                    $100 All Course / $15 per month
                  </p>
                </div>

                <div className=" mt-4">
                  <button className="border w-96 rounded-md  border-green-300 text-green-500  pt-4 pb-4 hover:bg-green-500 hover:text-white">
                    Enroll Now!
                  </button>
                </div>
              </div>
            </div>

            <div className="s1">
              <div className="card-1 bg-black py-8">
                <div className="first flex ml-12 text-left">
                  <div className="left rounded-full h-16 w-16 bg-green-500 text-center pt-4">
                    <i class="fa-solid fa-gears text-2xl"></i>
                  </div>

                  <div className="right ml-3">
                    <p
                      className="text-white text-3xl font-bold w-4/5"
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
                    <p className="text-gray-500 font-semibold">by John Smith</p>
                  </div>
                </div>

                <div style={{ paddingLeft: "123px" }}>
                  <p className="text-green-500 text-left">
                    50 lectures (190 hrs)
                  </p>
                </div>

                <div className="pl-[34px] mt-8">
                  <p className="border w-96 rounded-md bg-gray-900 border-transparent text-green-500  pt-4 pb-4 text-center">
                    $100 All Course / $15 per month
                  </p>
                </div>

                <div className=" mt-4">
                  <button className="border w-96 rounded-md  border-green-300 text-green-500  pt-4 pb-4 hover:bg-green-500 hover:text-white">
                    Enroll Now!
                  </button>
                </div>
              </div>
            </div>

            <div className="s1">
              <div className="card-1 bg-black py-8">
                <div className="first flex ml-12 text-left">
                  <div className="left rounded-full h-16 w-16 bg-green-500 text-center pt-4">
                    <i class="fa-solid fa-gears text-2xl"></i>
                  </div>

                  <div className="right ml-3">
                    <p
                      className="text-white text-3xl font-bold w-4/5"
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
                    <p className="text-gray-500 font-semibold">by John Smith</p>
                  </div>
                </div>

                <div style={{ paddingLeft: "123px" }}>
                  <p className="text-green-500 text-left">
                    50 lectures (190 hrs)
                  </p>
                </div>

                <div className="pl-[34px] mt-8">
                  <p className="border w-96 rounded-md bg-gray-900 border-transparent text-green-500  pt-4 pb-4 text-center">
                    $100 All Course / $15 per month
                  </p>
                </div>

                <div className=" mt-4">
                  <button className="border w-96 rounded-md  border-green-300 text-green-500  pt-4 pb-4 hover:bg-green-500 hover:text-white">
                    Enroll Now!
                  </button>
                </div>
              </div>
            </div>

            <div className="s1">
              <div className="card-1 bg-black py-8">
                <div className="first flex ml-12 text-left">
                  <div className="left rounded-full h-16 w-16 bg-green-500 text-center pt-4">
                    <i class="fa-solid fa-gears text-2xl"></i>
                  </div>

                  <div className="right ml-3">
                    <p
                      className="text-white text-3xl font-bold w-4/5"
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
                    <p className="text-gray-500 font-semibold">by John Smith</p>
                  </div>
                </div>

                <div style={{ paddingLeft: "123px" }}>
                  <p className="text-green-500 text-left">
                    50 lectures (190 hrs)
                  </p>
                </div>

                <div className="pl-[34px] mt-8">
                  <p className="border w-96 rounded-md bg-gray-900 border-transparent text-green-500  pt-4 pb-4 text-center">
                    $100 All Course / $15 per month
                  </p>
                </div>

                <div className=" mt-4">
                  <button className="border w-96 rounded-md  border-green-300 text-green-500  pt-4 pb-4 hover:bg-green-500 hover:text-white">
                    Enroll Now!
                  </button>
                </div>
              </div>
            </div>

            <div className="s1">
              <div className="card-1 bg-black py-8">
                <div className="first flex ml-12 text-left">
                  <div className="left rounded-full h-16 w-16 bg-green-500 text-center pt-4">
                    <i class="fa-solid fa-gears text-2xl"></i>
                  </div>

                  <div className="right ml-3">
                    <p
                      className="text-white text-3xl font-bold w-4/5"
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
                    <p className="text-gray-500 font-semibold">by John Smith</p>
                  </div>
                </div>

                <div style={{ paddingLeft: "123px" }}>
                  <p className="text-green-500 text-left">
                    50 lectures (190 hrs)
                  </p>
                </div>

                <div className="pl-[34px] mt-8">
                  <p className="border w-96 rounded-md bg-gray-900 border-transparent text-green-500  pt-4 pb-4 text-center">
                    $100 All Course / $15 per month
                  </p>
                </div>

                <div className=" mt-4">
                  <button className="border w-96 rounded-md  border-green-300 text-green-500  pt-4 pb-4 hover:bg-green-500 hover:text-white">
                    Enroll Now!
                  </button>
                </div>
              </div>
            </div>

            <div className="s1">
              <div className="card-1 bg-black py-8">
                <div className="first flex ml-12 text-left">
                  <div className="left rounded-full h-16 w-16 bg-green-500 text-center pt-4">
                    <i class="fa-solid fa-gears text-2xl"></i>
                  </div>

                  <div className="right ml-3">
                    <p
                      className="text-white text-3xl font-bold w-4/5"
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
                    <p className="text-gray-500 font-semibold">by John Smith</p>
                  </div>
                </div>

                <div style={{ paddingLeft: "123px" }}>
                  <p className="text-green-500 text-left">
                    50 lectures (190 hrs)
                  </p>
                </div>

                <div className="pl-[34px] mt-8">
                  <p className="border w-96 rounded-md bg-gray-900 border-transparent text-green-500  pt-4 pb-4 text-center">
                    $100 All Course / $15 per month
                  </p>
                </div>

                <div className=" mt-4">
                  <button className="border w-96 rounded-md  border-green-300 text-green-500  pt-4 pb-4 hover:bg-green-500 hover:text-white">
                    Enroll Now!
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <nav
              className="flex justify-center"
              aria-label="Page navigation example"
            >
              <ul class="flex items-center -space-x-px h-8 text-sm">
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span class="sr-only">Previous</span>
                    <svg
                      class="w-2.5 h-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    5
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span class="sr-only">Next</span>
                    <svg
                      class="w-2.5 h-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="text-center pt-32">
            <p className="text-green-500 font-semibold">COURSES</p>
            <p className="text-white text-5xl mt-4">
              Browse Our Online Courses
            </p>
          </div>

          <div className=" py-5 mx-auto grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center w-3/4 mt-24 pb-24">
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
              <div className=" w-44 pl-12 mt-2 ">
                <p className="text-xs border border-transparent bg-gray-900 py-1 rounded-sm text-center ">
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
              <div className=" w-44 pl-12  mt-2">
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
              <div className=" w-44 pl-12  mt-2">
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
              <div className=" w-44 pl-12  mt-2">
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
              <div className=" w-44 pl-12 mt-2">
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
              <div className=" w-44 pl-12 mt-2">
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
              <div className=" w-44 pl-12 mt-2">
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
              <div className="w-44 pl-12 mt-2">
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
              <div className=" w-44 pl-12 mt-2">
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
              <div className=" w-44 pl-12 mt-2">
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
              <div className=" w-44 pl-12 mt-2">
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
              <div className=" w-44 pl-12 mt-2">
                <p className="text-xs border border-transparent bg-gray-900 py-1 rounded-sm">
                  25 COURSES
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </>
  );
};

export default CoursesPage;
