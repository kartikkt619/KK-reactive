import React from 'react'
import RootLayout from '../../layout/RootLayout'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'

import MasterCardImg from "../../assets/mastercard.png"
import CreditCardImg from "../../assets/creditcard.png"
import PaypalImg from "../../assets/paypal.png"



const Footer = () => {
  return (
    <div className='w-full h-auto bg-neutral-950 py-12'>

        <RootLayout className="space-y-10">

            {/* Footer other content */}
            <div className="w-full grid grid-cols-5 gap-8">
                <div className="col-span-2 space-y-8 md:pr-10 pr-0">
                    <div className="space-y-3">
                        {/* Logo */}
                    <Link to="/" className='text-6xl text-red-500 font-bold'>
                        KK Bus Booking
                    </Link>

                    {/* some description */}
                    <p className="text-sm text-neutral-500 font-normal">
                    Our bus booking website offers a seamless and convenient way to search, compare, and book bus tickets online. Whether you're planning a short city commute or a long-distance journey, our platform connects you with trusted bus operators across the region. With real-time seat availability, secure payment options, and instant booking confirmations, traveling by bus has never been easier. Enjoy features like live bus tracking, easy cancellations, and 24/7 customer support to make your journey smooth and hassle-free.
                    </p>
                    </div>

                    {/* Social links */}
                    <div className="w-full flex items-center gap-x-5">

                        <div className="w-11 h-11 rouded-xl bg-neutral-800/40 hover:bg-red-500 flex items-center justify-center cursor-pointer ease-in-out duration-500">
                        <FaInstagram className='w-5 h-5 text-neutral-50' />
                        </div>

                        <div className="w-11 h-11 rouded-xl bg-neutral-800/40 hover:bg-red-500 flex items-center justify-center cursor-pointer ease-in-out duration-500">
                        <FaFacebook className='w-5 h-5 text-neutral-50' />
                        </div>

                        <div className="w-11 h-11 rouded-xl bg-neutral-800/40 hover:bg-red-500 flex items-center justify-center cursor-pointer ease-in-out duration-500">
                        <FaYoutube className='w-5 h-5 text-neutral-50' />
                        </div>

                        <div className="w-11 h-11 rouded-xl bg-neutral-800/40 hover:bg-red-500 flex items-center justify-center cursor-pointer ease-in-out duration-500">
                        <FaTwitter className='w-5 h-5 text-neutral-50' />
                        </div>

                    </div>

                    
                </div>

                <div className="col-span-1 space-y-5">
                    <h1 className="text-lg text-neutral-100 font-semibold">
                        Quick Links
                    </h1>

                    <div className="space-y-2">
                        <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                            About Us
                        </Link>

                        <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                            My Account
                        </Link>

                        <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                            Reserve Your Ticket
                        </Link>

                        <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                            Create Your Account
                        </Link>
                    </div> 
                </div>

                <div className="col-span-1 space-y-5">
                <h1 className="text-lg text-neutral-100 font-semibold">
                       Top Reserved Routes
                    </h1>

                    <div className="space-y-2">
                        <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                            Amritsar - Delhi
                        </Link>

                        <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                            Chandigardh - Delhi
                        </Link>

                        <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                            Jammu - Punjab
                        </Link>

                        <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                            Nangal - Punjab
                        </Link>
                    </div> 
                </div>


                <div className="col-span-1 space-y-5">
                <h1 className="text-lg text-neutral-100 font-semibold">
                       Support Links
                    </h1>

                    <div className="space-y-2">
                        <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                            Privacy Policy
                        </Link>

                        <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                            Terms & Conditions
                        </Link>

                        <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                            Help & Support Center
                        </Link>

                        <Link to='/' className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                            FaQs
                        </Link>
                    </div> 
                </div>

            </div>
            

            {/* Seprator */}
            <div className="w-full h-px bg-neutral-800/50"/>

            {/* Copyright */}
            <div className="w-full flex items-center justify-between">
                <p className="text-sm text-neutral-600 font-normal">
                    Copyright &copy; 2025. All Rights Reserved.
                </p>

                <div className="flex items-center gap-x-2">
                    <div className="">
                        <img src={MasterCardImg} alt="" className="w-fit h-9 object-contain object-center" />
                    </div>

                    <div className="">
                        <img src={PaypalImg} alt="" className="w-fit h-9 object-contain object-center" />
                    </div>

                    <div className="">
                        <img src={CreditCardImg} alt="" className="w-fit h-9 object-contain object-center" />
                    </div>
                </div>
            </div>

        </RootLayout>
      
    </div>
  )
}

export default Footer
