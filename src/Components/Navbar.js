import React from 'react'


function Navbar() {
   return (
   <header>
    
<nav className="bg-gradient-to-r from-orange-300 to-red-500 border-gray-200 z-100 fixed top-0 w-full">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/" className="flex items-center justify-center">
            <img src="https://iili.io/HQtI1n4.md.png" class=" h-8 mr-3" alt="cocobrigs Logo" />
        </a>
        <div className="flex items-center">
            <img src="https://img.icons8.com/ios/20/000000/phone--v1.png" className="p-1" alt='icon'/>
            <a href="tel:5541251234" className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">+1(847)530-4842</a>
        </div>
    </div>
</nav>
<nav className="bg-gray-50 border-gray-200 fixed w-full top-16">
    <div className="max-w-screen-xl px-4 py-3 mx-auto ">
        <div className="flex items-center ">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm ">
                <li>
                    <a href="/" className="text-gray-900 rounded-none hover:bg-amber-300  p-5" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="/about" className="text-gray-900 rounded-none hover:bg-amber-300 p-5">About Us</a>
                </li>
                <li>
                    <a href="/contact" className="text-gray-900 rounded-none hover:bg-amber-300 p-5">Contact Us</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
   
   </header>
)
}

export default Navbar