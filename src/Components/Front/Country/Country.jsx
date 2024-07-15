import React, { useState } from 'react';
import CountryCard from './CountryCard';

function Country({ countries, handleNext, values , handleChange }) {
    const [selectedCountry, setSelectedCountry] = useState({});
    
    const onSelectCountry = (country) => {
        setSelectedCountry(country);
        handleChange('country',country); 
        handleNext()
        console.log('country from', country);
    }

    return (
        <div className="shadow-xl bg-[#f5f7fa] py-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mx-4">
                {countries.map((country, index) => (
                    <CountryCard 
                        key={index} 
                        country={country}
                        selected={selectedCountry?.id === country.id}
                        values = {values}
                        onSelectCountry={onSelectCountry}
                    />
                ))}
            </div>
        </div>
    );
}

export default Country;
