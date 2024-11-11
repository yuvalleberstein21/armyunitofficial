import './App.css'
import Banner from './layouts/Banner'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Activities from './pages/Activities'
import Organizations from './pages/Organizations'
import './helpers/i18n';
import SaveHouse from './components/saveHouse'
import AboutUs from './pages/AboutUs'
import Amuta from './pages/Amuta'

function App() {

  return (
    <>
      <Header />
      <main>
        <section>
          <Banner />
        </section>
        <section>
          <Organizations />
        </section>
        <div className='py-5'>
          <SaveHouse />
        </div>
        <div className='py-5'>
          <AboutUs />
        </div>
        <Amuta />
        <div>
          <Activities />
        </div>
      </main>
      <footer>
        {/* <Footer /> */}
        <div className="p-5 items-center bg-accent-light" dir='rtl'>
          <span className="w-full flex justify-center items-center font-semibold text-secondary py-2">למען עמותת לוחמי יחידת הפרא של צבא הגנה לישראל 💚</span>
        </div>
      </footer>
    </>
  )
}

export default App
