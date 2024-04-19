import { useState } from "react";

import About from "../about/About";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Projects from "../projects/Projects";
import Promo from "../promo/Promo";

const App = () => {

    const [theme, setTheme] = useState('default');

    const toggleTheme = (e) => {
        setTheme(theme => theme === 'default' ? 'light' : 'default');
    }

    return ( 
        <div className={`theme--${theme}`}>
            <Header toggleTheme={toggleTheme} theme={theme}/>
            <main>
                <Promo theme={theme}/>
                <About theme={theme}/>
                <Projects/> 
            </main> 
            <Footer/>
        </div>      
    );
}
 
export default App;