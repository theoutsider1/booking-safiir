import { useTranslation } from "react-i18next";
import TextInput from '../../TextInput';
import axios from "axios";
import { useEffect, useState } from "react";

export const Formulaire = ({ handleChangeForm, submitForm, newFormData }) => {
    const { t, i18n } = useTranslation();
    const [studies, setStudies] = useState([]);

    useEffect(() => {
        const getStudies = async () => {
            const response = await axios.get(`http://127.0.0.1:8000/api/student-levels`);
            console.log(response.data);
            setStudies(response.data);
        }
        getStudies();
    }, []);

    return (
        <div className="w-full flex flex-col gap-2 shadow-lg rounded-md p-8 sm:justify-center text-sm sm:text-base">
            <div className="flex flex-col gap-2">
                <h5>{t('Full Name')} *</h5>
                <TextInput
                    handleChangeForm={handleChangeForm}
                    inputKey="firstName"
                    value={newFormData.firstName} />
            </div>
            <div className="w-full flex flex-col sm:flex-row gap-2">
                <div className="flex flex-col gap-2 sm:w-1/2">
                    <h5>{t('Email')} *</h5>
                    <TextInput
                        handleChangeForm={handleChangeForm}
                        inputKey="email"
                        value={newFormData.email} />
                    <h5>{t('Email Confirmation')} *</h5>
                    <TextInput
                        handleChangeForm={handleChangeForm}
                        inputKey="emailConfirmation"
                        value={newFormData.emailConfirmation} />
                </div>
                <div className="flex flex-col gap-2 sm:w-1/2">
                    <h5>{t('Phone')} *</h5>
                    <TextInput
                        handleChangeForm={handleChangeForm}
                        inputKey="phone"
                        value={newFormData.phone} />
                    <h5>{t('Phone Confirmation')} *</h5>
                    <TextInput
                        handleChangeForm={handleChangeForm}
                        inputKey="phoneConfimation"
                        value={newFormData.phoneConfimation} />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h5>{t('Educational level')} *</h5>
                <select
                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                    onChange={(e) => handleChangeForm('education', e.target.value)}
                    value={newFormData.education}
                >
                    <option value="">{t('Educational level')}</option>
                    {studies?.map((study) => (
                        <option key={study.id} value={study.id}>{study.ar_label}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
