import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ title }) => {
  // Create an array of products with dummy data
  const products = [
    { category: 'shoes', name: 'Speedster Running Shoes', price: '$59.99', imageUrl: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { category: 'shoes', name: 'Galaxy Runner Sneakers', price: '$49.99', imageUrl: 'https://images.unsplash.com/photo-1654907118243-a0a62cefbf0a?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { category: 'shoes', name: 'Oceanic Trail Boots', price: '$69.99', imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI5fHxzaG9lc3xlbnwwfHx8fDE2ODk1OTM2NzU&ixlib=rb-1.2.1&q=80&w=400' },
    { category: 'shoes', name: 'Urban Explorer Sneakers', price: '$55.99', imageUrl: 'https://images.unsplash.com/photo-1509418969973-c560ee8f02a0?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { category: 'tshirt', name: 'Classic Cotton Tee', price: '$19.99', imageUrl: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { category: 'tshirt', name: 'Vintage Logo Tee', price: '$24.99', imageUrl: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { category: 'tshirt', name: 'Neptune Graphic Tee', price: '$22.99', imageUrl: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { category: 'tshirt', name: '400 Blows Graphic Tee', price: '$29.99', imageUrl: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { category: 'chair', name: 'Ergonomic Office Chair', price: '$129.99', imageUrl: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D' },
    { category: 'chair', name: 'Sleek Modern Chair', price: '$99.99', imageUrl: 'https://images.unsplash.com/photo-1612372606404-0ab33e7187ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D' },
    { category: 'chair', name: 'Contemporary Lounge Chair', price: '$149.99', imageUrl: 'https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYWlyfGVufDB8fDB8fHww' },
    { category: 'chair', name: 'Vintage Wood Chair', price: '$79.99', imageUrl: 'https://images.unsplash.com/photo-1486946255434-2466348c2166?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYWlyfGVufDB8fDB8fHww' }
  ];

  // Group products by category to display in rows
  const groupedProducts = products.reduce((acc, product) => {
    acc[product.category] = [...(acc[product.category] || []), product];
    return acc;
  }, {});

  return (
    <section className="text-gray-600 body-font" id='products'>
      <div className="container px-5 pt-24 -mt-10 mx-auto">
        <h1 className='text-4xl font-bold mb-6 text-center text-[#5098f5]'>{title}</h1>
        {Object.keys(groupedProducts).map((category, index) => (
          <div key={index} className="flex flex-wrap -m-4">
            {groupedProducts[category].map((product, i) => (
              <div key={i} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link to={`/product/${i + index*4}`} className="block relative h-48 rounded overflow-hidden">
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