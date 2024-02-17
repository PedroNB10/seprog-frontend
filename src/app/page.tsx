

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";




import React, { Fragment } from 'react'

config.autoAddCss = false;

// import ByronCard from "./components/ByronCard";
import { Tab } from "@headlessui/react";
import { IHomepage, Attributes } from "./interfaces/IHomepage";


import axiosHeader from "./api/axiosHeader";
import { NextPageContext } from "next";
import ByronCard from "./components/ByronCard";

import { TabGroup } from './components/TabGroup'
import IOrganizers, { DaumOrganizers } from "./interfaces/IOrganizers";
import ISchedules, { DaumSchedules } from "./interfaces/ISchedules";

let tabsData = [
  {
    id: 10,
    tab: {
      day: "Segunda-feira (19/09)",
      person: "byron.solutions",
      description: "Desenvolvimento de um portfólio pessoal"

    },
    content: {
      title: "Desenvolvimento de um portfólio pessoal",
      text: "Teoria: O mini-curso terá como objetivo o ensinamento do clico básico do desenvolvimento web, contemplando HTML, CSS e JS."
    }

  },

  {
    id: 20,
    tab: {
      day: "Terça-feira (20/09)",
      person: "byron.solutions",
      description: "Desenvolvimento de um portfólio pessoal"

    },
    content: {
      title: "Yahuu",
      text: "Teoria: O mini-curso terá como objetivo o ensinamento do clico básico do desenvolvimento web, contemplando HTML, CSS e JS."
    }

  },
  {
    id: 30,
    tab: {
      day: "Quarta-feira (21/09)",
      person: "byron.solutions",
      description: "Desenvolvimento de um portfólio pessoal"

    },
    content: {
      title: "Ebaa",
      text: "Teoria: O mini-curso terá como objetivo o ensinamento do clico básico do desenvolvimento web, contemplando HTML, CSS e JS."
    }

  },
  {
    id: 40,
    tab: {
      day: "Quinta-feira (22/09)",
      person: "byron.solutions",
      description: "Desenvolvimento de um portfólio pessoal"

    },
    content: {
      title: "Ebaa",
      text: "Teoria: O mini-curso terá como objetivo o ensinamento do clico básico do desenvolvimento web, contemplando HTML, CSS e JS."
    }

  },
  {
    id: 50,
    tab: {
      day: "Sexta-feira (23/09)",
      person: "byron.solutions",
      description: "Desenvolvimento de um portfólio pessoal"

    },
    content: {
      title: "Ebaa",
      text: "Teoria: O mini-curso terá como objetivo o ensinamento do clico básico do desenvolvimento web, contemplando HTML, CSS e JS."
    }

  }
]


interface IProps {
  home: IHomepage,
  organizers: IOrganizers,
  schedule: ISchedules
}




async function getData(): Promise<{ home: Attributes } & { organizers: DaumOrganizers[] } & { schedule: DaumSchedules[] }> {
  try {

    const homepageRes = await axiosHeader.get<IHomepage>('home');
    const home = homepageRes.data.data.attributes;

    const organizersRes = await axiosHeader.get<IOrganizers>('organizers?populate=*');
    const organizers = organizersRes.data.data;

    const scheduleRes = await axiosHeader.get<ISchedules>('programacaos?populate=*');
    const schedule = scheduleRes.data.data;



    return { home, organizers, schedule }

  } catch (error) {
    throw new Error("Erro ao buscar dados da API");
  }
}


export default async function Home() {
  const props = await getData()
  // console.log("props");
  // console.log(props.schedule[0].attributes.tabDay);
  // console.log(props.organizers[0].attributes.logo.data.attributes.url);

  // console.log(props.home.data.attributes.heroDescription);
  // console.log(props.home.data.attributes.aboutDescription);


  // console.log(props.schedule[0].attributes.events);


  let partipantData = [

    {
      img: { src: "/img/logo-byron-quadrado.jpg", alt: "Logo da byron" },
      name: "byron.solutions",
      content: "Conteúdos de CSS, HTML e JS.",
      longContent: "A byron.solutions é uma empresa júnior que atua no ramo de consultoria em TI, com soluções em desenvolvimento de sistemas, de sites e inclusão digital de pequenas empresas. É composta por alunos dos cursos de Sistemas de Informação, Ciência da Computação e Engenharia da Computação.",
      social: { href: "https://www.instagram.com/byron.solutions/", name: "byron.solutions" }

    },

    {
      img: { src: "/img/logo-byron-quadrado.jpg", alt: "Logo da byron" },
      name: "byron.solutions",
      content: "Conteúdos de CSS, HTML e JS.",
      longContent: "A byron.solutions é uma empresa júnior que atua no ramo de consultoria em TI, com soluções em desenvolvimento de sistemas, de sites e inclusão digital de pequenas empresas. É composta por alunos dos cursos de Sistemas de Informação, Ciência da Computação e Engenharia da Computação.",
      social: { href: "https://www.instagram.com/byron.solutions/", name: "byron.solutions" }

    },

    {
      img: { src: "/img/logo-byron-quadrado.jpg", alt: "Logo da byron" },
      name: "byron.solutions",
      content: "Conteúdos de CSS, HTML e JS.",
      longContent: "A byron.solutions é uma empresa júnior que atua no ramo de consultoria em TI, com soluções em desenvolvimento de sistemas, de sites e inclusão digital de pequenas empresas. É composta por alunos dos cursos de Sistemas de Informação, Ciência da Computação e Engenharia da Computação.",
      social: { href: "https://www.instagram.com/byron.solutions/", name: "byron.solutions" }

    },

    {
      img: { src: "/img/logo-byron-quadrado.jpg", alt: "Logo da byron" },
      name: "byron.solutions",
      content: "Conteúdos de CSS, HTML e JS.",
      longContent: "A byron.solutions é uma empresa júnior que atua no ramo de consultoria em TI, com soluções em desenvolvimento de sistemas, de sites e inclusão digital de pequenas empresas. É composta por alunos dos cursos de Sistemas de Informação, Ciência da Computação e Engenharia da Computação.",
      social: { href: "https://www.instagram.com/byron.solutions/", name: "byron.solutions" }

    }

  ]

  return (
    <>
      <section className="flex items-center justify-center bg-gradient-to-b from-blue-lightest to-blue-dark text-white py-12">
        <div className="flex items-center max-w-6xl w-full">
          <div className=" flex flex-col gap-16">
            <div className=" flex flex-col gap-5">
              <h1 className="text-4xl font-bold drop-shadow-lg">{props.home.heroTitle}</h1>
              {/* II Semana de Programação */}
              <p>
                {props.home.heroDescription}
                {/* Se atualize com a evolução da tecnologia! Será uma semana de aprendizado em desenvolvimento web, visão computacional, programação em jogos e maratona de programação. */}
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

      <section id="sobre" className="flex items-center justify-center bg-blue-dark text-white py-12">
        <div className="flex flex-col items-center max-w-6xl w-full ">
          {/* primeira subseção */}
          <div className="flex items-center  max-w-6xl gap-24">
            <picture className="w-[80rem]">
              <img src="/img/apresentacao.png" alt="" />
            </picture>

            <div className="flex flex-col gap-3 w-full">
              <div className="w-24 h-2 bg-white rounded-md" />
              <h3 className="text-lg font-light ">Sobre a SEPROG</h3>
              {/* Faça parte dessa evolução! */}
              <h2 className="text-2xl font-semibold drop-shadow-md">{props.home.aboutTitle}</h2>
              {/* Com sua primeira edição em 2021 no formato EAD, a Semana de Programação vem se tornando um grande evento realizado pelo Instituto de Matemática e Computação da UNIFEI, com o objetivo de mostrar e ensinar conteúdos incríveis, muito fortes no ramo profissional, de uma forma prática, para todos os alunos na universidade. */}
              <p className="">{props.home.aboutDescription}</p>
            </div>

          </div>

          <div className="flex flex-col items-center justify-center  max-w-6xl">
            <h2 className="font-bold text-xl mt-36">Aprenda com os melhores!! </h2>

            <div className="grid grid-cols-2 grid-rows-2 gap-8 mt-12">


              {props.organizers.map((data, index) => {
                return <ByronCard data={data} key={index} />
              })}


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


      <section id="programacao" className="flex items-center justify-center bg-gradient-to-b from-blue-dark to-blue-light  text-white py-36">
        <div className="flex flex-col items-center max-w-6xl w-full">
          <TabGroup tabsData={props.schedule}>

          </TabGroup>

        </div>
      </section>

      <section className="flex items-center justify-center bg-gradient-to-b from-blue-light to-blue-dark  text-white py-16">
        <div className="flex flex-col items-center max-w-6xl w-full gap-8 ">
          <h2 className="text-4xl font-bold drop-shadow" >Localização do evento</h2>

          <div className="w-full" >
            <iframe
              className="rounded-[48px] border-4 border-yellow shadow-2xl"
              width="100%"
              height="600"

              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=-22.413660665962524,%20-45.45023733251049+(Unifei)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">

            </iframe>

          </div>



          <picture>
            <img
              src="/img/mapa.png"
              alt=""
              className="w-20 "
            />
          </picture>

          <span className="text-4xl font-bold">SEPROG</span>

          <div className="flex flex-col gap-4 items-center text-xl">
            <span className="text-2xl font-bold">Instituto de Matemática e Computação - UNIFEI</span>
            <span>Avenida B P S, 1303 - Pinheirinho</span>
            <span>Itajubá - MG</span>

          </div>
        </div>
      </section >


    </>
  );


}


// export const getStaticProps = async () => {

//   let res: IHomepage | null = null;
//   let data = null;

//   try {
//     const response = await axiosHeader.get<IHomepage>('home?populate=*');
//     const { data } = response.data;
//     console.log("Buscando");
//     console.log(data);

//   } catch (error) {
//     throw new Error("Erro ao buscar dados da API");
//   }

//   console.log("Buscando");


//   return {
//     props: { data }
//   }
// }


