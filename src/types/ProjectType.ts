export type ProjectType = {
  name: string;
  title: string;
  desc: string;
  type: "frontend" | "backend" | "fullstack";
  docker?: boolean;
};
