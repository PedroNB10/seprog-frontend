'use client'

import { Tab } from '@headlessui/react'
import React, { Fragment } from 'react'

interface IProps {
    tabsData: Array<any>
}

export function TabGroup({ tabsData }: IProps) {
    return (
        <Tab.Group>
            <div className="flex items-center rounded-3xl bg-gray shadow">

                <Tab.List as="ul" className="flex flex-col items-start">

                    {tabsData.map((element, index) => {
                        return (


                            <Tab as={Fragment} key={index} >
                                {({ selected }) => (
                                    /* Use the selected state to conditionally style the selected tab. */
                                    <li className="overflow-hidden rounded-r-2xl first:rounded-tl-2xl first:rounded-tr-none last:rounded-bl-2xl last:rounded-br-none shadow-lg z-10">
                                        <button
                                            type="button"
                                            className={
                                                selected ? ' bg-blue-light px-5 py-6 w-96 flex flex-col items-start' : 'bg-blue-dark px-5 py-6 flex flex-col items-start'
                                            }
                                        >
                                            <h3 className="text-xl font-bold">{element.tab.day}</h3>
                                            <span className="font-bold">{element.tab.person}</span>
                                            <p>{element.tab.description}</p>
                                        </button>
                                    </li>
                                )}
                            </Tab>



                        )
                    })}


                </Tab.List>



                <Tab.Panels>
                    {tabsData.map((element, index) => {

                        return <Tab.Panel key={index} className="bg-blue-light m-16 p-6 rounded-3xl">
                            <h2 className="text-2xl font-bold">{element.content.title}</h2>
                            <p>{element.content.text}</p>
                        </Tab.Panel>
                    })}


                    <Tab.Panel className="bg-blue-light m-16 p-6 rounded-3xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quia at eum tempora voluptate quod quidem veniam excepturi voluptas facere eaque nihil accusantium! Amet asperiores eum animi eligendi impedit minus cupiditate fugit nobis provident aut dolore incidunt dignissimos, facere ipsa blanditiis vero officiis? Architecto, natus. Accusantium numquam vel a fugiat excepturi corporis nesciunt illo et voluptatum? Magni suscipit inventore perferendis cupiditate nesciunt voluptates asperiores ullam veritatis rem esse saepe deleniti eius modi officiis perspiciatis, expedita, quidem numquam. Dolore facere provident rerum consequatur similique sunt vitae omnis quos id maiores, at deleniti illum aut possimus quia officia atque, repellendus sed quibusdam.
                    </Tab.Panel>
                </Tab.Panels>


            </div>

        </Tab.Group>
    )
}

export default TabGroup