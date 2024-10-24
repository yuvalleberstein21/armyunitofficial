import './App.css'
import Banner from './layouts/Banner'
import Footer from './layouts/Footer'
import Header from './layouts/Header'

function App() {

  return (
    <>

      <Header />
      <main>
        <section className='min-h-[100vh]'>
          <Banner />
        </section>

        <div className='about'>
          <div className='h-[100vh]'>asjkdjskajdsaiojr</div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>

    </>
  )
}

export default App
