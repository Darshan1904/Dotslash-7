import React from 'react';
import { Link } from 'react-router-dom';

// ProductCard Component
const ProductCard = ({ image, name, price, category }) => {
    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="flex-col justify-center items-center text-center rounded bg-white">
                <Link to="#" className="block relative h-48 rounded overflow-hidden">
                    <img 
                        alt="ecommerce" 
                        className="object-cover object-center w-full h-full block mx-auto" 
                        src={image} 
                        style={{ width: '228px', height: '228px' }}
                    />
                </Link>
                <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
                    <p className="mt-1">{price}</p>
                </div>
            </div>
        </div>
    );
};

// SimilarProducts Component (Main)
const SimilarProducts = ({ snap }) => {
    // Example product categories based on image URL patterns
    const determineCategory = (imageUrl) => {
        if (imageUrl.includes('shoes')) return 'shoes';
        if (imageUrl.includes('tshirt')) return 'tshirt';
        if (imageUrl.includes('chair')) return 'chair';
        return 'others';
    };

    return (
        <section className="text-gray-600 body-font h-max bg-gray-100" id='products'>
            <div className="container px-5 pt-24 -mt-10 mx-auto">
                <h1 className='text-4xl font-bold mb-6 text-center text-[#5098f5]'>People also Viewed</h1>
                <div className="flex flex-wrap -m-4">
                    {
                        snap?.recommendations?.map((el, index) => (
                            <ProductCard 
                                key={index} 
                                image={'data:image/png;base64,' + el.content} 
                                name="Product Name" 
                                price="$99.99" 
                                category={determineCategory(el.content)}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default SimilarProducts;
