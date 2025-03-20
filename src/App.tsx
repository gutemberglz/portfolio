import { AboutMe } from "./components/AboutMe";
import { Contacts } from "./components/Contacts";
import { Introduction } from "./components/Introduction";
import { Projects } from "./components/Projects";

// import { useScreenWidth } from './hooks/screenWidth';

export default function App() {
  return (
    <div className="container mx-auto px-3 md:px-0">
      <main className="mt-10 flex flex-col gap-10 pb-2">
        <Introduction
          title="Desenvolvedor Web"
          desc="Estudante de desenvolvimento web com foco Typescript, React e Node.js.
        Buscando estágio para crescer na área de tecnologia."
        />

        <AboutMe />
        <Projects />
      </main>
      <Contacts />
    </div>
  );
}
