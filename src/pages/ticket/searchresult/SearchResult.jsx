import React from 'react'
import TicketCard from '../../../components/ticket/TicketCard'
import { FaBus } from 'react-icons/fa6'
import { GrRefresh } from 'react-icons/gr';


const SearchResult = () => {
  return (
    <div className='w-full col-span-3 space-y-10 pt-11'>

        <div className="space-y-6">
            <TicketCard icon={FaBus} busName={"Volvo"} routeFrom={"Amritsar"} routeTo={"Delhi"} arrivalTime={"06:00 AM"} departureTime={"02:00 PM"} price={"1500"} avaliableSeats={"6"}/>
            <TicketCard icon={FaBus} busName={"Eicher Motors"} routeFrom={"Amritsar"} routeTo={"Himachal"} arrivalTime={"09:00 AM"} departureTime={"4:00 PM"} price={"1200"} avaliableSeats={"8"}/>
            <TicketCard icon={FaBus} busName={"Mahindra & Mahindra"} routeFrom={"Amritsar"} routeTo={"Chandigardh"} arrivalTime={"10:00 AM"} departureTime={"4:00 PM"} price={"2000"} avaliableSeats={"5"}/>
            <TicketCard icon={FaBus} busName={"Volvo"} routeFrom={"Chandigardh"} routeTo={"Delhi"} arrivalTime={"01:00 PM"} departureTime={"05:00 PM"} price={"1000"} avaliableSeats={"4"}/>
            <TicketCard icon={FaBus} busName={"Tata"} routeFrom={"Jammu"} routeTo={"Jalandhar"} arrivalTime={"08:00 AM"} departureTime={"06:00 PM"} price={"2200"} avaliableSeats={"5"}/>
            <TicketCard icon={FaBus} busName={"Eicher Motors"} routeFrom={"Nangal"} routeTo={"Ludhiana"} arrivalTime={"06:00 PM"} departureTime={"04:00 AM"} price={"1800"} avaliableSeats={"4"}/>
            <TicketCard icon={FaBus} busName={"Volvo"} routeFrom={"Amritsar"} routeTo={"Pathankot"} arrivalTime={"01:00 PM"} departureTime={"03:00 PM"} price={"1100"} avaliableSeats={"3"}/>
            <TicketCard icon={FaBus} busName={"Tata"} routeFrom={"Amritsar"} routeTo={"Bathinda"} arrivalTime={"03:00 PM"} departureTime={"08:00 PM"} price={"1200"} avaliableSeats={"4"}/>
        </div>

        <div className="w-full flex items-center justify-center">
            <button  className="w-fit px-8 py-3 bg-red-500 hover:bg-transparent border-2 border-red-500 hover:border-red-500 rounded-xl text-base font-normal text-neutral-50 flex items-center justify-center gap-x-2 hover:text-red-500 ease-in-out duration-300">      
                <GrRefresh />
                Load More
         </button>
        </div>
      
    </div>
  )
}

export default SearchResult
