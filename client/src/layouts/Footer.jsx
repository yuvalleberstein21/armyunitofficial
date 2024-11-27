import { useTranslation } from "react-i18next";


const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer>
            <div className="p-5 items-center bg-accent-dark">
                <span className="w-full flex justify-center text-center font-light text-primary">
                    {t("© 2024 All rights reserved. Pereh Association")}
                </span>
            </div>
        </footer>
    )
}

export default Footer