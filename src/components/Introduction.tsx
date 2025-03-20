// const expertise = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "TypeScript",
//   "Talwindcss",
//   "Git",
//   "Banco de dados",
//   "NodeJS",
// ];

import { JSX } from "react";

// let timer: any;

type Props = {
  title: string;
  desc: string | JSX.Element;
  animation?: boolean;
};

export function Introduction({ title, desc }: Props) {
  return (
    <div className=" flex flex-col items-center justify-center gap-2 md:items-start">
      <h1 className="text-3xl  text-[#7997CF]">{title}</h1>
      <p className="text-[16px] text-center text-gray-400 md:text-start">
        {desc}
      </p>
    </div>
  );
}
