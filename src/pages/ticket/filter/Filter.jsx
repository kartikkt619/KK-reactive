import React from 'react'
import PriceRangeSlider from '../../../components/pricerange/PriceRangeSlider';

const Filter = ({ className }) => {

    const [rangeValues, setRangeValues] = React.useState({
        min: 0,
        max: 100
    });

    const handleRangeChange = (values) => {
        setRangeValues({ values });
        
    };
    
  return (
    <div className={` w-full ${className}`}>

        <h1 className="text-xl text-neutral-700 font-semibold">
            Apply Filters
        </h1>

        {/* Price Filter */}
        <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-1">
        <h1 className="text-lg text-neutral-600 font-medium">
            Apply Filters
        </h1>

        <PriceRangeSlider
            min={1000}
            max={3000}
            onChange={handleRangeChange}

        />

        </div>

        {/* Bus Types Filter */}
        <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
        <h1 className="text-lg text-neutral-600 font-medium">
            Bus Types
        </h1>


            <div className="space-y-2.5">
                <div className="w-full flex items-center gap-2">
                    <input type="checkbox" id="ac" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                    <label htmlFor="ac" className="text-sm text-neutral-600 font-normal cursor-pointer">
                        AC Delexe <span className="text-xs text-neutral-600">(10)</span>
                    </label>
                </div>

                <div className="w-full flex items-center gap-2">
                    <input type="checkbox" id="tourist" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                    <label htmlFor="tourist" className="text-sm text-neutral-600 font-normal cursor-pointer">
                        Tourist AC Delexe <span className="text-xs text-neutral-600">(8)</span>
                    </label>
                </div>

                <div className="w-full flex items-center gap-2">
                    <input type="checkbox" id="susp" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                    <label htmlFor="susp" className="text-sm text-neutral-600 font-normal cursor-pointer">
                        Air Suspension <span className="text-xs text-neutral-600">(12)</span>
                    </label>
                </div>

                <div className="w-full flex items-center gap-2">
                    <input type="checkbox" id="lux" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                    <label htmlFor="lux" className="text-sm text-neutral-600 font-normal cursor-pointer">
                        Luxury AC Delexe <span className="text-xs text-neutral-600">(15)</span>
                    </label>
                </div>
            </div>
        </div>

         {/* Bus Companies */}
         <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
        <h1 className="text-lg text-neutral-600 font-medium">
            Bus Companies
        </h1>


            <div className="space-y-2.5">
                <div className="w-full flex items-center gap-2">
                    <input type="checkbox" id="volvo" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                    <label htmlFor="volvo" className="text-sm text-neutral-600 font-normal cursor-pointer">
                    Volvo <span className="text-xs text-neutral-600">(10)</span>
                    </label>
                </div>

                <div className="w-full flex items-center gap-2">
                    <input type="checkbox" id="eicher" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                    <label htmlFor="eicher" className="text-sm text-neutral-600 font-normal cursor-pointer">
                    Eicher Motors <span className="text-xs text-neutral-600">(8)</span>
                    </label>
                </div>

                <div className="w-full flex items-center gap-2">
                    <input type="checkbox" id="mahindra" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                    <label htmlFor="mahindra" className="text-sm text-neutral-600 font-normal cursor-pointer">
                    Mahindra & Mahindra <span className="text-xs text-neutral-600">(12)</span>
                    </label>
                </div>

                <div className="w-full flex items-center gap-2">
                    <input type="checkbox" id="tata" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                    <label htmlFor="tata" className="text-sm text-neutral-600 font-normal cursor-pointer">
                    Tata <span className="text-xs text-neutral-600">(15)</span>
                    </label>
                </div>
            </div>
        </div>

        {/* Amenities Filter */}
        <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
        <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
        <h1 className="text-lg text-neutral-600 font-medium">
            Bus Amenities
        </h1>


            <div className="space-y-2.5">
                <div className="w-full flex items-center gap-2">
                    <input type="checkbox" id="wifi" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                    <label htmlFor="wifi" className="text-sm text-neutral-600 font-normal cursor-pointer">
                        Internet/wifi 
                    </label>
                </div>

                <div className="w-full flex items-center gap-2">
                    <input type="checkbox" id="acandair" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                    <label htmlFor="acandair" className="text-sm text-neutral-600 font-normal cursor-pointer">
                        AC&Air Suspension 
                    </label>
                </div>

                <div className="w-full flex items-center gap-2">
                    <input type="checkbox" id="water" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                    <label htmlFor="water" className="text-sm text-neutral-600 font-normal cursor-pointer">
                        Water Bottles 
                    </label>
                </div>

                <div className="w-full flex items-center gap-2">
                    <input type="checkbox" id="tv" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                    <label htmlFor="tv" className="text-sm text-neutral-600 font-normal cursor-pointer">
                        LED TV 
                    </label>
                </div>
            </div>
        </div>
            </div>

      
    </div>
  )
}

export default Filter
