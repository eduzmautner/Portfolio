import { Link } from 'react-router-dom';


const ProjectsSection = () => {
  // Function to create a new project
  const createProject = (thumbnailImg, projectTitle, tags, projectPath = null) => {
    return {
      thumbnail: thumbnailImg,
      title: projectTitle,
      tags: tags,
      path: projectPath
    };
  };

  // Project data - add new projects here
  const projects = [
    createProject("CLM1.jpg", "Kikkerland", ["HARDWARE", "DEVELOPMENT", "SOURCING", "IDEATION"], "/project/kikkerland"),
    createProject("BG3.png", "Bird Generator", ["P5.JS", "WEB DEV", "WEBGL", "FOR FUN", "LIVE"]),
    createProject("MH5.png", "Mochi Health", ["UI/UX", "DIGITAL", "FIGMA", "HEALTHCARE"]),
    createProject("IMG_0969.jpg", "DA-SH", ["SOFT GOODS", "USER RESEARCH", "WEARABLES", "BUSINESS PLANNING"]),
    // Add more projects like this:
    // createProject("thumbnail.jpg", "Project Name", ["Tag1", "Tag2", "Tag3"], "/project/project-name"),
  ];

  // Function to render project tags in rows
  const renderTags = (tags) => {
    const tagRows = [];
    
    // First row - always show first 3 tags
    if (tags.length >= 3) {
      tagRows.push(
        <div key="row1" className="flex-1 flex border-b border-[#7F7F7F]">
          {tags.slice(0, 3).map((tag, index) => (
            <div key={index} className={`flex-1 py-2 lg:py-0 flex justify-center items-center group-hover:text-neutral-500 ${index < 2 ? 'border-r border-[#7F7F7F]' : ''}`}>
              {tag}
            </div>
          ))}
        </div>
      );
    } else {
      // If less than 3 tags, show them in first row
      tagRows.push(
        <div key="row1" className="flex-1 flex border-b border-[#7F7F7F]">
          {tags.map((tag, index) => (
            <div key={index} className={`flex-1 flex justify-center items-center ${index < tags.length - 1 ? 'border-r border-[#7F7F7F]' : ''}`}>
              {tag}
            </div>
          ))}
        </div>
      );
    }

    // Second row - show remaining tags if there are more than 3
    if (tags.length > 3) {
      const remainingTags = tags.slice(3);
      tagRows.push(
        <div key="row2" className="flex-1 flex">
          {remainingTags.map((tag, index) => (
            <div key={index} className={`flex-1 py-2 lg:py-0 flex justify-center items-center group-hover:text-neutral-500 ${remainingTags.length > 1 && index < remainingTags.length - 1 ? 'border-r border-[#7F7F7F]' : ''}`}>
              {tag}
            </div>
          ))}
        </div>
      );
    }

    return tagRows;
  };

  // Function to render project content
  const renderProjectContent = (project) => {
    const content = (
      <>
        {/* media container*/}
        <div 
          className="h-120 2xl:h-150 lg:border-b lg:border-[#7F7F7F] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(./assets/${project.thumbnail})` }}
        >
          {/* media goes here */}
        </div>
        {/* project footer */}
        <div className="w-full flex lg:flex-row flex-col border-b border-[#7F7F7F]">
          {/* project title */}
          <div className="flex lg:w-fit w-full lg:px-8 py-4 lg:border-r border-[#7F7F7F] bg-stone-900 text-white text-2xl font-['Geist'] font-medium uppercase group-hover:bg-neutral-500 justify-center">
            {project.title}
          </div>
          {/* project tags */}
          <div className="flex flex-1 flex-col">
            {renderTags(project.tags)}
          </div>
        </div>
      </>
    );

    // If project has a path, wrap in Link, otherwise render normally
    if (project.path) {
      return (
        <Link to={project.path} className="group flex w-full flex-col lg:border-r border-[#7F7F7F] hover:cursor-pointer">
          {content}
        </Link>
      );
    }

    return (
      <div className="group flex w-full flex-col lg:border-r border-[#7F7F7F] hover:cursor-pointer">
        {content}
      </div>
    );
  };

  return (
    <section id="projects" className="w-full">
      {/* grid container*/}
      <div className="grid lg:grid-cols-2 grid-cols-1">
        {/* Map through projects array */}
        {projects.map((project, index) => (
          <div key={index}>
            {renderProjectContent(project)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
