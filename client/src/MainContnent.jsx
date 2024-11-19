import Banner from './layouts/Banner';
import AboutUs from './pages/AboutUs';
import Activities from './pages/Activities';
import HowItStart from './pages/WhoItStart';
import OurMission from './pages/OurMission';
import Association from './pages/Association';



function MainContent() {

    return (
        <main>
            <section id="home">
                <Banner />
            </section>
            <section id='NorthernSecurity'>
                <HowItStart />
            </section>
            <section id='ourmissoin'>
                <OurMission />
            </section>
            <section id='AboutUs'>
                <AboutUs />
            </section>
            <section id='foundation'>
                <Association />
            </section>
            <section id='activities'>
                <Activities />
            </section>
        </main>
    );
}

export default MainContent;