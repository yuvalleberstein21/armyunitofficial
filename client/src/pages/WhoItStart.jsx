import { useTranslation } from 'react-i18next';
import { getLanguage } from '../helpers/i18n';
import SectionTitle from '../components/SectionTitle';
import VideoCard from '../components/VideoCard';


const HowItStart = () => {
    const { t } = useTranslation();
    const lang = getLanguage();
    const isRtl = lang === 'he';
    return (
        <div className="container mx-auto p-4 py-5 lg:pt-16 organization" dir={isRtl ? 'rtl' : 'ltr'}>

            <div className='organization_title items-center flex justify-center text-center'>
                <SectionTitle title={t("the Golan's first line of defence")} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:p-8 md:p-4 items-center">

                {/* Text and Logo Column */}
                <div className="space-y-3">
                    <div className="flex justify-center lg:justify-start md:justify-start items-center hidden md:block lg:block">
                        <img src='/images/logo-nobg.png' alt="Logo" className="w-1/2 h-32 opacity-90" />
                    </div>
                    <p className="text-accent-dark text-lg font-light leading-relaxed px-1 py-1 lg:pl-12 lg:pr-6 break-words">
                        {t('waking up on that day, everything we knew shattered instantly. The sense of security we used to have vanished. The security situation in Northern Israel is reminding us that what happened in the south could happen here too, putting the residents of the Golan Heights at significant risk.')}
                    </p>
                    <p className="text-accent-dark text-lg font-light mt-0 lg:mt-4 md:mt-4 px-1 lg:pl-12 lg:pr-6 break-words">
                        {t('we cannot wait until that reality strikes again! With your support, we can provide the unit’s fighters with everything necessary to protect their homes and families, preparing them for any possible scenario.')}
                    </p>
                </div>

                {/* Video Column */}
                <div className="relative lg:h-full md:min-h-full h-80 w-full rounded-lg overflow-hidden">
                    {/* <iframe
                        className="min-w-full h-full object-cover rounded-lg"
                        src="https://www.youtube.com/embed/Ax4-63bbkvc?autoplay=1&loop=1&playlist=Ax4-63bbkvc&mute=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                    ></iframe> */}
                    <VideoCard />
                </div>
            </div>
        </div>
    )
}

export default HowItStart