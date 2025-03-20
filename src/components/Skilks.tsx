import { skills } from "../data/skills";
import { SkillType } from "../types/SkillType";

type Props = {
  skill: SkillType;
};

export function Skill({ skill }: Props) {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex flex-wrap text-blue-300">{skill.title}</div>
      <div className="flex flex-wrap ">
        <div className="ml-2 flex gap-1">
          <div className="text-yellow-500">[</div>
          {skill.values.map((item, index, array) => (
            <>
              <div key={index} className="text-[#fa973a]">
                "{item}"
              </div>
              {index < array.length - 1 && ","}
            </>
          ))}
          <div className="text-yellow-500">]</div>
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <div className="flex flex-col gap-2">
      {skills.map((skill, index) => (
        <Skill key={index} skill={skill} />
      ))}
    </div>
  );
}
