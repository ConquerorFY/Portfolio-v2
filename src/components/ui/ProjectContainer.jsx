import { useState } from "react";
import { SoftwareProjectCard, NetworkProjectCard } from "./ProjectCard";

const ProjectContainer = ({ softwareProjects, networkProjects }) => {
  const [projectType, setProjectType] = useState('software');

  return <div className="mt-10">
    <div className="flex justify-between items-center">
      <h2 className={`text-slate-800 dark:text-slate-200 pb-2 font-bold text-lg cursor-pointer flex-grow text-center ${projectType === 'software' && "border-b-2 border-blue-600"}`} onClick={() => setProjectType("software")}>Software-Related</h2>
      <h2 className={`text-slate-800 dark:text-slate-200 pb-2 font-bold text-lg cursor-pointer flex-grow text-center ${projectType === 'network' && "border-b-2 border-blue-600"}`} onClick={() => setProjectType("network")}>Network-Related</h2>
    </div>
    <div className="flex flex-wrap my-10 gap-16">
      {projectType === 'software' ? softwareProjects.map((project, index) => (
        <SoftwareProjectCard
          key={project.name + Math.random() * index}
          name={project.name}
          company={project.company}
          theme={project.theme}
          description={project.description}
          iconUrl={project.iconUrl}
          link={project.link} />
      )) : networkProjects.map((project, index) => (
        <NetworkProjectCard
          key={project.name + Math.random() * index}
          name={project.name}
          description={project.description}
          imgUrl={project.imgUrl}
          link={project.link} />
      ))}
    </div>
  </div>
}

export default ProjectContainer;