import React from "react";
import CustomButton from "../ui/CustomButton";
import Image11 from "../assets/Image11.png";
import Image12 from "../assets/Image2.png";
import Image from "../assets/Image.png";

function ProjectsList() {
  return (
    <div className="py-8 space-y-4">
      <h1 className="text-xl font-bold">List Project</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <img
            className="h-60 md:h-72 lg:h-96 w-full object-cover"
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="flex flex-col space-y-1  sm:justify-between">
            <span className="text-purple font-bold">Sunday , 1 Jan 2023</span>
            <a href="#" className="flex justify-between text-lg font-bold">
              <h1>Grid system for better Design User Interface</h1>
              <i class="ri-arrow-right-up-line"></i>
            </a>
            <p className="text-sm">
              A grid system is a design tool used to arrange content on a
              webpage. It is a series of vertical and horizontal lines that
              create a matrix of
            </p>
            <div className="flex gap-1">
              <CustomButton
                title="Design"
                bgColor="bg-secondary-purple"
                textColor="text-purple"
              />
              <CustomButton
                title="Research"
                bgColor="bg-secondary-blue"
                textColor="text-blue"
              />
              <CustomButton
                title="Presentation"
                bgColor="bg-secondary-pink"
                textColor="text-pink"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <img
            className="h-60 md:h-72 lg:h-96 w-full object-cover"
            src="https://images.unsplash.com/photo-1585509906889-eb568204cc9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="flex flex-col space-y-1  sm:justify-between">
            <span className="text-purple font-bold">Sunday , 1 Jan 2023</span>
            <a href="#" className="flex justify-between text-lg font-bold">
              <h1>Grid system for better Design User Interface</h1>
              <i class="ri-arrow-right-up-line"></i>
            </a>
            <p className="text-sm">
              A grid system is a design tool used to arrange content on a
              webpage. It is a series of vertical and horizontal lines that
              create a matrix of
            </p>
            <div className="flex gap-1">
              <CustomButton
                title="Research"
                bgColor="bg-secondary-blue"
                textColor="text-blue"
              />
              <CustomButton
                title="Presentation"
                bgColor="bg-secondary-pink"
                textColor="text-pink"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 col-span-1 md:col-span-2">
          <img
            className="h-60 md:h-72 lg:h-96 w-full object-cover"
            src="https://images.unsplash.com/photo-1670272506154-080063eee4be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="flex flex-col space-y-1  sm:justify-between">
            <span className="text-purple font-bold">Sunday , 1 Jan 2023</span>
            <a href="#" className="flex justify-between text-lg font-bold">
              <h1>
                UX review presentatiBringing Design Process to Teams, How to
                Solve User Problems with Data & Inclusive Collaboration
                Designons
              </h1>
              <i class="ri-arrow-right-up-line"></i>
            </a>
            <p className="text-sm">
              There are many different design processes that can be followed
              when creating a hotel management dashboard. Here are some tips for
              bringing a design process to teams and using data and inclusive
              collaboration to solve user problems
            </p>
            <div className="flex gap-1">
              <CustomButton
                title="Design"
                bgColor="bg-secondary-purple"
                textColor="text-purple"
              />
              <CustomButton
                title="Research"
                bgColor="bg-secondary-blue"
                textColor="text-blue"
              />
              <CustomButton
                title="Presentation"
                bgColor="bg-secondary-pink"
                textColor="text-pink"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <img
            className="h-60 md:h-72 lg:h-96 w-full object-cover"
            src={Image11}
            alt=""
          />
          <div className="flex flex-col space-y-1  sm:justify-between">
            <span className="text-purple font-bold">Sunday , 1 Jan 2023</span>
            <a href="#" className="flex justify-between text-lg font-bold">
              <h1>Icon Package of Slin Icon</h1>
              <i class="ri-arrow-right-up-line"></i>
            </a>
            <p className="text-sm">
              An icon package is a collection of icons that can be used in
              various design projects, such as website design, app development,
              and graphic design.
            </p>
            <div className="flex gap-1">
              <CustomButton
                title="Design"
                bgColor="bg-secondary-purple"
                textColor="text-purple"
              />
              <CustomButton
                title="Branding"
                bgColor="bg-secondary-blue"
                textColor="text-blue"
              />
              <CustomButton
                title="Identity"
                bgColor="bg-secondary-pink"
                textColor="text-pink"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <img
            className="h-60 md:h-72 lg:h-96 w-full object-cover"
            src={Image}
            alt=""
          />
          <div className="flex flex-col space-y-1  sm:justify-between">
            <span className="text-purple font-bold">Sunday , 1 Jan 2023</span>
            <a href="#" className="flex justify-between text-lg font-bold">
              <h1>UX review presentations</h1>
              <i class="ri-arrow-right-up-line"></i>
            </a>
            <p className="text-sm">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
            <div className="flex gap-1">
              <CustomButton
                title="Design"
                bgColor="bg-secondary-purple"
                textColor="text-purple"
              />
              <CustomButton
                title="Research"
                bgColor="bg-secondary-blue"
                textColor="text-blue"
              />
              <CustomButton
                title="Presentation"
                bgColor="bg-secondary-pink"
                textColor="text-pink"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsList;
