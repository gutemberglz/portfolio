import { IconType } from "react-icons";

type Props = {
  Icon: IconType;
  href: string;
};

export function Contact({ Icon, href }: Props) {
  return (
    <a href={href} target="_blank">
      <div className="size-12 rounded-full flex justify-center items-center md:size-10">
        <Icon fontSize={32} />
      </div>
    </a>
  );
}
