import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  // Create an array of products with dummy data
  const products = [
    { category: 'Shoes', name: 'The Catalyzer', price: '$16.00', imageUrl: 'https://source.unsplash.com/420x260/?shoes' },
    { category: 'Shoes', name: 'Shooting Stars', price: '$21.15', imageUrl: 'https://source.unsplash.com/421x261/?shoes' },
    { category: 'Shoes', name: 'Neptune', price: '$12.00', imageUrl: 'https://source.unsplash.com/422x262/?shoes' },
    { category: 'Shoes', name: 'The 400 Blows', price: '$18.40', imageUrl: 'https://source.unsplash.com/423x263/?shoes' },
    { category: 'T-Shirts', name: 'The Catalyzer', price: '$16.00', imageUrl: 'https://source.unsplash.com/424x264/?t-shirt' },
    { category: 'T-Shirts', name: 'Shooting Stars', price: '$21.15', imageUrl: 'https://source.unsplash.com/425x265/?t-shirt' },
    { category: 'T-Shirts', name: 'Neptune', price: '$12.00', imageUrl: 'https://source.unsplash.com/427x267/?t-shirt' },
    { category: 'T-Shirts', name: 'The 400 Blows', price: '$18.40', imageUrl: 'https://source.unsplash.com/428x268/?t-shirt' },
    { category: 'Chairs', name: 'The Catalyzer', price: '$16.00', imageUrl: 'https://source.unsplash.com/429x269/?chair' },
    { category: 'Chairs', name: 'Shooting Stars', price: '$21.15', imageUrl: 'https://source.unsplash.com/430x270/?chair' },
    { category: 'Chairs', name: 'Neptune', price: '$12.00', imageUrl: 'https://source.unsplash.com/431x271/?chair' },
    { category: 'Chairs', name: 'The 400 Blows', price: '$18.40', imageUrl: 'https://source.unsplash.com/432x272/?chair' },
  ];

  // Group products by category to display in rows
  const groupedProducts = products.reduce((acc, product) => {
    acc[product.category] = [...(acc[product.category] || []), product];
    return acc;
  }, {});

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {Object.keys(groupedProducts).map((category, index) => (
          <div key={index} className="flex flex-wrap -m-4">
            {groupedProducts[category].map((product, i) => (
              <div key={i} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link to={`/product/${i + 1}`} className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.imageUrl} />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                  <p className="mt-1">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;