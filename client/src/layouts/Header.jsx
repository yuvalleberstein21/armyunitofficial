import { useEffect, useState } from "react"
import { AiOutlineBars } from "react-icons/ai";
import { IoClose } from "react-icons/io5";


const navigation = [
    { name: 'התורמים שלנו', href: '#' },
    { name: 'על היחידה', href: '#' },
    { name: 'תרומות', href: '#' },
    { name: 'מהות היחידה', href: '#' },
]

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            console.log("ScrollY:", window.scrollY);
            if (window.scrollY > 50) {

                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        console.log("Adding scroll event listener");
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);



    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-zinc-300' : 'bg-transparent'}`}
        >
            <nav className="flex items-center justify-between p-5 lg:p-2 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="text-primary font-semibold text-xl bg-accent-light px-6 py-1">תרומות</span>
                    </a>
                    <a href="#" className="-m-1.5 p-1.5 px-4">
                        <span className="text-primary font-semibold text-xl bg-accent-light px-3 py-1">ENG</span>
                    </a>
                </div>

                {/* Empty div to take up space and push the icon button to the right */}
                <div className="flex-1"></div>

                {/* Move the icon button to the right */}
                <div className="hidden lg:flex lg:justify-end">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="inline-flex items-center justify-center rounded-md p-2.5"
                    >
                        <span className="sr-only">Open main menu</span>
                        <div className="bg-accent-light text-primary flex justify-center items-center text-xl font-semibold gap-2 px-2 py-1">
                            <span>תפריט</span>
                            <AiOutlineBars aria-hidden="true" className="h-6 w-6 text-primary" />
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
                    <AiOutlineBars aria-hidden="true" className="h-8 w-8 lg:h-6 lg:w-6 text-emerald-600" />
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
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="text-xl">ARMY.IL</span>
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
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
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