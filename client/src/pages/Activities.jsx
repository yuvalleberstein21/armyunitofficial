import { useTranslation } from "react-i18next";
import CardGrid from "../components/CardGrid";
import SectionTitle from "../components/SectionTitle";
import { getLanguage } from "../helpers/i18n";



const cardData = [
    {
        title: 'fostering community ties',
        description: "creating programs for dialogue and unity with Golan residents to build meaningful relationships and strengthen cooperation through shared events and social activities."
    },
    {
        title: "establishing Specialized Training Facilities",
        description: "investing in state-of-the-art training facilities tailored to the unique needs of the unit to enhance the fighters’ capabilities and ensure optimal preparation for every scenario."
    },
    {
        title: "recruiting Additional Fighters",
        description: "recruiting new members to bolster the unit's strength and align its manpower with current threats, ensuring rapid and effective response capabilities."
    },
    {
        title: "procuring Essential Equipment",
        description: "acquiring additional equipment not covered by standard military supplies to equip the fighters with the best tools and technologies."
    },
    {
        title: "supporting Unit Members and Their Families",
        description: "providing mental and financial support to the unit’s soldiers and their families during critical times, ensuring they receive the necessary assistance, including emotional, economic, and logistical support."
    },
    {
        title: "advancing the Concept of the 'Local Fighter'",
        description: "strengthening the concept of the 'local fighter' as a key element in addressing threats in the Golan area specifically, and in Israel as a whole, through training and education that emphasize the advantage of fighters who are familiar with the terrain, the residents, and the unique challenges of each area in which they operate."
    },

];
const Activities = () => {
    const { t } = useTranslation();
    const lang = getLanguage();
    const isRtl = lang === 'he';

    return (
        <div className="container mx-auto md:p-5 p-4 mt-4 lg:pt-16 md:pt-8">
            <div className="activities_title">
                <SectionTitle title={t('association activities')} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 py-5 gap-6 lg:p-8">
                {cardData.map((card, index) => (
                    <CardGrid
                        key={index}
                        image={card.image}
                        title={t(card.title)}
                        description={t(card.description)}
                        isRtl={isRtl}
                    />
                ))}
            </div>
        </div>
    )
}

export default Activities