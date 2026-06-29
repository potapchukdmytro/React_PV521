import Navbar from "./components/navbar/Navbar";
import { Button, ButtonGradient, ButtonText, CircleButton } from "./components/buttons/Buttons";
import "./App.css";
import Game from "./components/game/Game";

function App() {
    return (
        <>
            <Navbar />
            <div>
              {/* <Button text="Custom button" />
              <CircleButton text="+" size="100px" />
              <ButtonGradient text="Gradient button"/>
              <ButtonText>Children button text</ButtonText> */}

              <Game/>
            </div>
        </>
    );
}

export default App;
