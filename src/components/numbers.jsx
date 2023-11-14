import React from "react";
import "../index.css";
import CountUp from "react-countup";

const numbers = () => {
  return (
    <section className="numbers flex mx-auto justify-center p-16">
      <div className="list">
        <div className="py-5 mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-24 text-center">
          <div className="py-5 px-5 flex items-center">
            <div>
              <i class="fa-solid fa-graduation-cap text-5xl"></i>
            </div>
            <div className="ml-5">
              <p className="text-4xl">
                <CountUp end={3000} duration={2} />
              </p>
              <p className="text-s">SUCCESS STORIES</p>
            </div>
          </div>
          <div className="py-5 px-5 flex items-center">
            <div>
              <i class="fa-solid fa-user-pen text-5xl"></i>
            </div>
            <div className="ml-5">
              <p className="text-4xl">
                <CountUp end={320} duration={2} />
              </p>
              <p className="text-s">TRUSTED TUTORS</p>
            </div>
          </div>
          <div className="py-5 px-5 flex items-center">
            <div>
              <i class="fa-solid fa-calendar text-5xl"></i>
            </div>
            <div className="ml-5 pl-10 md:pl-0 lg:pl-0">
              <p className="text-4xl">
                <CountUp end={1000} duration={2} />
              </p>
              <p className="text-s">SCHEDULES</p>
            </div>
          </div>
          <div className="py-5 px-5 flex items-center">
            <div>
              <i class="fa-solid fa-newspaper text-5xl"></i>
            </div>
            <div className="ml-5 pl-10 md:pl-0 lg:pl-0">
              <p className="text-4xl">
                <CountUp end={587} duration={2} />
              </p>
              <p className="text-s">COURSES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default numbers;
