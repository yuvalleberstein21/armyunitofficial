import './App.css'
import Header from './layouts/Header'
import './helpers/i18n';
import MainContent from './MainContnent';
import AccessibilityWidget from './components/AccessibilityWidget';
import FloatingContactButton from './components/FloatingContactButton';


function App() {


  return (
    <div className="min-h-screen app">
      <div className="fixed top-4 left-4 z-50">
        <AccessibilityWidget />
        <FloatingContactButton />
      </div>
      <Header />
      <MainContent />
    </div>
  )
}

export default App
