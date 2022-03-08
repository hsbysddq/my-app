/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function About() {
  return (
    <section className="bg-[#5956E9] xl:mt-[-7%] lg:mt-[-8%] md:mt-[-11%] sm:mt-[-13%] pb-20" id="about">
      <div className="w-8/12 container">
        <div className="">
          <SectionTitle className="text-white text-center my-20">
            What's on the impostor website
          </SectionTitle>
        </div>
        <div className="py-10">
          <SectionTitle className="text-white">ABOUT US</SectionTitle>
          <p className="leading-relaxed text-white mt-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="py-10">
          <SectionTitle className="text-white">FREE ONLINE GAMES</SectionTitle>
          <p className="leading-relaxed text-white mt-6">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </p>
        </div>
        <div className="py-10">
          <SectionTitle className="text-white">HOW TO PLAY</SectionTitle>
          <p className="leading-relaxed text-white mt-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </p>
        </div>
      </div>
    </section>
  );
}
