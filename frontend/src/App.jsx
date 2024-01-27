import Home from "./pages/Home";
import Customizer from './pages/Customizer';
import Canvas from './canvas';
import CanvasModel from "./components/canvas1";
import Galary from "./pages/Galary";
import Products from "./pages/Products";
import ProductCard from "./pages/ProductCard";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    const loc = window.location.pathname;
    return (
        <main className='app transition-all ease-in'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<>
                        <Home />
                        <Galary />
                        <Products />
                    </>} />
                    <Route path="/customizer" element={<>
                        <CanvasModel />
                        <Customizer />    
                    </>} />
                    <Route path="/product-card/:id" element={<ProductCard />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;
