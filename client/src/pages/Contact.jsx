import { useTranslation } from "react-i18next";
import ContactForm from "../components/ContactForm"
import SectionTitle from "../components/SectionTitle"


const Contact = () => {

    const { t } = useTranslation();
    return (
        <div className="container mx-auto md:p-5 p-4 mt-4 lg:pt-4 md:pt-4">
            <div className="contact_title">
                <SectionTitle title={t('contact')} />
            </div>
            <div className="py-5" dir="rtl">
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact