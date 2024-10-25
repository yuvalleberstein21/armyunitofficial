import './App.css'
import CardGrid from './components/CardGrid'
import ImageBanner from './components/ImageBanner'
import Banner from './layouts/Banner'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Header />
      <main>
        <section>
          <Banner />
        </section>
        <section>
          <CardGrid />
        </section>
        <div className='py-5'>
          <ImageBanner />
        </div>
        <div>
          <CardGrid />
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
