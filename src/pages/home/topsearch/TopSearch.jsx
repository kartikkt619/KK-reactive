import React from 'react'
import RootLayout from '../../../layout/RootLayout'
import { motion } from 'framer-motion'
import TopSearchCard from '../../../components/topsearch/TopSearchCard'
import { Link } from 'react-router-dom'

const TopSearch = () => {
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
                Top Search <span className="text-red-500">Routes</span>
            </motion.h1>
        </div>

        {/* Top Search Tickets routes Card */}
        <div className="w-full grid grid-cols-3 gap-5">

            <Link to={"/bus-tickets/detail"}><TopSearchCard routeFrom={"Amritsar"} routeTo={"Delhi"} timeDuration={"8 Hrs"} price={"1500"}/></Link>
            <Link to={"/bus-tickets/detail"}><TopSearchCard routeFrom={"Amritsar"} routeTo={"Himachal"} timeDuration={"7 Hrs"} price={"1200"}/></Link>
            <Link to={"/bus-tickets/detail"}><TopSearchCard routeFrom={"Amritsar"} routeTo={"Chandigardh"} timeDuration={"6 Hrs"} price={"2000"}/></Link>
            <Link to={"/bus-tickets/detail"}><TopSearchCard routeFrom={"Chandigardh"} routeTo={"Delhi"} timeDuration={"4 Hrs"} price={"1000"}/></Link>
            <Link to={"/bus-tickets/detail"}><TopSearchCard routeFrom={"Jammu"} routeTo={"Jalandhar"} timeDuration={"10 Hrs"} price={"2200"}/></Link>
            <Link to={"/bus-tickets/detail"}><TopSearchCard routeFrom={"Nangal"} routeTo={"Ludhiana"} timeDuration={"9 Hrs"} price={"1800"}/></Link>
        </div>
      
    </RootLayout>
  )
}

export default TopSearch
