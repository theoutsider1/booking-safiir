import React from 'react'

function CountryCard({ country, onSelectCountry, selected }) {

  const handleClick = () => {
    onSelectCountry(country); 
  };

  return (
    <div className={`w-full p-4 bg-white rounded-xl shadow-md cursor-pointer ${selected ? "border-2 border-blue-500" : ""}`} 
         onClick={handleClick}>
          {/* onSelectCountry(country)> */}
      <div className="flex flex-col items-center">
        <img 
          src={country.flag} 
          alt={`${country.name} flg w-full`}
          className="w-[120px] rounded-full mb-4" 
        />
        <div className="text-center text-black text-xl font-bold font-tajawal">
          {country.name}
        </div>
      </div>
    </div>
  )
}

export default CountryCard
