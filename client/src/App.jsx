import './App.css'
import CardGrid from './components/CardGrid'
import Banner from './layouts/Banner'
import Footer from './layouts/Footer'
import Header from './layouts/Header'

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
      </main >
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
