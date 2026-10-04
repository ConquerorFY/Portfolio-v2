import { useState } from "react";
import { SoftwareProjectCard, NetworkProjectCard } from "./ProjectCard";

const ProjectContainer = ({ softwareProjects, networkProjects }) => {
  const [projectType, setProjectType] = useState('network');

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700">
        <button
          type="button"
          className={`pb-3 font-bold text-base sm:text-lg cursor-pointer flex-1 text-center transition-colors ${
            projectType === 'network'
              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
          onClick={() => setProjectType('network')}
        >
          Network & Cloud Infrastructure
        </button>
        <button
          type="button"
          className={`pb-3 font-bold text-base sm:text-lg cursor-pointer flex-1 text-center transition-colors ${
            projectType === 'software'
              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
          onClick={() => setProjectType('software')}
        >
          Software & Full-Stack
        </button>
      </div>

      <div className="flex flex-wrap my-10 gap-16">
        {projectType === 'network'
          ? networkProjects.map((project, index) => (
              <NetworkProjectCard
                key={project.name + index}
                name={project.name}
                description={project.description}
                imgUrl={project.imgUrl}
                link={project.link}
              />
            ))
          : softwareProjects.map((project, index) => (
              <SoftwareProjectCard
                key={project.name + index}
                name={project.name}
                company={project.company}
                theme={project.theme}
                description={project.description}
                iconUrl={project.iconUrl}
                link={project.link}
              />
            ))}
      </div>
    </div>
  );
};

export default ProjectContainer;