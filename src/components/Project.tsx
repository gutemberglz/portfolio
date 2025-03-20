import { SiDocker } from "react-icons/si";

import { ProjectType } from "../types/ProjectType";

type Props = {
  project: ProjectType;
};

export function Project({
  project: { title, desc, type, docker, name },
}: Props) {
  return (
    <a href={`https://github.com/gutemberglz/${name}`} target="_blank">
      <div className="w-full p-2 rounded-sm border border-gray-500">
        <div className="flex items-center justify-between">
          <span className="px-2 text-sm rounded-xs bg-[#7997CF]">{type}</span>
          {docker && <SiDocker fontSize={25} />}
        </div>
        <h3 className="my-2 ">{title}</h3>
        <p className="text-gray-400">{desc}</p>
      </div>
    </a>
  );
}
