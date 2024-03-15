import React from "react";
import { useDispatch } from "react-redux";

const projectCategories = [
  "Web Application",
  "Mobile Application",
  "Machine Learning",
  "Other",
];

function ProjectsSelect({ setSelectProject }) {
  const dispatch = useDispatch();
  return (
    <select
      onChange={(e) => dispatch(setSelectProject(e.target.value))}
      className="px-4 py-2 md:px-6  bg-slate-100 rounded-lg shadow-lg text-sm  md:text-lg "
    >
      <option value={""} className="text-sm sm:text-md cursor-pointer">
        All Projects
      </option>
      {projectCategories.map((item) => (
        <option className=" text-sm md:text-md cursor-pointer" key={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default ProjectsSelect;
