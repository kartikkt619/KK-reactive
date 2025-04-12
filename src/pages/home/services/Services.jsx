import React from 'react'
import RootLayout from '../../../layout/RootLayout'
import { motion } from 'framer-motion'
import ServiceCard from '../../../components/service/ServiceCard'
import { RiRefund2Line, RiSecurePaymentLine } from 'react-icons/ri'
import { PiHeadsetFill } from 'react-icons/pi'

const Services = () => {
  return (
    <RootLayout className="space-y-12">
        {/* Tag */}
        <div className="w full flex items-center justify-center text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -800 }} 
              animate={{ opacity: 1, y: 0 }}
              exit={{ opcity: 0, y: -800 }}
              transition={{ duration: 1, ease: "easeOut" }}
             className="text-3xl text-neutral-800 font-bold"
            >
                Our <span className="text-red-500">Services</span>
            </motion.h1>
        </div>

        {/* Services Card */}
        <div className="w-full grid grid-cols-3 gap-10">

            <ServiceCard icon={RiSecurePaymentLine} title={"Secure payment"} desc={"Intergrate secure payment gateways for users to pay for their tickets"} />
            <ServiceCard icon={RiRefund2Line} title={"Refund Policy"} desc={"Offer options for the users to purchase refundable tickets with clear terms"} />
            <ServiceCard icon={PiHeadsetFill} title={"24/7 Support"} desc={"Get assistance anytime through chat, email, or phone"} />
        </div>
      
    </RootLayout>
  )
}

export default Services
