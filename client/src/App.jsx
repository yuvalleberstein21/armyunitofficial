import './App.css'
import Header from './layouts/Header'
import './helpers/i18n';
import MainContent from './MainContnent';
import AccessibilityWidget from './components/AccessibilityWidget';
import { useTranslation } from 'react-i18next';


function App() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen">
      <div className="fixed top-4 left-4 z-50">
        <AccessibilityWidget />
      </div>
      <Header />
      <MainContent />
      <footer>
        <div className="p-5 items-center bg-accent-dark">
          <span className="w-full flex justify-center text-center font-light text-primary">
            {t("© 2024 All rights reserved. Pereh Association")}
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
