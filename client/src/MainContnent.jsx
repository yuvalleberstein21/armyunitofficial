import Banner from './layouts/Banner';
import Organizations from './pages/Organizations';
import SaveHouse from './components/saveHouse';
import AboutUs from './pages/AboutUs';
import Amuta from './pages/Amuta';
import Activities from './pages/Activities';



function MainContent() {

    return (
        <main>
            <section id="home">
                <Banner />
            </section>
            <section id='NorthernSecurity'>
                <Organizations />
            </section>
            <section className="py-8" id='SaveOurHouse'>
                <SaveHouse />
            </section>
            <section className="mt-0 lg:mt-8 md:mt-0" id='AboutUs'>
                <AboutUs />
            </section>
            <section id='foundation' className='py-10'>
                <Amuta />
            </section>
            <section className='py-5' id='activities'>
                <Activities />
            </section>
        </main>
    );
}

export default MainContent;