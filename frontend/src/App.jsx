import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { CanvasModel2 } from "./components/canvas1";
import Galary from "./pages/Galary";
import Home from "./pages/Home";
import ProductCard from "./pages/ProductCard";
import Products from "./pages/Products";
import CustomizerModel from './components/CustomizerModel'
import Footer from './components/Footer/Footer';
import { useSnapshot } from 'valtio';
import state from './store';
import { UserProvider } from './context/UserContext';
import SimilarProducts from './components/SimilarProducts';

function App() {
    const snap=useSnapshot(state)
    return (
        <UserProvider>
            <main className='app transition-all ease-in scroll-smooth'>

                <BrowserRouter>
                    <Routes>
                        <Route path="/" exact element={<>
                            <Home />
                            <CanvasModel2 />
                            <Galary />
                            <Products title={"Products"} />
                            <Footer />
                        </>} />
                        <Route path="/customizer" element={
                        <>
                        <CustomizerModel />
                        
                        </>} />
                        <Route path='/similar' element={<SimilarProducts snap={snap} />}/>
                        <Route path="/product/:id" element={<ProductCard />} />
                        <Route path="/:id" element={<ProductCard />} />

                    </Routes>
                </BrowserRouter>

                <footer>

                </footer>
            </main>
        </UserProvider>
    );
}

export default App;
