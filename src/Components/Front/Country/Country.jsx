import React, { useState, useEffect } from 'react';
import CountryCard from './CountryCard';
import axios from 'axios';
function Country({  handleNext, values , handleChange }) {
    const [selectedCountry, setSelectedCountry] = useState({});
    const [countries, setCountries] = useState([])
    const onSelectCountry = (country) => {
        setSelectedCountry(country);
        handleChange('country',country); 
        handleNext()
    }

    useEffect(() => {
        const getCountries = async () => {
            const response = await axios.get(`http://localhost:8000/api/countries`);
            console.log(response.data);
            setCountries(response.data);
        }

        getCountries();
    }, [])

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
