import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import emailjs from 'emailjs-com';
import { useTranslation } from "react-i18next";
import { getLanguage } from "../helpers/i18n";

const ContactForm = () => {

    const { t } = useTranslation();
    const lang = getLanguage();
    const isRtl = lang === 'he';

    const phoneNumber = '+972502299875';
    const whatsappNum = '972502299875';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message
            },
            import.meta.env.VITE_EMAILJS_USER_ID
        ).then((result) => {
            console.log(result.text);
            alert('Message sent successfully!');
        }, (error) => {
            console.log(error.text);
            alert('Failed to send message, please try again.');
        });
    }

    const handleWhatsApp = () => {
        window.open(`https://wa.me/${whatsappNum}`, '_blank');
    };

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };


    return (
        <div className="bg-white shadow-md rounded-lg max-w-md mx-auto p-8">
            <form className="space-y-6" onSubmit={handleSubmit} dir={isRtl ? 'rtl' : 'ltr'}>
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">{t('send us message')}</h2>

                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{t('full name')}</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t('enter your full name')}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t('email')}</label>
                        <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t("user@gmail.com")}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t('message')}</label>
                        <textarea
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={t('enter a message')}
                            required
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 resize-none"
                        ></textarea>
                    </div>
                </div>
                <div className="text-center w-full flex items-center justify-center space-x-3">
                    <button
                        type="submit"
                        className="bg-blue-600 w-1/2 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {t('send')}
                    </button>
                    <div className="flex items-center px-4">
                        <button
                            className="w-11 h-11 bg-green-500 text-white p-2 rounded-full shadow-2xl hover:bg-green-600 flex items-center justify-center relative"
                            onClick={handleWhatsApp}
                            aria-label="WhatsApp"
                            type="button"
                        >
                            <FaWhatsapp size={20} />
                        </button>
                        <button
                            className="w-11 h-11 px-1 bg-blue-500 text-white p-2 rounded-full shadow-2xl hover:bg-blue-600 flex items-center justify-center relative"
                            onClick={handleCall}
                            aria-label="Call"
                            type="button"
                        >
                            <IoCallOutline size={20} />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm