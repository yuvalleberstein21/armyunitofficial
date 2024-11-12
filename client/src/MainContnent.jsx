import Banner from './layouts/Banner';
import Organizations from './pages/Organizations';
import SaveHouse from './components/saveHouse';
import AboutUs from './pages/AboutUs';
import Amuta from './pages/Amuta';
import Activities from './pages/Activities';

function MainContent() {
    return (
        <main>
            <section>
                <Banner />
            </section>
            <section>
                <Organizations />
            </section>
            <div className="py-5">
                <SaveHouse />
            </div>
            <div className="py-5">
                <AboutUs />
            </div>
            <Amuta />
            <div>
                <Activities />
            </div>
        </main>
    );
}

export default MainContent;