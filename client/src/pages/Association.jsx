import { useTranslation } from "react-i18next";
import { getLanguage } from "../helpers/i18n";

const Association = () => {
    const { t } = useTranslation();
    const lang = getLanguage();
    const isRtl = lang === 'he';
    return (
        <div className="relative h-[500px] lg:h-[450px] md:h-[450px] mt-0 lg:mt-14 md:mt-10 mx-auto" dir="rtl">
            {/* <!-- Background Image --> */}
            <img
                src="./images/idf10.jpg"
                alt="IDF Commando Image"
                className="object-cover w-full h-full bg-center bg-no-repeat opacity-80"
                loading="lazy"
            />

            {/* <!-- Dark Overlay with Gradient --> */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800 to-transparent opacity-85"></div>

            {/* <!-- Content Overlay --> */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-primary px-2 lg:px-8 space-y-6">
                {/* <!-- Main Heading --> */}
                <h1 className="text-3xl lg:text-4xl md:text-4xl font-semibold text-accent-light leading-relaxed drop-shadow-lg">
                    {t('pereh association')}
                </h1>

                {/* <!-- Mission Statement --> */}
                <p className={"bg-primary bg-opacity-40 p-2 md:p-6 rounded-lg shadow-lg max-w-2xl text-lg leading-relaxed drop-shadow-md"} dir={isRtl ? "rtl" : "ltr"}>
                    {t('the pereh association invites you to play a key role in realizing the unit`s vision: defending the Golan Heights`s residents against imminent terror threats. Your support ensures the unit`s independence and funds its operational and logistical needs, allowing the fighters to perform at their best in any situation. In the complex security environment of the Golan, every moment counts. Preparedness and adequate resources are critical to the unit`s success.')}
                </p>

            </div>
        </div>
    )
}

export default Association;