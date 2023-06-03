import ProjectCard from "./ProjectCard";

const ProjectComponent = () => {
  return ( 
    <div className="w-full p-5 lg:p-8 lg:w-[60%]">
      <h1 className="text-[1.3rem] font-bold lg:mt-[100px] mb-[20px]">My Projects</h1>
      <ProjectCard/>
    </div>
   );
}
 
export default ProjectComponent;