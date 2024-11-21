import { useTranslation } from 'react-i18next';
import Logo from '/images/logo-nobg.png';
import { getLanguage } from '../helpers/i18n';

const Banner = () => {
    const { t } = useTranslation();
    const lang = getLanguage();
    const isRtl = lang === 'he';

    return (

        <div className="relative isolate min-h-screen flex flex-col">
            {/* Background Image */}
            <img
                src="/images/idf7.jpg"
                alt="IDF BANNER IMAGE"
                className="absolute inset-0 -z-10 w-full h-full object-cover bg-center opacity-80 banner-placeholder"
                loading="eager"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 -z-10 bg-black opacity-30"></div>

            {/* Main Content Container */}
            <div className="flex flex-col flex-grow">
                {/* Top 75% - Title Section */}
                <div className="flex-grow flex items-center justify-center mt-8">
                    <div className="text-center px-4">
                        <h1 className="text-4xl font-semibold text-primary lg:text-6xl md:text-5xl text-banner">
                            {t('pereh association')}
                        </h1>
                        <p className="text-lg py-3 md:text-2xl font-medium text-primary sm:text-xl/8 second_textBanner" dir="rtl">
                            {t(`supporting the Golan's first line defense - Pereh elite unit`)}
                        </p>
                    </div>
                </div>

                {/* Bottom 25% - Description and Logo */}
                <div className="h-2/5 lg:h-auto bg-accent-light bg-opacity-100 lg:bg-opacity-90 py-4 md:py-6 lg:py-8 mx-0 md:mx-0 lg:mx-28">
                    <div className="flex items-center max-w-6xl mx-auto h-full" dir={isRtl ? 'rtl' : 'ltr'}>
                        <div className="w-full lg:w-3/4 px-5">
                            <h2 className="text-gray-800 font-normal leading-relaxed text-md md:text-base lg:text-base">
                                {t('pereh Association works to provide financial, reputational, and operational support to the Pereh Unit, with the goal of strengthening its independence and enhancing its capabilities to protect the residents of the Golan Heights. With your donation, we can continue to strengthen the unit and ensure the safety of Golan residents. Join us and take part in protecting the Golan Heights and ensuring the security of its residents.')}
                            </h2>
                        </div>
                        <div className="w-1/4 hidden lg:block md:block pl-5">
                            <img
                                src={Logo}
                                alt="logo"
                                className="w-full h-auto max-h-24 object-contain"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div className="relative isolate min-h-screen flex flex-col">
        //     {/* Background Image */}
        //     <img
        //         src='/images/idf7.jpg'
        //         alt="IDF BANNER IMAGE"
        //         className="absolute inset-0 -z-10 w-full h-full object-cover bg-center opacity-80 banner-placeholder"
        //         loading="eager"
        //     />

        //     {/* Dark Overlay */}
        //     <div className="absolute inset-0 -z-10 bg-black opacity-30"></div>

        //     {/* Main Content Container */}
        //     <div className="flex flex-col flex-grow">
        //         {/* Top 75% - Title Section */}
        //         <div className="flex-grow flex items-center justify-center mt-8">
        //             <div className="text-center px-4">
        //                 <h1 className="text-4xl font-semibold text-primary lg:text-6xl md:text-5xl text-banner">
        //                     {t('pereh association')}
        //                 </h1>
        //                 <p className="text-lg py-3 md:text-2xl font-medium text-primary sm:text-xl/8 second_textBanner" dir="rtl">
        //                     {t(`supporting the Golan's first line defense - Pereh elite unit`)}
        //                 </p>
        //             </div>
        //         </div>

        //         {/* Bottom 25% - Description and Logo */}
        //         <div className="h-2/5 bg-accent-light bg-opacity-100 lg:bg-opacity-90 py-6 mx-0 md:mx-0 lg:mx-28">
        //             <div className="flex items-center max-w-6xl mx-auto h-full" dir={isRtl ? 'rtl' : 'ltr'}>

        //                 <div className="w-full lg:w-3/4 px-5">
        //                     <h2 className="text-gray-800 font-normal leading-relaxed text-md md:text-base lg:text-base">
        //                         {t('pereh Association works to provide financial, reputational, and operational support to the Pereh Unit, with the goal of strengthening its independence and enhancing its capabilities to protect the residents of the Golan Heights. With your donation, we can continue to strengthen the unit and ensure the safety of Golan residents. Join us and take part in protecting the Golan Heights and ensuring the security of its residents.')}
        //                     </h2>
        //                 </div>
        //                 <div className="w-1/4 hidden lg:block md:block pl-5">
        //                     <img
        //                         src={Logo}
        //                         alt="logo"
        //                         className="w-full h-auto max-h-24 object-contain"
        //                         loading="lazy"
        //                     />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Banner