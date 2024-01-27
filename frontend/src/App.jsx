import Home from "./pages/Home";
import Customizer from './pages/Customizer';
import Canvas from './canvas';
import CanvasModel from "./components/canvas1";
function App() {
    const loc = window.location.pathname;
    return (
        <main className='app transition-all ease-in'>
            <Home />
            {/* <Canvas loc={loc} /> */}
            <CanvasModel />
            <Customizer />
        </main>
    );
}

export default App;
