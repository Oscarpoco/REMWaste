// IMPORTING STYLING
import './SkipsWrapper.css';

// COMPONENTS
import Desktop from '../navigation/DesktopNavigation';
import Mobile from '../navigation/MobileNavigation';
import Card from '../cards/Cards';

function SkipScreen(props) {
    return (
        <div className='Parent'>

            {/* DESKTOP NAVIGATION */}
            <nav className='Top-nav'>
                <Desktop />
            </nav>

            {/* MAIN CONTENT */}
            <main className='Top-nav'>
                <Card />
            </main>

            {/* MOBILE NAVIGATION */}
            <nav className='Bottom-nav'>
                <Mobile />
            </nav>

        </div>
    )
}

// MAKING MY FUNCTION AVAILABLE FOR IMPORTS
export default SkipScreen;