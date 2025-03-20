import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { projects as dataProjects } from "../data/projects";
import { ProjectType } from "../types/ProjectType";
import { Project } from "./Project";

type Props = {
  value: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
};

function Option({ value, selected, setSelected }: Props) {
  function handleSelected() {
    setSelected(value.toLowerCase());
  }

  return (
    <div
      className={`px-3 py-1 rounded-md text-white cursor-pointer ${
        selected ? "bg-gray-600" : "bg-gray-800 "
      }`}
      onClick={handleSelected}
    >
      {value}
    </div>
  );
}

const options = ["all", "frontend", "backend", "fullstack"];

export function Projects() {
  const [projects, setProjects] = useState<ProjectType[]>(dataProjects);
  const [selected, setSelected] = useState<string>("all");

  useEffect(() => {
    if (selected === "all") {
      setProjects(dataProjects);
    } else {
      setProjects(dataProjects.filter((e) => e.type === selected));
    }
  }, [selected]);
  return (
    <div className="flex flex-col gap-3 ">
      <h1 className="text-2xl text-[#7997CF]">Projetos</h1>
      <div className="flex gap-3">
        {options.map((item, index) => (
          <Option
            key={index}
            value={item}
            selected={selected === item}
            setSelected={setSelected}
          />
        ))}
      </div>
      <div className="scrollbar max-h-[400px] overflow-y-scroll grid grid-cols-2 gap-3  md:grid-cols-3 lg:grid-cols-4 ">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
