import { useEffect, useMemo } from 'react';
import Navbar from '../components/layout/Navbar';
import Tag from '../components/ui/Tag';
import BackButton from '../components/ui/BackButton';
import SubprojectSection from '../components/sections/subprojectsSection';
import { TypewriterRich, RenderRunsForSizer } from '../components/ui/TypewriterRich';

const ProjectPage = ({ projectName = "Kikkerland", projectAbout = "A brief project introduction to exoplain its content.", projectMainImg = "./assets/CLM1.jpg", tags = ["Fusion 360", "3D Scanning", "Rhino 8"], gridImages = ["CLM2.jpg", "CLM3.jpg"], subprojects = [] }) => {
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Create runs for project name typewriter effect
  const projectNameRuns = useMemo(
    () => [
      {
        __type: "styled",
        className: "",
        text: projectName,
        render: (t) => <span className="">{t}</span>,
      },
    ],
    [projectName]
  );

  // Create runs for project about typewriter effect
  const projectAboutRuns = useMemo(
    () => [
      {
        __type: "styled",
        className: "",
        text: projectAbout,
        render: (t) => <span className="">{t}</span>,
      },
    ],
    [projectAbout]
  );

  // Speed values for typewriter effect
  const speedValues = [35];

  return (
    <div className="min-h-screen bg-white font-['Geist_Mono'] cursor-crosshair">
      <Navbar />
      
      {/* Project page content will go here */}
      <main className="pt-20 lg:pt-16">
        <div className="w-full flex flex-col relative top-0 lg:top-0">
            {/* BACK button */}
            <div className="fixed z-50">
                <BackButton />
            </div>
            {/* Project Header */}
            <div className="w-full px-8 py-12 lg:px-16 lg:py-0 flex flex-col lg:flex-row lg:space-x-14 items-center">
                {/* Project Name column */}
                <div className="flex flex-1 py-4 lg:py-40 justify-center lg:justify-end">
                    <div className="relative w-full text-center lg:text-right">
                        {/* Sizer: reserves final height from the start */}
                        <div
                          aria-hidden="true"
                          className="invisible select-none pointer-events-none font-['Geist'] uppercase text-5xl lg:text-7xl font-medium text-stone-900 tracking-tighter"
                        >
                          <RenderRunsForSizer runs={projectNameRuns} />
                        </div>

                        {/* Animated text positioned on top */}
                        <div className="absolute inset-0 font-['Geist'] uppercase text-5xl lg:text-7xl font-medium text-stone-900 tracking-tighter">
                          <TypewriterRich
                            runs={projectNameRuns}
                            speedValues={speedValues}
                            startDelay={200}
                          />
                        </div>
                    </div>
                </div>
                {/* Project About column */}
                <div className="flex flex-1 py-4 lg:py-40">
                    <div className="flex flex-col w-full space-y-4">
                        {/* <AboutTag text="About" /> */}
                        <div className="relative w-full lg:w-125">
                            {/* Sizer: reserves final height from the start */}
                            <div
                              aria-hidden="true"
                              className="invisible select-none pointer-events-none text-base text-center lg:text-left lg:text-lg font-['Geist']"
                            >
                              <RenderRunsForSizer runs={projectAboutRuns} />
                            </div>

                            {/* Animated text positioned on top */}
                            <div className="absolute inset-0 text-base text-center lg:text-left lg:text-lg font-['Geist']">
                              <TypewriterRich
                                runs={projectAboutRuns}
                                speedValues={speedValues}
                                startDelay={800}
                              />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Project Main Image */}
            <div className="w-full flex lg:h-screen justify-center px-4 lg:px-0">
            <img 
                src={`url(./assets/${projectMainImg})`}
                alt={`${projectName} main image`}
                className="w-fit h-full object-contain rounded-xl shadow-xl"
            />
            </div>
            {/* Tools Tags */}
            <div className="w-full flex items-center justify-center py-16 lg:py-36 border-b border-[#7F7F7F]">
                <div className="w-full px-4 lg:px-0 lg:w-175 inline-flex justify-center items-center gap-3 lg:gap-4 flex-wrap content-center">
                    <div className="w-fit px-2 py-1 bg-white text-stone-900 font-['Geist'] text-lg lg:text-xl font-medium tracking-tight">
                        Tools:
                    </div>
                    {tags.map((tag, index) => (
                        <Tag key={index} text={tag}/>
                    ))}
                </div>
            </div>
             
             {/* Render Subprojects */}
             {subprojects.map((subproject, index) => (
                 <SubprojectSection 
                     key={subproject.id || index}
                     subproject={subproject}
                     index={index}
                 />
             ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectPage;
