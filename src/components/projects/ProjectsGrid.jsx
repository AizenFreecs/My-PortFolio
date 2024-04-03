import React from "react";
import { FiSearch } from "react-icons/fi";
import {setSearchProject,setSelectProject} from "../../store/projectsSlice/projectsSlice";
import { useDispatch, useSelector } from "react-redux";
import ProjectCard from "./ProjectCard";
import ProjectsSelect from "./ProjectsSelect";

function ProjectsGrid() {
  const dispatch = useDispatch();

  const { projects, searchProject, selectProject } = useSelector(
    (state) => state.projects
  );
  // filter by Search
  const searchProjectsByTitle = projects.filter((item) => {
    const result = item.title
      .toLowerCase()
      .includes(searchProject.toLowerCase())
      ? item
      : searchProject === ""
      ? item
      : "";
    console.log(result);
    return result;
  });
  // Filter by category
  const selectProjectsByCategory = projects.filter((item) => {
    let category =
      item.category.charAt(0).toUpperCase() + item.category.slice(1);
    return category.includes(selectProject);
  });

  return (
    <section className="w-full p-2 mt-5 scale-90">
      
      <div className="text-center">
        {" "}
        <h1 className="text-4xl text-gray-900 font-marker">MY PROJECTS</h1>
      </div>
      <div className="w-full flex pt-3 justify-between  item-center px-4  border-primary-light dark:border-secondary-dark pb-3 gap-3">
        <div className="w-full flex justify-between items-center">
          <div className="flex border-b border-primary-light outline-1 ">
            <span className=" hidden sm:block bg-primary-light dark:bg-ternary-dark md:p-2.5 shadow-sm rounded-xl cursor-pointer ">
              <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
            </span>
            <input
              onChange={(e) => {
                dispatch(setSearchProject(e.target.value));
              }}
              className="font-general-medium pl-3 pr-1 sm:px-4 py-2 border focus:outline-none border-gray-500 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Search Projects"
              aria-label="Name"
            />
          </div>
          <ProjectsSelect  setSelectProject={setSelectProject} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mr-3 mt-6 sm:gap-10 ">
        {selectProject
          ? selectProjectsByCategory.map((project) => (
              <ProjectCard
                id={project.id}
                title={project.title}
                category={project.category}
                image={project.img}
                key={project.id}
                livelink={project.liveLink}
                github={project.github}
                description={project.description}
              />
            ))
          : searchProject
          ? searchProjectsByTitle.map((project) => (
              <ProjectCard
                id={project.id}
                title={project.title}
                category={project.category}
                image={project.img}
                key={project.id}
                livelink={project.liveLink}
                github={project.github}
                description={project.description}
              />
            ))
          : projects.map((project) => (
              <ProjectCard
                id={project.id}
                title={project.title}
                category={project.category}
                image={project.img}
                key={project.id}
                livelink={project.liveLink}
                github={project.github}
                description={project.description}
              />
            ))}
      </div>
    </section>
  );
}

export default ProjectsGrid;
