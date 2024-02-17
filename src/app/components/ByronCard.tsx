'use client'

import Circle from "./Circle"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import { DaumOrganizers } from "../interfaces/IOrganizers"
import { Attributes2, Attributes } from "../interfaces/IOrganizers"
interface IProps {
    data: DaumOrganizers
}

// interface IProps {


//     data: {
//         img: { src: string, alt: string },
//         name: string,
//         content: string,
//         longContent: string,
//         social: {
//             href: string,
//             name: string
//         }
//     }
// }

export default function ByronCard(props: IProps) {

    const [isOpen, setIsOpen] = useState<boolean>(false)


    console.log(props.data.attributes.logo.data.attributes.url)
    return (


        <div>
            <div onClick={() => { setIsOpen(true) }} className="bg-blue-light p-2 rounded-lg shadow-md hover:scale-[1.02] transition-all">
                <div className="bg-white flex items-center gap-10 p-2 rounded-xl justify-center text-black pr-8">
                    <img className="w-20 border-4 border-blue-dark rounded-2xl" src={`http://127.0.0.1:1337${props.data.attributes.logo.data.attributes.url}`} alt={props.data.attributes.logo.data.attributes.alternativeText} />
                    <div className="flex flex-col items-start">
                        <h3 className="font-bold">{props.data.attributes.organizer}</h3>
                        <p>{props.data.attributes.shortContent}</p>
                    </div>
                    <Circle icon={faArrowDown} />
                </div>
            </div>
            <Dialog className="fixed inset-0 bg-black/30 backdrop-blur-lg " open={isOpen} onClose={() => setIsOpen(false)}>
                <Dialog.Panel className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-4  w-[500px] bg-blue-light text-black flex flex-col  justify-center rounded-xl">
                    <div className="bg-white w-[97%] h-[95%]  flex flex-col gap-10 items-center rounded-xl  text-black pr-8 h-10/12 mx-auto">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-center gap-8 pt-4">
                                <img className="w-20 border-4 border-blue-dark rounded-2xl" src={`http://127.0.0.1:1337${props.data.attributes.logo.data.attributes.url}`} alt={props.data.attributes.logo.data.attributes.alternativeText} />
                                <h3 className="font-bold text-2xl">{props.data.attributes.organizer}</h3>
                                <Circle icon={faArrowUp} onClick={() => { setIsOpen(false) }} />
                            </div>
                            <span className="items-start text-md font-light">{props.data.attributes.shortContent}</span>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-4">
                            <p className="max-w-[90%] text-2xl  ">{props.data.attributes.longContent}</p>
                            <a
                                target="_blank"
                                className="font-bold text-2xl hover:underline"
                                href="https://www.instagram.com/byron.solutions/"
                            >@{props.data.attributes.organizer}</a>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </div>



    )
}