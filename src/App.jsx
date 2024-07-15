import React, { useRef, useState, useEffect } from 'react';
import Footer from './Components/Front/Footer';
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import './style/Home.css';
import Country from './Components/Front/Country/Country';
import Calendar from './Components/Front/Calendar/Calendar';
import { Formulaire } from './Components/Front/Formulaire/Formulaire';
import { useTranslation } from 'react-i18next';
import Header from "./Components/Front/Header";
import turkeyImage from '/src/assets/logo-circle.png';
import saudiImage from '/src/assets/logo-circle.png';
import egyptImage from '/src/assets/logo-circle.png';
import jordanImage from '/src/assets/logo-circle.png';

export const countries = [
    {
        id: 1,
        name: "Turkey",
        flag: turkeyImage
    },
    {
        id: 2,
        name: "Saudi Arabia",
        flag: saudiImage
    },
    {
        id: 3,
        name: "Egypt",
        flag: egyptImage
    },
    {
        id: 4,
        name: "Jordan",
        flag: jordanImage
    }
];

function App() {
    const stepperRef = useRef(null);
    const { t, i18n } = useTranslation();

    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const [formData, setFormData] = useState({
        country: {} ,
        date: '',
        time: '',
        userDetails:{
            firstName: '',
            email: '',
            emailConfirmation:'',
            phone: '',
            phoneConfimation: "",
            education: '',
        },
      });
      const [newFormData , setNewFormData] = useState({
            firstName: '',
            email: '',
            emailConfirmation:'',
            phone: '',
            phoneConfimation: "",
            education: '',
       
    })
      // Handle input change for different fields
      const handleChange = (field, value) => {
        setFormData((prevState) => ({
            ...prevState,
                [field]: value,
           
        }));
    };
      const handleChangeForm = (field, value) => {
        setNewFormData((prevState) => ({
            ...prevState,
                [field]: value,
           
        }));
    };
      // Submit form (step 3)
   
    const submitForm = ()=>{
        setFormData((prev) => {
            const updatedFormData = {
              ...prev,
              userDetails: { ...newFormData },
            };
            console.log('Form submitted:', updatedFormData);
            return updatedFormData;
          });
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        submitForm()
    }
    //   const handleNestedChange = (input) => (e) => {
    //     setFormData({ ...formData, formDetails: { ...formData.formDetails, [input]: e.target.value } });
    //   };
      
    const handleNext = () => {
        if (stepperRef.current) {
            stepperRef.current.nextCallback();
            // setActiveIndex(prevIndex => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (stepperRef.current) {
            stepperRef.current.prevCallback();
            // setActiveIndex(prevIndex => prevIndex - 1);
        }
    };

    const handleSelect = (e) => {
        setActiveIndex(e.index);
    };
  

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='font-roboto'>
            <div className='max-w-6xl mx-auto'>
                <Header/>
                
               <main className='min-h-96 pb-32'>
                     <h1 className='text-center text-md sm:text-4xl font-semibold mt-8'>
                            {t('Click on the country you are interested in studying in')}
                            <br />
                            {t('And choose the date')}
                    </h1>
                    
                    <div className="card">
                        <Stepper
                                ref={stepperRef}
                                activeIndex={activeIndex}
                                style={{ flexBasis: '50rem' }}
                                onSelect={handleSelect}
                                onChangeStep={(e) => setActiveIndex(e.index)}
                            >

                                <StepperPanel header={!isMobile || activeIndex === 0 ? t('Choosing a country') : ""}>
                                    <div className="flex flex-col">
                                        <Country 
                                             countries={countries} 
                                            handleNext={handleNext} 
                                            values={formData}
                                            handleChange={handleChange}/>
                                    </div>
                                    {/* <div className="flex rtl:flex-row-reverse py-4">
                                        <button
                                            onClick={handleNext}
                                            className='flex items-center space-x-4 rtl:space-x-reverse bg-[#0D2252] hover:bg-[#4b4b4b] text-white text-lg font-semibold px-4 py-2'>
                                            <span>{t('Next step')}</span>
                                        </button>
                                    </div> */}
                                </StepperPanel>

                                {/* stepper 2  */}

                                <StepperPanel header={!isMobile || activeIndex === 1 ? t('Choose a date') : ""}>
                                <div className="flex flex-col">
                                        <Calendar handleChange={handleChange} handleNext={handleNext}/>
                                    </div>
                                    <div className="flex py-4 gap-2 flex-row-reverse justify-end">
                                        {/* <button
                                            onClick={handleNext}
                                            className='flex items-center space-x-4 rtl:space-x-reverse bg-[#0D2252] hover:bg-[#4b4b4b] text-white text-lg font-semibold px-4 py-2'>
                                            <span>{t('Next step')}</span>
                                        </button> */}
                                        <button
                                            onClick={handlePrev}
                                            className='flex items-center space-x-4 rtl:space-x-reverse bg-[#DA0037] hover:bg-[#4b4b4b] text-white text-lg font-semibold px-4 py-2'>
                                            <span>{t('Back')}</span>
                                        </button>
                                    </div>
                                </StepperPanel>

                                {/* stepper 3  */}

                                <StepperPanel header={!isMobile || activeIndex === 2 ? t('Contact information') : ""}>
                                    <form onSubmit={handleSubmit}>
                                    <div className="sm: sm:mx-12  flex h-12rem">
                                        <div className="border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                                            
                                            <Formulaire handleChangeForm={handleChangeForm} submitForm ={submitForm} newFormData={newFormData}/>
                                        </div>
                                    </div>
                                    <div className="sm:mx-12  flex py-4 gap-2 flex-row-reverse justify-between bg-">
                                        <button type="submit" className='flex items-center space-x-4 rtl:space-x-reverse bg-[#0D2252] hover:bg-[#4b4b4b] text-white text-lg font-semibold px-4 py-2' >
                                        <span> {t('Confirm Booking')} </span>
                                        </button>

                                        <button
                                             onClick={handlePrev}
                                            className='flex items-center space-x-4 rtl:space-x-reverse bg-[#DA0037] hover:bg-[#4b4b4b] text-white text-lg font-semibold px-4 py-2'>
                                            <span>{t('Back')}</span>
                                        </button>
                                    </div>    
                                    </form>
                                    
                                </StepperPanel>
                        
                        </Stepper>
                    </div>
               </main>
            </div>
            <Footer />
        </div>
    );
}

  


export default App
