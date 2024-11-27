import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoClose } from "react-icons/io5";



const FloatingContactButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = '+972501234567';
    const email = 'pereh.org@gmail.com';
    const whatsappNum = '972502299875';


    const handleWhatsApp = () => {
        window.open(`https://wa.me/${whatsappNum}`, '_blank');
    };

    const handleEmail = () => {
        window.location.href = `mailto:${email}`;
    };

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };
    return (
        <div className="fixed bottom-2 left-2 z-50">
            {/* Additional Contact Options */}
            {isOpen && (
                <div className="absolute bottom-full mb-4 right-0 flex flex-col items-end space-y-3">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300 flex items-center justify-center"
                        aria-label="Close Contact Options"
                    >
                        <IoClose size={18} />
                    </button>
                    {/* Email Button */}
                    <button
                        onClick={handleEmail}
                        className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 flex items-center justify-center"
                        aria-label="Send Email"
                    >
                        <CiMail size={24} />
                    </button>

                    {/* Call Button */}
                    <button
                        onClick={handleCall}
                        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
                        aria-label="Make a Call"
                    >
                        <IoCallOutline size={24} />
                    </button>
                </div>
            )}

            {/* Main WhatsApp Button */}
            <button
                onClick={() => {
                    isOpen ? handleWhatsApp() : setIsOpen(!isOpen);
                }}
                onBlur={() => setTimeout(() => setIsOpen(false), 200)}
                className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 flex items-center justify-center relative"
                aria-label="Contact Options"
            >
                <FaWhatsapp size={32} />
                {isOpen && (
                    <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
                )}
            </button>
        </div>
    )
}

export default FloatingContactButton