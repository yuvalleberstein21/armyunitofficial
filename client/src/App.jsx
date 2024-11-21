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
      {/* Accessibility Widget - Positioned Absolutely */}
      <div className="fixed top-4 left-4 z-50">
        <AccessibilityWidget />
      </div>

      <Header />
      <MainContent />

      <footer>
        <div className="py-3 items-center bg-accent-light" dir="rtl">
          <span className="w-full flex justify-center text-center font-semibold text-secondary">
            {t(`supporting the Golan's first line defense - Pereh elite unit`)}
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
