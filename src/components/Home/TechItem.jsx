import React from "react";

function TechItem({name,icon}) {
  return (
    <div className="flex flex-col items-center ml-0">
      <img src={icon} alt={name} className="w-16 h-16" />
      <span className="text-sm mt-2">{name}</span>
    </div>
  );
}

export default TechItem;
