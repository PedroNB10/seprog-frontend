"use client"

import Circle from "./Circle"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
interface IProps {


    data: {
        img: { src: string, alt: string },
        name: string,
        content: string,
        longContent: string,
        social: {
            href: string,
            name: string
        }
    }
}


export default function ByronCard(props: IProps) {

    const [isOpen, setIsOpen] = useState<boolean>(false)



    return (

        <>

            <div onClick={() => { setIsOpen(true) }} className="bg-blue-light p-2 rounded-lg shadow-md hover:scale-[1.02] transition-all">
                <div className="bg-white flex items-center gap-10 p-2 rounded-xl justify-center text-black pr-8">
                    <img className="w-20 border-4 border-blue-dark rounded-2xl" src={props.data.img.src} alt={props.data.img.alt} />
                    <div className="flex flex-col items-start">
                        <h3 className="font-bold">{props.data.name}</h3>
                        <p>{props.data.content}</p>
                    </div>
                    <Circle icon={faArrowDown} />
                </div>

            </div>

            <Dialog className="fixed inset-0 bg-black/30 backdrop-blur-lg " open={isOpen} onClose={() => setIsOpen(false)}>
                <Dialog.Panel className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[65vh] w-[500px] bg-blue-light text-black flex flex-col  justify-center rounded-xl">

                    <div className="bg-white w-[97%] h-[95%]  flex flex-col gap-10 items-center rounded-xl  text-black pr-8 h-10/12 mx-auto">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-center gap-8 pt-4">
                                <img className="w-20 border-4 border-blue-dark rounded-2xl" src={props.data.img.src} alt="" />
                                <h3 className="font-bold text-2xl">{props.data.name}</h3>
                                <Circle icon={faArrowUp} onClick={() => { setIsOpen(false) }} />
                            </div>

                            <span className="items-start text-md font-light">{props.data.content}</span>
                        </div>



                        {/* A byron.solutions é uma empresa júnior que atua no ramo de consultoria em TI, com soluções em desenvolvimento de sistemas, de sites e inclusão digital de pequenas empresas. É composta por alunos dos cursos de Sistemas de Informação, Ciência da Computação e Engenharia da Computação. */}
                        <div className="flex flex-col items-center justify-center gap-4">
                            <p className="max-w-[90%] text-2xl  ">{props.data.longContent}</p>

                            <a
                                target="_blank"
                                className="font-bold text-2xl hover:underline"
                                href="https://www.instagram.com/byron.solutions/"

                            >@{props.data.name}</a>
                        </div>



                    </div>



                    {/* <p>{props.content}</p> */}


                    {/* <button className="absolute top-0 right-0 bg-green-400" onClick={() => setIsOpen(false)}>Deactivate</button>
                    <button className="bg-green-400" onClick={() => setIsOpen(false)}>Cancel</button>
                    <Dialog.Title>Deactivate account</Dialog.Title>
                    <Dialog.Description>
                        This will permanently deactivate your account
                    </Dialog.Description>

                    <p>
                        Are you sure you want to deactivate your account? All of your data
                        will be permanently removed. This action cannot be undone.
                    </p> */}


                </Dialog.Panel>
            </Dialog>

        </>

    )
}