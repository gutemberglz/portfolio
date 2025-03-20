import { useScreenWidth } from "../hooks/screenWidth";
import { Skills } from "./Skilks";

export function AboutMe() {
  const { screenWidth } = useScreenWidth();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl text-[#7997CF]">Quem sou eu?</h1>
      <div className="flex flex-col gap-3 text-gray-400 ">
        <p>
          Olá, meu nome é <b className="md:w-3">Luiz Gutemberg</b> tenho 19 anos
          e sou apaixonado por tecnologia. {screenWidth >= 768 && <br />} Ao
          longo da minha trajetória, sempre busco me aprimorar e aprender algo
          novo, o que me permitiu desenvolver habilidades em: <br />
        </p>
        <Skills />
        <br />
        <p>
          Sou uma pessoa comunicativa e acredito que a colaboração e o trabalho
          em equipe são essenciais para o sucesso.
        </p>
        <p>
          Atualmente, busco novos desafios e crescimento contínuo, sempre com o
          compromisso de agregar valor às pessoas e aos projetos com os quais me
          envolvo.
        </p>
      </div>
    </div>
  );
}
