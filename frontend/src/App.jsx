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
                        <Route path='/similar' element={<>
                        <div className='h-screen bg-gray-300'>
                        <h1 className='text-4xl font-bold mb-6 text-center text-[#5098f5]'>People also Viewed</h1>
                        <div className='grid grid-cols-4 gap-2'>
                            {
                                
                                snap?.recommendations?.map(el=><div className="lg:w-1/2 md:w-1/2 p-4 w-full">
                                <div className="block relative h-48 rounded-md overflow-hidden hover:scale-110 transition duration-300">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={'data:image/png;base64,'+el.content} />
                                </div>

                            </div>)
                            }
                        </div>
                        </div>
                        
                        </>}/>
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
