import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

// import для export default
// можна дати будь яку назву після слова import
import calculator from "./components/exports/calculator";

// import для export
// потрібно чітко вказувати назви екпортованих елементів
import { add, div } from "./components/exports/calculator";

// import всього із файлу
import * as calcFunctions from "./components/exports/calculator";

// import css
import "./App.css";

// import статичних файлів. Наприклад: зображення
// так само як і для export default
import image from "./images/expimp.avif";

function App() {
    // console.log(calculator(6, 12, "*"));
    // console.log(add(1,2));
    
    // console.log(calcFunctions.sub(100, 50));
    // console.log(image);
    

    return (
        <>
            <Navbar />
            <div className="app-container">
                {/* <img src={image}/> */}
            </div>
            <Footer />
        </>
    );
}

export default App;