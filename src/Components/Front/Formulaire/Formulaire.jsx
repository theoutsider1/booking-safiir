import { useTranslation } from "react-i18next";
import TextInput from '../../TextInput';
// import { useTranslation } from 'react-i18next';


export const Formulaire = ({handleChangeForm, submitForm, newFormData})=> {
    const { t, i18n } = useTranslation();

   
    return(
        <div 
         className="w-full flex flex-col gap-2 shadow-lg rounded-md p-8 sm:justify-center text-sm sm:text-base">
            <div className="flex flex-col gap-2">
                <h5>{t('Full Name')} *</h5>
                <TextInput 
                    handleChangeForm={handleChangeForm} 
                    inputKey="firstName"
                    value={newFormData.firstName}/>
            </div>
            <div className="w-full flex flex-col sm:flex-row gap-2  ">
                {/* <div className="sm:w-1/2 flex flex-col"> */}
                    <div className="flex flex-col gap-2 sm:w-1/2 ">
                        <h5>{t('Email')} *</h5>
                        <TextInput
                            handleChangeForm={handleChangeForm}
                            inputKey="email"
                            value={newFormData.email}
                             />
                        <h5>{t('Email Confirmation')} *</h5>
                        <TextInput
                            handleChangeForm={handleChangeForm}
                            inputKey="emailConfirmation"
                            value={newFormData.emailConfirmation}
                             />
                    </div>   
                {/* </div> */}
                {/* <div className="sm:w-1/2 flex flex-col"> */}
                    <div className="flex flex-col gap-2 sm:w-1/2">
                        <h5>{t('Phone')} *</h5>
                        <TextInput 
                            handleChangeForm={handleChangeForm} 
                            inputKey="phone"
                            value={newFormData.phone}/>
                        <h5>{t('Phone Confirmation')} *</h5>
                        <TextInput 
                            handleChangeForm={handleChangeForm} 
                            inputKey="phoneConfimation"
                            value={newFormData.phoneConfimation}/>
                     </div>
                {/* </div> */}
                
            </div>
            <div className="flex flex-col gap-2">
                <h5>{t('Educational level')} *</h5>
                <TextInput 
                    handleChangeForm={handleChangeForm} 
                    inputKey="education"
                    value={newFormData.education}/>
            </div>
            
                
        </div>
    )
}
    