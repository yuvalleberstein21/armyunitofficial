import { getLanguage } from "../helpers/i18n";


const SectionTitle = ({ title }) => {
    const lang = getLanguage();
    const isLarge = lang === 'he';
    return (
        <div className="py-5 flex justify-center items-center flex-col">
            <h1 className={isLarge ? "text-4xl lg:text-4xl md:text-4xl font-bold text-accent-dark section_title" : "text-3xl lg:text-4xl md:text-4xl font-bold text-accent-dark section_title"}>
                {title}
            </h1>
            <span className="py-1 border-b-4 border-accent-light w-44"></span>
        </div>
    )
}

export default SectionTitle