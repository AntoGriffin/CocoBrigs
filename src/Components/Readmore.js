import React, { useEffect } from 'react'
import data from '../Assets/data.json'
import { useParams } from 'react-router-dom'


function Readmore() {
    const {id} = useParams()
    const content=data[id-1]
    
    console.log(id)
    useEffect(() => {
          console.log(content)
          }, [content]
    )
  return (
    <div className='pt-14 font-nav mt-2'>
            <div className="2xl:mx-auto 2xl:container 2xl:px-20 px-6 ">
                <div className="flex md:flex-row flex-col-reverse md:items-stretch items-center justify-center">
                    <div className="md:py-20 xl:w-1/2 sm:w-1/2 lg:mr-20 md:mr-6 flex flex-col md:items-end items-center justify-center xl:mr-28">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="md:text-5xl text-3xl font-bold text-center text-gray-800">{content.title}</h1>
                            <p className="sm:w-96 w-full mt-6 text-base leading-6 text-center text-gray-600">By choosing coconut charcoal, you support environmentally friendly practices and reduce the need for cutting down trees.</p>
                            <div className="md:mt-14 mt-12 flex flex-col items-center">
                                {/* <div className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="money">
                                <img src="https://img.icons8.com/ios-filled/50/coconut--v1.png" alt="temp" />
                                </div> */}
                                        <h2 className="mb-2 text-lg font-semibold text-gray-900">Features:</h2>
                                        <ul className="max-w-md space-y-1 text-black list-disc list-inside ">
                                            <li>
                                                {content.material}
                                            </li>
                                            <li>
                                                {content.colour}
                                            </li>
                                            <li>
                                                {content.smoke}
                                            </li>
                                            <li>
                                                {content.odour}
                                            </li>
                                            <li>
                                                {content.shape}
                                            </li>
                                            <li>
                                                {content.dimension}
                                            </li>
                                            <li>
                                                {content.weight}
                                            </li>
                                            <li>
                                                {content.fixedcarbon}
                                            </li>
                                            <li>
                                                {content.ash}
                                            </li>
                                            <li>
                                                {content.moisture}
                                            </li>
                                            <li>
                                                {content.volatilematerial}
                                            </li>
                                            <li>
                                                {content.burningtime}
                                            </li>
                                        </ul>
                                </div>
                        </div>
                    </div>
                    <div className="py-12 xl:w-1/2 lg:w-1/3 sm:w-1/2">
                        <img src={content.image} alt="charcoal" className="h-full rounded-md object-cover object-center md:block hidden" />
                        <img src={content.image} alt="coco" className="h-auto w-auto md:hidden block" />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Readmore