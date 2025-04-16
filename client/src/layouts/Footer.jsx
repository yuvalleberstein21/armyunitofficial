import { useTranslation } from "react-i18next";



const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer>
            <div className="p-5 flex flex-col items-center bg-accent-dark text-primary text-center font-light">
                <span>{t("© 2025 All rights reserved. Pereh Association")}</span>
                <a href="https://www.yuvalleberstein.dev" className="text-blue-500">Made with ❤️ by Yuval Leberstein</a>
            </div>
        </footer>
    )
}

export default Footer