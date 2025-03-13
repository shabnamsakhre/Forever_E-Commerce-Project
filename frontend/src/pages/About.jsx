import React from "react";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src="https://picsum.photos/id/26/200"
          alt="AboutImg"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            mollitia, nam at eveniet explicabo quae rerum aspernatur ullam
            impedit ipsum maxime eaque blanditiis qui officiis inventore dolore
            similique sint ipsa.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium sequi incidunt aliquam similique natus pariatur
            doloribus, modi porro. Voluptates, sint. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Magni sed placeat animi minima rem
            blanditiis pariatur at aspernatur, sunt ex?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, eum
            delectus voluptatem magni dignissimos accusamus explicabo sint natus
            harum neque.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quo
            dicta, vel facilis magnam dolores.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quo
            dicta, vel facilis magnam dolores. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Provident, non.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vero
            eaque reiciendis distinctio. Voluptas, aliquid!
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
