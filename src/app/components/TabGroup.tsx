'use client'


import { Tab } from '@headlessui/react'
import React, { Fragment } from 'react'
import { DaumSchedules } from '../interfaces/ISchedules'

interface IProps {
    tabsData: DaumSchedules[]
}

export function TabGroup({ tabsData }: IProps) {

    let days = tabsData.map((element, index) => {
        return element.attributes
    })

    console.log(days[0].contentImg.data.attributes.url)

    return (
        <Tab.Group>
            <div className="flex items-center rounded-3xl bg-gray shadow">

                <Tab.List as="ul" className="flex flex-col items-start">

                    {tabsData.map((element, index) => {
                        return (


                            <Tab as={Fragment} key={crypto.randomUUID()} >
                                {({ selected }) => (
                                    /* Use the selected state to conditionally style the selected tab. */
                                    <li className="overflow-hidden rounded-r-2xl first:rounded-tl-2xl first:rounded-tr-none last:rounded-bl-2xl last:rounded-br-none shadow-lg z-1">
                                        <button
                                            type="button"
                                            className={
                                                selected ? ' bg-blue-light px-5 py-6 w-96 flex flex-col items-start' : 'bg-blue-dark px-5 py-6 flex flex-col items-start'
                                            }
                                        >
                                            <h3 className="text-xl font-bold">{element.attributes.tabDay}</h3>
                                            <span className="font-bold">{element.attributes.organizer}</span>
                                            <p>{element.attributes.theme}</p>
                                        </button>
                                    </li>
                                )}
                            </Tab>



                        )
                    })}


                </Tab.List>



                <Tab.Panels>
                    {

                        days.map((day, index) => {

                            return (
                                <Tab.Panel key={crypto.randomUUID()} className="bg-blue-light m-16 p-6 rounded-3xl ">

                                    <div className='flex'>
                                        <div>
                                            <picture>
                                                <img src={`http://127.0.0.1:1337${day.contentImg.data.attributes.url}`} alt="" />
                                            </picture>

                                            <div className='flex flex-col gap-3'>
                                                <div className="w-24 h-[3px] bg-white rounded-full" />

                                                <h2 className='font-semibold text-3xl'>

                                                    {day.organizer}
                                                </h2>


                                                <span>{day.theme}</span>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-2' >
                                            {
                                                day.events.data.map((event) => {
                                                    return (

                                                        <div className='flex flex-col' key={crypto.randomUUID()}>
                                                            <span className='flex items-center gap-3 font-bold text-xl'>
                                                                <img src="/img/arrow.svg" alt="" />
                                                                {event.attributes.time}
                                                            </span>
                                                            <span>{event.attributes.content}</span>
                                                        </div>

                                                    )
                                                })}
                                        </div>
                                    </div>



                                </Tab.Panel>)
                        })

                    }



                </Tab.Panels>


            </div>

        </Tab.Group>
    )
}

export default TabGroup