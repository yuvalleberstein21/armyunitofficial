import './App.css'
import ImageBanner from './components/ImageBanner'
import Banner from './layouts/Banner'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Activities from './pages/Activities'
import Contact from './pages/Contact'
import Organizations from './pages/Organizations'
import './helpers/i18n';

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
          <ImageBanner />
        </div>
        <div>
          <Activities />
        </div>
      </main >
      <footer>
        <Footer />
        <Contact />
        <div className="h-20 items-center" dir='rtl'>
          <span className="w-full flex justify-center items-center font-semibold text-secondary py-2">למען עמותת לוחמי הקומנדו של צבא הגנה לישראל 💚</span>
        </div>
      </footer>
    </>
  )
}

export default App
