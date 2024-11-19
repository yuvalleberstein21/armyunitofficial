import './App.css'
import Header from './layouts/Header'
import './helpers/i18n';
import MainContent from './MainContnent';
import AccessibilityWidget from './components/AccessibilityWidget';




function App() {

  return (
    <>

      <Header />
      <MainContent />
      <AccessibilityWidget />
      <footer>
        <div className="py-3 items-center bg-accent-light" dir="rtl">
          <span className="w-full flex justify-center text-center font-semibold text-secondary">
            למען עמותת לוחמי יחידת הפרא של צבא הגנה לישראל
          </span>
        </div>
      </footer>
    </>
  )
}

export default App
