import React from 'react';

const SubprojectSection = ({ subproject, index }) => {
  return (
    <>
      {/* Subproject Header */}
      <div className="w-full py-12 lg:py-0 px-8 lg:px-16 flex flex-col lg:flex-row lg:space-x-14 items-center">
        {/* Subproject Name column */}
        <div className="w-full flex flex-1 flex-col lg:flex-row py-4 lg:py-40 lg:justify-end lg:space-x-1">
          <div className="flex justify-start font-['Geist'] text-base font-bold text-stone-900">{index + 1}.</div>
          <div className="flex font-['Geist'] text-5xl font-medium text-stone-900 tracking-tighter">{subproject.title}</div>
        </div>
        {/* Subproject About column */}
        <div className="flex flex-1 py-4 lg:py-40">
          <div className="flex flex-col w-full space-y-4">
            <div className="text-lg lg:text-lg font-['Geist'] w-full lg:w-125">
              {subproject.description}
            </div>
          </div>
        </div>
      </div>
      
      {/* Subproject Images Grid */}
      <div className="w-full flex px-1 lg:px-8 pb-18 lg:pb-36 border-b border-[#7F7F7F]">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-1">
          {subproject.images.map((image, imageIndex) => (
            <img 
              key={imageIndex}
              src={`/src/assets/${image}`}
              alt={`${subproject.title} image ${imageIndex + 1}`}
              className="w-full h-auto object-cover rounded-xl shadow-xl"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SubprojectSection;
