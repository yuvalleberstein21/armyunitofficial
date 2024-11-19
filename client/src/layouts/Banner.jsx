import { useTranslation } from 'react-i18next';
import Logo from '/images/logo-nobg.png';
import ImageBanner from '/images/idf7.webp';

const Banner = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="relative isolate min-h-screen">
                {/* Background Image */}
                <img
                    src={ImageBanner}
                    alt="idf image"
                    className="absolute inset-0 -z-10 w-full h-full object-cover bg-center opacity-80 "
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 -z-10 bg-black opacity-30"></div>

                {/* Title and Description at the bottom */}
                <div className="absolute inset-x-0 bottom-0 z-10 bg-accent-light opacity-100 lg:opacity-90 mx-0 py-2 lg:mx-16 md:mx-16 lg:py-5 md:py-5 homePageBottom">
                    <div className="w-full flex items-center">
                        <div className="w-full px-8 lg:w-3/4 md:w-4/5" dir="rtl">
                            <h1 className="text-3xl lg:text-5xl md:text-5xl font-bold text-gray-800 py-5">{t('pereh association')}</h1>
                            <h2 dir="rtl"
                                className="text-gray-800 pb-5 font-normal leading-relaxed text-base lg:text-base max-w-2xl md:text-lg md:max-w-2xl lg:max-w-xl lg:text-justify md:text-justify homePageBottomText">
                                עמותת פרא פועלת לתמיכה כלכלית, תדמיתית ומבצעית ביחידת פרא, במטרה לחזק את עצמאותה ולשפר את יכולותיה להגן על תושבי רמת הגולן. בזכות התרומה שלכם, נוכל להמשיך ולחזק את היחידה ולהבטיח את בטחון תושבי הגולן. הצטרפו אלינו, וקחו חלק בהגנה על תושבי רמת הגולן ובשמירה על ביטחון תושביו.
                            </h2>
                        </div>
                        <div className="w-1/5 hidden lg:block md:block">
                            <img src={Logo} alt="logo" className="w-full h-auto max-h-36 object-contain" />
                        </div>
                    </div>
                </div>

                {/* Title Section */}
                <div className="mx-auto max-w-2xl py-20 lg:py-40 md:py-36">
                    <div className="text-center py-24">
                        <h1 className="text-5xl font-semibold text-primary sm:text-7xl text-banner">
                            {t('elite pereh')}
                            <br />
                            {t('commando unit')}
                        </h1>
                        <p className="mt-8 text-pretty text-lg md:text-2xl font-medium text-primary sm:text-xl/8 typewriter second_textBanner" dir="rtl">
                            {t(`the golan's first line of defense`)}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner