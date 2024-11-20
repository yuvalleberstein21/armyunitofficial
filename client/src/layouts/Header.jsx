import { useState } from "react"
import { useTranslation } from 'react-i18next';
import { AiOutlineBars } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import Logo from '/images/logo-nobg.png';


const navigation = [
    { name: 'who it start', href: '#NorthernSecurity' },
    { name: 'our mission', href: '#ourmissoin' },
    { name: 'elite pereh', href: '#AboutUs' },
    { name: 'pereh association', href: '#foundation' },
    { name: 'association activities', href: '#activities' },
]

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('he');

    const { t, i18n } = useTranslation();

    const switchLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setSelectedLanguage(lang)
    };

    return (
        <header className='fixed inset-x-0 top-0 z-50'>
            <nav className="flex items-center justify-between p-5 lg:p-2 lg:px-8 md:p-8 bg-white shadow-lg">
                <div className="flex lg:flex-1">
                    <a href="#home" className="-m-1.5 p-1.5">
                        <img src={Logo} alt="LOGO" className="px-3 w-24 md:w-32" />
                    </a>
                    {
                        selectedLanguage === 'he' ? (
                            <a href="#" className="-m-1.5 p-1.5 px-4 py-2 md:py-3 lg:py-4">
                                <span
                                    className="text-primary relative font-semibold text-lg lg:text-lg md:text-2xl bg-accent-light px-3 py-1"
                                    onClick={() => switchLanguage('en')}>ENG</span>
                            </a>
                        ) : (
                            <a href="#" className="-m-1.5 p-1.5 px-4 py-2 md:py-3 lg:py-4">
                                <span
                                    className="text-primary font-semibold text-lg lg:text-lg md:text-2xl bg-accent-light px-3 py-1"
                                    onClick={() => switchLanguage('he')}>עברית</span>
                            </a>
                        )
                    }
                </div>
                <div className="flex-1"></div>
                <div className="hidden lg:flex lg:justify-end">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="inline-flex items-center justify-center rounded-md p-2.5"
                    >
                        <span className="sr-only">Open main menu</span>
                        <div className="bg-accent-light text-primary flex justify-center items-center text-xl font-semibold gap-2 px-2 py-1">
                            <span>{t('menu')}</span>
                            <AiOutlineBars aria-hidden="true" className="h-6 w-6 md:h-8 md:w-8 lg:w-6 lg:h-6 text-primary" />
                        </div>
                    </button>
                </div>

                {/* Mobile menu button */}
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                >
                    <span className="sr-only">Open main menu</span>
                    <AiOutlineBars aria-hidden="true" className="h-8 w-8 lg:h-6 lg:w-6 md:h-8 md:w-8 text-accent-light" />
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setMobileMenuOpen(false)}
            >
                <div
                    className={`fixed inset-y-0 right-0 z-50 w-3/4 max-w-xs overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="flex items-center justify-between">
                        <a href="#home" className="-m-1.5 p-1.5">
                            <img src={Logo} alt="logo" className="w-28" />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <IoClose aria-hidden="true" className="h-8 w-8" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root" dir="rtl">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-lg md:text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {t(item.name)}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-lg md:text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    תרומות
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header