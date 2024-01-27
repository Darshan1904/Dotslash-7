import Home from "./pages/Home";
import Customizer from './pages/Customizer';
import Canvas from './canvas';
import CanvasModel from "./components/canvas1";
import Galary from "./pages/Galary";
import Products from "./pages/Products";

function App() {
    const loc = window.location.pathname;
    return (
        <main className='app transition-all ease-in'>
            <Home />
            {/* <Canvas loc={loc} /> */}
            <CanvasModel />
            <Customizer />
            <Galary />
            <Products />
        </main>
    );
}

export default App;
