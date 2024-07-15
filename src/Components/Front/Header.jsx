import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logoAr from "../../assets/safiit_ar.png";
import logoEn from "../../assets/safiir_en.png";
import enFlag from "../../assets/en.png";
import arFlag from "../../assets/ar.png"
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/saga-blue/theme.css';  // Import PrimeReact theme
import 'primereact/resources/primereact.min.css';           // Import PrimeReact CSS
import 'primeicons/primeicons.css';                         // Import PrimeIcons CSS
// import '@/style/sidebar.css';                               // Import Custom Sidebar CSS
import "../../style/sidebar.css"

export default function Header () {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const list = [
        {
            label: t('Home'),
            path: '',
        },
        {
            label: t('Blog'),
            path: '',
        },
        {
            label: t('Contact us'),
            path: '',
        },
    ];

    const languages = [
        { label: 'English', value: 'en', flag: enFlag },
        { label: 'العربية', value: 'ar', flag:  arFlag},
    ];

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.value);
    };

    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

    const selectedLanguageTemplate = (option) => {
        if (option) {
            return (
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <img
                        alt={option.label}
                        src={option.flag}
                        className='h-fit'
                    />
                    <span>{option.label}</span>
                </div>
            );
        }
        return <span>{t('Select Language')}</span>;
    };

    const languageOptionTemplate = (option) => {
        return (
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <img
                    alt={option.label}
                    src={option.flag}
                    className='h-full'
                />
                <span>{option.label}</span>
            </div>
        );
    };

    return (
        <div className='flex  py-4 items-center justify-between w-full px-8'>
            {i18n.dir() === 'rtl' ? (
                <img 
                    src={logoAr} alt="logo"
                    className='h-16'
                />
            ) : (
                <img 
                    src={logoEn} alt="logo"
                    className='h-16'
                />
            )}
            <div className='block lg:hidden'>
                <button
                    className="flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div
                        className={`${genericHamburgerLine} ${
                            isOpen ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"
                        }`}
                    />
                    <div
                        className={`${genericHamburgerLine} ${
                            isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                        }`}
                    />
                    <div
                        className={`${genericHamburgerLine} ${
                            isOpen ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"
                        }`}
                    />
                </button>
            </div>
            <div className={`hidden lg:flex justify-center w-full space-x-20 ${i18n.dir() === 'rtl' ? 'rtl:space-x-reverse' : ''}`}>
                {list.map((item, index) => (
                    <div key={index} className='mr-4 flex items-center font-bold'>
                        <a href={item.path} className='hover:text-[#DA0037]'>
                            {item.label}
                        </a>
                    </div>
                ))}
                <div className='mr-4 flex items-center font-bold'>
                    <Dropdown 
                        value={i18n.language}
                        options={languages}
                        onChange={changeLanguage}
                        placeholder={t('Select Language')}
                        valueTemplate={selectedLanguageTemplate}
                        itemTemplate={languageOptionTemplate}
                    />
                </div>
            </div>
            <div
                id='sidebar'
                className={`custom-sidebar px-4 ${isOpen ? 'open' : ''} ${i18n.dir() === 'rtl' ? 'custom-sidebar-rtl' : 'custom-sidebar-ltr'}`}
            >
                <div className=' w-full flex justify-center pt-4'>
                    {i18n.dir() === 'rtl' ? (
                        <img 
                            src={logoAr} alt="logo"
                            className='h-16'
                        />
                    ) : (
                        <img 
                            src={logoEn} alt="logo"
                            className='h-16'
                        />
                    )}
                </div>
                <div className='flex flex-col mt-10'>
                    {list.map((item, index) => (
                        <div key={index} className='text-black font-semibold text-lg border-b pb-4 mt-4 px-4'>
                            <a href={item.path} className='hover:text-[#DA0037]' onClick={() => setIsOpen(false)}>
                                {item.label}
                            </a>
                        </div>
                    ))}
                    <div className='my-4 text-black font-bold text-xl'>
                        <Dropdown 
                            value={i18n.language}
                            options={languages}
                            onChange={changeLanguage}
                            placeholder={t('Select Language')}
                            valueTemplate={selectedLanguageTemplate}
                            itemTemplate={languageOptionTemplate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

