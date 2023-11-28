import React from 'react'
import coco from '../Assets/Capture1.JPG'


function Mid1() {
  return (
    <div className='overflow-y-hidden font-nav'>
    <div className="xl:mx-auto xl:container  xl:px-20 md:px-6 px-4 py-12">
      <div className="lg:flex items-center justify-center lg:space-x-12 2xl:space-x-6">
        <div>
          <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">Why choose us</p>
          <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full">At Cocobrigs, we pride ourselves on delivering top-notch products and services</p>
          <div className="lg:hidden lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
            <img src={coco} alt="cocobrigs" className="w-full obejct-fit object-center object-fill h-full" />
          </div>
          <div className="mt-6 md:mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:mt-6 2xl:mt-12">
            <div className="flex items-center">
              <div className="w-16 h-16">
                <div className=" flex-shrink-0  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                  <img src="https://img.icons8.com/color-glass/80/alarm-clock--v1.png" alt="clock" />
                </div>
              </div>
              <div className="flex items-start flex-col ml-6 pt-8">
                <h2 className="text-lg font-semibold leading-4 text-gray-800">Time Prompt</h2>
                <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Fast and efficient heat for grilling.</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 ">
                <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                  <img src="https://img.icons8.com/external-fauzidea-flat-fauzidea/80/external-user-user-interface-fauzidea-flat-fauzidea.png" alt="Friendly" />
                </div>
              </div>
              <div className="flex items-start flex-col ml-6 pt-8">
                <h2 className="text-lg font-semibold leading-4 text-gray-800">User Friendly</h2>
                <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Highly user-friendly and convenient to use.</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 ">
                <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                  <img src="https://img.icons8.com/color/80/guarantee.png" alt="Quality" />
                </div>
              </div>
              <div className="flex items-start flex-col ml-6 pt-8">
                <h2 className="text-lg font-semibold leading-4 text-gray-800">Quality</h2>
                <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Our commitment to quality is reflected in every aspect of our offerings.</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 ">
                <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                  <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-natural-vegan-and-vegetarian-flaticons-flat-flat-icons.png" alt="Natural" />
                </div>
              </div>
              <div className="flex items-start flex-col ml-6 pt-8">
                <h2 className="text-lg font-semibold leading-4 text-gray-800">100% Natural</h2>
                <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Natural and sustainable fuel source.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
          <img src={coco} alt="cocobrigs" className="w-full obejct-fit object-center object-fill h-full" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Mid1