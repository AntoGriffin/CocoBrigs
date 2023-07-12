import React from 'react'

function About() {
  return (
    <div className='pt-14'>
            <div className="2xl:mx-auto 2xl:container 2xl:px-20 px-6 ">
                <div className="flex md:flex-row flex-col-reverse md:items-stretch items-center justify-center">
                    <div className="md:py-20 xl:w-1/2 sm:w-1/2 lg:mr-20 md:mr-6 flex flex-col md:items-end items-center justify-center xl:mr-28">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="md:text-5xl text-3xl font-bold text-center text-gray-800">About Us</h1>
                            <p className="sm:w-96 w-full mt-6 text-base leading-6 text-center text-gray-600">By choosing coconut charcoal, you support environmentally friendly practices and reduce the need for cutting down trees.</p>
                            <div className="md:mt-14 mt-12 flex flex-col items-center">
                                <div className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="money">
                                <img src="https://img.icons8.com/fluency/48/high-temperature-hazard.png" alt="temp" />
                                </div>
                                <p className="text-base leading-6 mt-6 text-center text-gray-600 sm:w-96 w-full">Coconut charcoal has excellent heat retention and can reach high temperatures, making it ideal for grilling and cooking purposes.</p>
                            </div>
                            <div className="mt-7 flex flex-col items-center">
                                <div className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="phone">
                                <img src="https://img.icons8.com/fluency/48/smoke-explosion.png" alt="smoke" />
                                </div>
                                <p className="text-base leading-6 mt-6 text-center text-gray-600 sm:w-96 w-full">Coconut charcoal produces minimal smoke and odors, creating a more pleasant and healthier grilling environment. </p>
                            </div>
                            <div className="mt-7 flex flex-col items-center">
                                <div className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="ideas">
                                <img src="https://img.icons8.com/bubbles/80/fire-element.png" alt="long lasting" />
                                </div>
                                <p className="text-base leading-6 mt-6 text-center text-gray-600 sm:w-96 w-full">Coconut charcoal burns slowly and consistently, providing a longer-lasting heat source compared to other types of charcoal. </p>
                            </div>
                            <div className="mt-7 flex flex-col items-center">
                                <div className="w-20 h-20 bg-white shadow rounded-full flex items-center justify-center" role="img" aria-label="bright ideas">
                                    <img src="https://img.icons8.com/external-icongeek26-flat-icongeek26/80/external-healthy-fitness-icongeek26-flat-icongeek26.png" alt="health" />
                                </div>
                                <p className="text-base leading-6 mt-6 text-center text-gray-600 sm:w-96 w-full">Compared to briquettes containing additives or chemicals, coconut charcoal offers a healthier grilling option, free from harmful substances that can transfer to food.</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-12 xl:w-1/2 lg:w-1/3 sm:w-1/2">
                        <img src="https://www.linkpicture.com/q/image-380x640.jpg" alt="charcoal" className="h-full rounded-md object-cover object-center md:block hidden" />
                        <img src="https://www.linkpicture.com/q/image-343x543.jpg" alt="coco" className="h-auto w-auto md:hidden block" />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About