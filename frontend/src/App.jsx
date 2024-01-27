import Home from "./pages/Home";
import Canvas from './canvas';
import Galary from "./pages/Galary";
import Products from "./pages/Products";

function App() {
    return (
        <main className='app transition-all ease-in'>
            <Home />
            <Canvas />
            <Galary />
            <Products />
        </main>
    );
}

export default App;
