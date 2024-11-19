import { useTranslation } from "react-i18next";
import SectionTitle from "../components/SectionTitle"
import { getLanguage } from "../helpers/i18n";


const AboutUs = () => {
    const { t } = useTranslation();
    const lang = getLanguage();
    const isRtl = lang === 'he';

    return (
        <div className={"container mx-auto p-5"} dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="aboutus_title">
                <SectionTitle title={t('meet the pereh unit')} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

                {/* <!-- First Section --> */}

                <div className="order-2 lg:order-1 p-2 py-8 lg:py-0 md:py-0">
                    <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-accent-light mb-4">{t('who we are')}</h2>
                    <p className="text-gray-700 text-lg font-light leading-relaxed">
                        {t('composed of Golan Heights locals with significant combat backgrounds, including veterans of Israel’s most elite units, Pereh’s fighters possess deep knowledge of the terrain, the region’s characteristics, and local culture. Pereh’s warriors were selected based on their relevant experience, independent thinking, proactivity, and profound dedication to their home, community, and the Golan as a whole.')}
                    </p>
                </div>

                <div className="order-1 lg:order-2 flex justify-center items-center p-2 lg:p-10 md:p-10">
                    <div className="bg-gradient-to-br from-gray-400 to-accent-dark rounded-lg p-4 transform rotate-2 hover:rotate-0 transition-transform duration-300 shadow-lg">
                        <img src="../images/idf2.webp" alt="Unit Image" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>

                {/* <!-- Second Section --> */}
                <div className="order-4 lg:order-3 p-2 py-8 lg:py-0 md:py-0 ">
                    <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-accent-light mb-4">{t('leading the fighting force in the golan heights')}</h2>
                    <p className="text-gray-700 text-lg font-light leading-relaxed">
                        {t('the unit possesses the ability to coordinate and collaborate with all relevant entities in the area – other IDF units, brigades, divisions, as well as local councils, communities, and emergency response teams. The coordinated response between various forces significantly enhances the security of Golan residents and ensures a high level of readiness for all operating forces.')}
                    </p>
                </div>

                <div className="order-3 lg:order-4 flex justify-center items-center p-2 lg:p-10 md:p-10">
                    <div className="bg-gradient-to-br from-gray-300 to-gray-700 rounded-lg p-4 transform -rotate-2 hover:rotate-0 transition-transform duration-300 shadow-lg">
                        <img src="../images/idf4.webp" alt="Coordinated Forces" className="w-full h-full object-cover rounded-lg " />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutUs