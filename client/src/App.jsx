import './App.css'
import Header from './layouts/Header'
import './helpers/i18n';
import MainContent from './MainContnent';
import AccessibilityWidget from './components/AccessibilityWidget';




function App() {

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
            למען עמותת לוחמי יחידת הפרא של צבא הגנה לישראל
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
