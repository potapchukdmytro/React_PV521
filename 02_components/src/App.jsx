import "./App.css";
import AuthorBiography from "./components/authorBiography/AuthorBiography";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";


const url1 = "https://static.independent.co.uk/2025/03/17/14/slack-imgs-copy.jpg?quality=75&width=1368&crop=3%3A2%2Csmart&auto=webp";
const url2 = "https://knigogo.top/wp-content/uploads/2018/08/Pola-Goukinz.png";
const url3 = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Michael_Lewis_2009.jpg/250px-Michael_Lewis_2009.jpg";

const authors = [
  {name: "Майкл Льюїс", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Michael_Lewis_2009.jpg/250px-Michael_Lewis_2009.jpg", 
    biography: `Майкл Льюїс народився у Новому Орлеані у родині корпоративного
                юрист Д. Томаса Льюїса (англ. J. Thomas Lewis) та громадської
                активістки Діани Монро Льюїс (англ. Diana Monroe Lewis).`},
  {name: "Пола Гоукінз", image: "https://static.independent.co.uk/2025/03/17/14/slack-imgs-copy.jpg?quality=75&width=1368&crop=3%3A2%2Csmart&auto=webp", biography: "британська письменниця, яка здобула широку популярність після публікації роману «Дівчина у потягу» (2015)." },
  {name: "Емма Доног'ю", image: "https://knigogo.top/wp-content/uploads/2018/08/Pola-Goukinz.png", biography: " ірландсько-канадська письменниця, драматургиня, літературознавиця та сценаристка." }
];

function App() {
    return (
        <>
            <Navbar />
            <div className="app-container">
                <AuthorBiography  name={authors[0].name} image={authors[0].image} biography={authors[0].biography} />
                <AuthorBiography  name={authors[1].name} image={authors[1].image} biography={authors[1].biography} />
                <AuthorBiography  name={authors[2].name} image={authors[2].image} biography={authors[2].biography} />
                </div>
            <Footer />
        </>
    );
}

export default App;
