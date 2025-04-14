import React from 'react'
import TopLayout from '../../../layout/toppage/TopLayout'
import RootLayout from '../../../layout/RootLayout'
import { Link } from 'react-router-dom'
import WarningAlert from '../../../components/alertmessage/WarningAlert'
import BusSeat from './seat/busseat/BusSeat'

const Detail = () => {
    
    // show the warning message box
    const message =(
        <>
        One individual only can book 10 seats. If you want to book more than 10 seats, Please <Link to={"/support-team"} className='text-yellow-700 font-medium '>Contact our support team.</Link>
        </>
    );

  
    return (
    <div className='w-full space-y-12 pb-16'>
    {/* Top layout */}
    <TopLayout
        bgImg={"https://cdn.pixabay.com/photo/2020/09/21/11/41/bus-5589826_1280.jpg"}
        title={"Bus Details"}
    />

    <RootLayout className="space-y-12 w-fit pb-16">

      {/* Seat layout and Selection action detail */}
      <div className="w-full space-y-8">
        
        {/* Warning message */}
        <WarningAlert message={message} />

        {/* seat layout */}
        <BusSeat />

      </div>
      
      {/* Bus Detail */}
      <div className="w-full flex items-center justify-center flex-col gap-8 text-center"></div>

    </RootLayout>
      
    </div>
  )
}

export default Detail
