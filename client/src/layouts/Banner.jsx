// import { useTranslation } from 'react-i18next';
import { FaArrowDown } from "react-icons/fa";


const Banner = () => {
    // const { t } = useTranslation();


    return (
        <div className="relative isolate px-6 pt-12 lg:pt-12 md:pt-48 lg:px-8 min-h-screen">
            {/* Background Image */}
            <img
                src="./images/idf2.jpg"
                alt="idf image"
                className="absolute inset-0 -z-10 w-full h-full object-cover bg-center opacity-80 transition-opacity duration-700 ease-out"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 -z-10 bg-black opacity-50"></div>

            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                    <h1 className="text-5xl font-semibold  text-primary sm:text-7xl">
                        יחידת פרא
                        <br />
                        הקומנדו של הגולן
                    </h1>
                    <p className="mt-8 text-pretty text-lg md:text-2xl font-medium text-primary sm:text-xl/8 typewriter" dir="rtl">
                        עמותת פרא בהגנה על תושבי הגולן מול איומי הטרור
                    </p>
                    <div className="mt-32 flex items-center justify-center">
                        <div className="arrow bg-primary rounded-full cursor-pointer opacity-85">
                            <FaArrowDown size={20} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner