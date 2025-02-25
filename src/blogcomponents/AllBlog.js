import React, { useState } from "react";
import CustomButton from "../ui/CustomButton";
import TextComponent from "../functions/TextComponent";
import Image5 from "../assets/Image5.png";
import Image6 from "../assets/Image6.png";
import Image7 from "../assets/Image7.png";
import Image8 from "../assets/Image8.png";
import Image9 from "../assets/Image9.png";
import Image10 from "../assets/Image10.png";

function AllBlog() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }

    if (currentPage >= totalPages - 3) {
      return [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  return (
    <div className="py-8 space-y-4">
      <h1 className="text-xl font-bold">All blog posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10 border-b border-gray">
        <div className="flex flex-col gap-5 md:mt-5">
          <img className="h-full object-cover" src={Image5} alt="" />
          <div className="space-y-2">
            <span className="text-purple font-bold">Sunday , 1 Jan 2023</span>
            <a href="#" className="flex justify-between text-lg font-bold">
              <h1>Bill Walsh leadership lessons</h1>
            </a>
            <TextComponent
              className="text-sm"
              text="Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"
              maxLength={75}
            />
            <div className="flex gap-1">
              <CustomButton
                title="Leadership"
                bgColor="bg-secondary-blue"
                textColor="text-blue"
              />
              <CustomButton
                title="Management"
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
        <div className="flex flex-col gap-5 md:mt-5">
          <img className="h-full object-cover" src={Image6} alt="" />
          <div className="space-y-2">
            <span className="text-purple font-bold">Sunday , 1 Jan 2023</span>
            <a href="#" className="flex justify-between text-lg font-bold">
              <h1>PM mental models</h1>
            </a>
            <TextComponent
              className="text-sm"
              text="Mental models are simple expressions of complex processes or relationships."
              maxLength={75}
            />
            <div className="flex gap-1">
              <CustomButton
                title="Product"
                bgColor="bg-secondary-blue"
                textColor="text-blue"
              />
              <CustomButton
                title="Research"
                bgColor="bg-secondary-purple"
                textColor="text-purple"
              />
              <CustomButton
                title="Frameworks"
                bgColor="bg-secondary-orange"
                textColor="text-orange"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:mt-5">
          <img className="h-full object-cover" src={Image7} alt="" />
          <div className="space-y-2">
            <span className="text-purple font-bold">Sunday , 1 Jan 2023</span>
            <a href="#" className="flex justify-between text-lg font-bold">
              <h1>What is Wireframing?</h1>
            </a>
            <TextComponent
              className="text-sm"
              text="Introduction to Wireframing and its Principles. Learn from the best in the industry."
              maxLength={75}
            />
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
        <div className="flex flex-col gap-5 md:mt-5">
          <img className="h-full object-cover" src={Image8} alt="" />
          <div className="space-y-2">
            <span className="text-purple font-bold">Sunday , 1 Jan 2023</span>
            <a href="#" className="flex justify-between text-lg font-bold">
              <h1>How collaboration makes us better designers</h1>
            </a>
            <TextComponent
              className="text-sm"
              text="Collaboration can make our teams stronger, and our individual designs better."
              maxLength={75}
            />
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
        <div className="flex flex-col gap-5 md:mt-5">
          <img className="h-full object-cover" src={Image9} alt="" />
          <div className="space-y-2">
            <span className="text-purple font-bold">Sunday , 1 Jan 2023</span>
            <a href="#" className="flex justify-between text-lg font-bold">
              <h1>Our top 10 Javascript frameworks to use</h1>
            </a>
            <TextComponent
              className="text-sm"
              text="JavaScript frameworks make development easy with extensive features and functionalities."
              maxLength={75}
            />
            <div className="flex gap-1">
              <CustomButton
                title="Software Development"
                bgColor="bg-secondary-green"
                textColor="text-green"
              />
              <CustomButton
                title="Tools"
                bgColor="bg-secondary-pink"
                textColor="text-pink"
              />
              <CustomButton
                title="SaaS"
                bgColor="bg-secondary-red"
                textColor="text-red"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:mt-5">
          <img className="h-full object-cover" src={Image10} alt="" />
          <div className="space-y-2">
            <span className="text-purple font-bold">Sunday , 1 Jan 2023</span>
            <a href="#" className="flex justify-between text-lg font-bold">
              <h1>Podcast: Creating a better CX Community</h1>
            </a>
            <TextComponent
              className="text-sm"
              text="Starting a community doesn’t need to be complicated, but how do you get started?"
              maxLength={75}
            />
            <div className="flex gap-1">
              <CustomButton
                title="Podcasts"
                bgColor="bg-secondary-purple"
                textColor="text-purple"
              />
              <CustomButton
                title="Customer"
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
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-2 md:space-y-0">
        <button
          className={`flex items-center space-x-1 text-gray-400 hover:text-white ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <i className="ri-arrow-left-line"></i>
          <span>Previous</span>
        </button>

        <div className="flex items-center space-x-2">
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              className={`w-8 h-8 flex items-center justify-center rounded-md ${
                currentPage === page
                  ? "bg-white text-black font-semibold"
                  : "text-gray-400 hover:text-white"
              } ${page === "..." ? "cursor-default" : "cursor-pointer"}`}
              onClick={() => page !== "..." && handlePageChange(page)}
              disabled={page === "..."}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          className={`flex items-center space-x-1 text-gray-400 hover:text-white ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <span>Next</span>
          <i className="ri-arrow-right-line"></i>
        </button>
      </div>
    </div>
  );
}

export default AllBlog;
