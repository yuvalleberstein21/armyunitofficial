import { useTranslation } from 'react-i18next';
import Logo from '/images/logo-nobg.png';
import ImageBanner from '/images/idf7.webp';
import { getLanguage } from '../helpers/i18n';

const Banner = () => {
    const { t } = useTranslation();
    const lang = getLanguage();
    const isRtl = lang === 'he';

    return (
        <div className="relative isolate min-h-screen flex flex-col">
            {/* Background Image */}
            <img
                src={ImageBanner}
                alt="idf image"
                className="absolute inset-0 -z-10 w-full h-full object-cover bg-center opacity-80"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 -z-10 bg-black opacity-30"></div>

            {/* Main Content Container */}
            <div className="flex flex-col flex-grow">
                {/* Top 75% - Title Section */}
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-4xl font-semibold text-primary sm:text-5xl text-banner">
                            {t('pereh association')}
                        </h1>
                        <p className="text-md py-3 md:text-2xl font-medium text-primary sm:text-xl/8 second_textBanner" dir="rtl">
                            {t(`supporting the Golan's first line defense - Pereh elite unit`)}
                        </p>
                    </div>
                </div>

                {/* Bottom 25% - Description and Logo */}
                <div className="h-1/4 bg-accent-light bg-opacity-100 lg:bg-opacity-90 py-4 px-4 lg:px-36">
                    <div className="flex items-center max-w-6xl mx-auto h-full" dir={isRtl ? 'rtl' : 'ltr'}>
                        <div className="w-full lg:w-3/4 px-5">
                            <h2 className="text-gray-800 font-normal leading-relaxed text-sm md:text-base lg:text-base">
                                {t('pereh Association works to provide financial, reputational, and operational support to the Pereh Unit, with the goal of strengthening its independence and enhancing its capabilities to protect the residents of the Golan Heights. With your donation, we can continue to strengthen the unit and ensure the safety of Golan residents. Join us and take part in protecting the Golan Heights and ensuring the security of its residents.')}
                            </h2>
                        </div>
                        <div className="w-1/4 hidden lg:block md:block pl-5">
                            <img
                                src={Logo}
                                alt="logo"
                                className="w-full h-auto max-h-24 object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <>
        //     <div className="relative isolate min-h-screen">
        //         {/* Background Image */}
        //         <img
        //             src={ImageBanner}
        //             alt="idf image"
        //             className="absolute inset-0 -z-10 w-full h-full object-cover bg-center opacity-80 "
        //         />

        //         {/* Dark Overlay */}
        //         <div className="absolute inset-0 -z-10 bg-black opacity-30"></div>

        //         {/* Title and Description at the bottom */}
        //         <div className="absolute inset-x-0 bottom-0 z-10 bg-accent-light opacity-100 lg:opacity-90 lg:px-36 mt-10 lg:py-5 md:py-5 homePageBottom">
        //             <div className="w-full flex items-center" dir={isRtl ? 'rtl' : 'ltr'}>
        //                 <div className="w-full lg:w-3/4 md:w-4/5 px-5 py-3">
        //                     <h2
        //                         className="text-gray-800 pb-2 font-normal leading-relaxed text-base lg:text-base max-w-2xl md:text-lg md:max-w-2xl lg:max-w-xl  md:text-justify homePageBottomText">
        //                         {t('pereh Association works to provide financial, reputational, and operational support to the Pereh Unit, with the goal of strengthening its independence and enhancing its capabilities to protect the residents of the Golan Heights. With your donation, we can continue to strengthen the unit and ensure the safety of Golan residents. Join us and take part in protecting the Golan Heights and ensuring the security of its residents.')}
        //                     </h2>
        //                 </div>
        //                 <div className="w-1/5 hidden lg:block md:block">
        //                     <img src={Logo} alt="logo" className="w-full h-auto max-h-36 object-contain" />
        //                 </div>
        //             </div>
        //         </div>

        //         {/* Title Section */}
        //         <div className="mx-auto max-w-2xl py-20 lg:py-40 md:py-36 container-banner">
        //             <div className="text-center py-24">
        //                 <h1 className="text-5xl font-semibold text-primary sm:text-7xl text-banner">
        //                     {t('pereh association')}
        //                     <br />
        //                 </h1>
        //                 <p className="mt-5 px-3 text-pretty text-lg md:text-2xl font-medium text-primary sm:text-xl/8 second_textBanner" dir="rtl">
        //                     {t(`supporting the Golan's first line defense - Pereh elite unit`)}
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // </>
    )
}

export default Banner