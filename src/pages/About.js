import React from "react";
import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <div className="py-4 md:py-8 space-y-5">
        <h1 class="border-y text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wide w-full text-center leading-none">
          Lionel Messi
        </h1>
        <img
          className="w-full object-cover h-[550px]"
          src="https://www.chromethemer.com/download/hd-wallpapers/lionel-messi-football-3840x2160.jpg"
          alt=""
        />
        <div className="space-y-2">
          <h1 className="text-xl font-bold">About Me</h1>
          <p className="text-gray">
            As a passionate and experienced UI designer, I am dedicated to
            creating intuitive and engaging user experiences that meet the needs
            of my clients and their users. I have a strong understanding of
            design principles and a proficiency in design tools, and I am
            comfortable working with cross-functional teams to bring projects to
            fruition. I am confident in my ability to create designs that are
            both visually appealing and functional, and I am always looking for
            new challenges and opportunities to grow as a designer.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-xl font-bold">Skills:</h1>
          <ul className="text-gray list-disc pl-5">
            <li>
              Extensive experience in UI design, with a strong portfolio of
              completed projects
            </li>
            <li>
              Proficiency in design tools such as Adobe Creative Suite and
              Sketch
            </li>
            <li>
              Excellent visual design skills, with a strong understanding of
              layout, color theory, and typography
            </li>
            <li>
              Ability to create wireframes and prototypes to communicate design
              concepts
            </li>
            <li>
              Strong communication and collaboration skills, with the ability to
              work effectively with cross-functional teams
            </li>
            <li>
              Experience conducting user research and gathering insights to
              inform design decisions
            </li>
            <li>Proficiency in HTML, CSS, and JavaScript</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h1 className="text-xl font-bold">Experience:</h1>
          <ul className="text-gray list-disc pl-5">
            <li>
              5 years of experience as a UI designer, working on a variety of
              projects for clients in the tech and retail industries
            </li>
            <li>
              Led the design of a successful e-commerce website, resulting in a
              25% increase in online sales
            </li>
            <li>
              Created wireframes and prototypes for a mobile banking app,
              leading to a 20% increase in app usage
            </li>
            <li>
              Conducted user research and usability testing to inform the
              redesign of a healthcare provider's website, resulting in a 15%
              increase in website traffic
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h1 className="text-xl font-bold">Education:</h1>
          <ul className="text-gray list-disc pl-5">
            <li>Certified User Experience Designer (CUED)</li>
            <li>Bachelor's degree in Graphic Design</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default About;
