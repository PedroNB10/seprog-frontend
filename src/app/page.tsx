import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

import Circle from "./components/Circle";
import ByronCard from "./components/ByronCard";

export default function Home() {
  return (
    <>
      <section className="flex items-center justify-center bg-gradient-to-b from-blue-lightest to-blue-dark text-white py-12">
        <div className="flex items-center max-w-6xl w-full">
          <div className=" flex flex-col gap-16">
            <div className=" flex flex-col gap-5">
              <h1 className="text-4xl font-bold drop-shadow-lg">II Semana de Programação</h1>
              <p>
                Se atualize com a evolução da tecnologia! Será uma semana de aprendizado em desenvolvimento web, visão computacional, programação em jogos e maratona de programação.
              </p>
            </div>
            <button className="flex items-center bg-yellow rounded-xl text-xl shadow py-5 px-8 self-start gap-4 focus:scale-110 hover:scale-110 transition-all">
              <picture>
                <img className="w-6" src="/img/clique.png" alt="Ícone de uma mão clicando" />
              </picture>
              Garanta Já sua vaga!
            </button>
          </div>

          <picture className="w-[72rem]">
            <img src="/img/BlockGroups.png" alt="Blocos empilhados" />
          </picture>

        </div>
      </section>

      <section className="flex items-center justify-center bg-blue-dark text-white py-12">
        <div className="flex flex-col items-center max-w-6xl w-full ">
          {/* primeira subseção */}
          <div className="flex items-center  max-w-6xl gap-24">
            <picture className="w-[80rem]">
              <img src="/img/apresentacao.png" alt="" />
            </picture>

            <div className="flex flex-col gap-3 w-full">
              <div className="w-24 h-2 bg-white rounded-md" />
              <h3 className="text-lg font-light ">Sobre a SEPROG</h3>
              <h2 className="text-2xl font-semibold drop-shadow-md">Faça parte dessa evolução!</h2>
              <p className="">Com sua primeira edição em 2021 no formato EAD, a Semana de Programação vem se tornando um grande evento realizado pelo Instituto de Matemática e Computação da UNIFEI, com o objetivo de mostrar e ensinar conteúdos incríveis, muito fortes no ramo profissional, de uma forma prática, para todos os alunos na universidade.</p>
            </div>

          </div>



          {/* segunda subseção */}

          <div className="flex flex-col items-center justify-center  max-w-6xl">
            <h2 className="font-bold text-xl mt-36">Aprenda com os melhores!! </h2>

            <div className="grid grid-cols-2 grid-rows-2 gap-8 mt-12">

              <ByronCard />
              <ByronCard />
              <ByronCard />
              <ByronCard />
            </div>

            <button className="mx-auto my-20 flex items-center bg-yellow rounded-xl text-xl shadow py-3 px-8 self-start gap-4 focus:scale-110 hover:scale-110 transition-all">
              <picture>
                <img className="w-6" src="/img/clique.png" alt="Ícone de uma mão clicando" />
              </picture>
              Garanta Já sua vaga!
            </button>
          </div>


        </div>
      </section>

    </>
  );
}
