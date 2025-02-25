import React from "react";
import CustomButton from "../ui/CustomButton";
import Image from "../assets/Image.png";
import Image2 from "../assets/Image2.png";
import Image3 from "../assets/Image3.png";
import Image4 from "../assets/Image4.png";
import TextComponent from "../functions/TextComponent";

function RecentBlog() {
  return (
    <div className="py-8 space-y-4">
      <h1 className="text-xl font-bold">Recent blog posts</h1>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="flex flex-col gap-5">
            <img className="h-60 w-full object-cover" src={Image} alt="" />
            <div className=" space-y-2">
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
                  title="Presantation"
                  bgColor="bg-secondary-pink"
                  textColor="text-pink"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 sm:gap-0 sm:justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
              <img className="h-60 w-full object-cover" src={Image2} alt="" />
              <div className="space-y-2">
                <span className="text-purple font-bold">
                  Sunday , 1 Jan 2023
                </span>
                <a href="#" className="flex justify-between text-lg font-bold">
                  <h1>Migrating to Linear 101</h1>
                </a>
                <TextComponent
                  className="text-sm"
                  text="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get..."
                  maxLength={75}
                />
                <div className="flex gap-1">
                  <CustomButton
                    title="Design"
                    bgColor="bg-secondary-blue"
                    textColor="text-blue"
                  />
                  <CustomButton
                    title="Research"
                    bgColor="bg-secondary-pink"
                    textColor="text-pink"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center py-6 ">
              <img className="h-60 w-full object-cover" src={Image3} alt="" />
              <div className="space-y-2">
                <span className="text-purple font-bold">
                  Sunday , 1 Jan 2023
                </span>
                <a href="#" className="flex justify-between text-lg font-bold">
                  <h1>Building your API Stack</h1>
                </a>
                <TextComponent
                  className="text-sm"
                  text="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..."
                  maxLength={75}
                />
                <div className="flex gap-1">
                  <CustomButton
                    title="Design"
                    bgColor="bg-secondary-green"
                    textColor="text-green"
                  />
                  <CustomButton
                    title="Research"
                    bgColor="bg-secondary-pink"
                    textColor="text-pink"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-8">
          <img className="h-60 w-full object-cover" src={Image4} alt="" />
          <div className="flex flex-col space-y-2 sm:space-y-0 sm:justify-between">
            <span className="text-purple font-bold">Sunday , 1 Jan 2023</span>
            <a href="#" className="flex justify-between text-lg font-bold">
              <h1>Grid system for better Design User Interface</h1>
              <i class="ri-arrow-right-up-line"></i>
            </a>
            <p className="text-sm">
              A grid system is a design tool used to arrange content on a
              webpage. It is a series of vertical and horizontal lines that
              create a matrix of intersecting points, which can be used to align
              and organize page elements. Grid systems are used to create a
              consistent look and feel across a website, and can help to make
              the layout more visually appealing and easier to navigate.
            </p>
            <div className="flex gap-1">
              <CustomButton
                title="Design"
                bgColor="bg-secondary-purple"
                textColor="text-purple"
              />
              <CustomButton
                title="Interface"
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

export default RecentBlog;
