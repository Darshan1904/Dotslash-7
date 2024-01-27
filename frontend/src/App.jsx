import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CanvasModel2 } from "./components/canvas1";
import Galary from "./pages/Galary";
import Home from "./pages/Home";
import ProductCard from "./pages/ProductCard";
import Products from "./pages/Products";
import CustomizerModel from './components/CustomizerModel'
function App() {

    return (
        <main className='app transition-all ease-in'>

            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<>
                        <Home />
                        <CanvasModel2 />
                        <Galary />
                        <Products />
                    </>} />
                    <Route path="/customizer" element={<CustomizerModel />} />
                    <Route path="/product/:id" element={<ProductCard />} />
                    <Route path="//:id" element={<ProductCard />} />

                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;
