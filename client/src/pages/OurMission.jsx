import { useTranslation } from 'react-i18next';
import { getLanguage } from '../helpers/i18n';
import SectionTitle from '../components/SectionTitle';


const OurMission = () => {
    const { t } = useTranslation();
    const lang = getLanguage();
    const isRtl = lang === 'he';


    return (
        <div
            className={`container mx-auto w-full h-full relative py-6 lg:px-8`}
            dir={isRtl ? 'ltr' : 'rtl'}
        >
            {/* <!-- Title Section --> */}

            <div className='items-center flex justify-center text-center'>
                <SectionTitle title={t('taking charge of our home')} />
            </div>

            {/* <!-- Slanted Grid Section --> */}
            <div className="relative mt-5 bg-transparent lg:bg-primary md:bg-primary rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 -skew-y-3 lg:-skew-y-6 transform origin-top-left"></div>
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 lg:p-12">
                    {/* <!-- Image Column (Left) --> */}
                    <div className="flex justify-center items-center">
                        <img
                            src='/images/north-image.jpg'
                            alt="Descriptive Alt Text"
                            className="w-full h-48 lg:h-80 max-w-sm lg:max-w-md shadow-lg rounded-lg border-4 border-primary"
                        />
                    </div>
                    <div className="font-normal leading-relaxed break-words whitespace-normal" dir={isRtl ? 'rtl' : 'ltr'}>
                        <h2 className="text-2xl font-semibold mb-4 text-accent-light h2">{t("local force defending our homes and families")}</h2>
                        <p className="text-lg text-gray-700">{t('the pereh unit is a reserve unit composed of local fighters from the Golan, driven by the principle of defending their homes. The unit is built on the premise of locally based warriors with extraordinary commitment and capabilities.')}</p>
                        <p className="text-lg py-3 text-gray-700">{t('the unit was established to serve as a high-quality, rapid-response force capable of forming an effective barrier between the enemy and the Golan communities. Its goal is to protect the residents from imminent and growing terrorist threats in the region.')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurMission;