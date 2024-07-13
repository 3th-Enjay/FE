import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaShoppingCart, FaSpinner } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../hooks/context.jsx';

const TopSellers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [notification, setNotification] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/products/', {
          params: {
            organization_id: '3e18e5e79afc4cac99ac8888a3604ad6',
            reverse_sort: false,
            page: 1,
            size: 10
          },
          headers: {
            'Apikey': '646be48f0b9c48808c9d50f57c7a011920240713004633461578',
            'Appid': 'MWI4OACDIIGXES0'
          }
        });
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('search');
    setSearchQuery(query || '');
    if (query) {
      const results = Array.isArray(products) ? products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      ) : [];
      setFilteredProducts(results);
    } else {
      setFilteredProducts(products);
    }
  }, [location.search, products]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.name} has been added to your cart`);
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/products?search=${searchQuery}`);
  };

  return (
    <div className="relative container mx-auto px-4">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <FaSpinner className="animate-spin text-4xl text-gray-800 mb-4" />
            <p className="text-lg text-gray-700">Loading, please wait...</p>
          </div>
        </div>
      ) : (
        <>
          <div className="text-left mt-4">
            <span
              className="text-gray-500 cursor-pointer hover:text-gray-700"
              onClick={() => navigate('/')}
            >
              Home
            </span>
            {' > '}
            <span className="text-gray-700">Products</span>
          </div>
          <h1 className="text-4xl font-bold text-center my-8">Featured Products</h1>
          <form onSubmit={handleSearch} className="mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 mr-2"
            />
            <button
              type="submit"
              className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Search
            </button>
          </form>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="max-w-sm rounded overflow-hidden m-2 relative cursor-pointer"
                style={{ height: '500px' }}
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  style={{ height: '250px' }}
                  className="w-full h-full object-cover"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{product.name}</div>
                  <p className="text-gray-700 text-base">{product.price}</p>
                </div>
                <div className="flex space-between gap-2 px-6">
                  {product.colors.map((color, i) => (
                    <span
                      key={i}
                      className={`inline-block align-middle select-none transition duration-150 ease-in-out rounded-full w-6 h-6 mb-1 cursor-pointer hover:border-black border-2`}
                      style={{ backgroundColor: color, borderColor: 'transparent' }}
                    ></span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => navigate('/cart')}
              className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              View Cart
            </button>
          </div>
          {selectedProduct && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white rounded-lg overflow-hidden max-w-lg w-full p-4 relative">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                >
                  &times;
                </button>
                <div className="text-center">
                  <img
                    src={selectedProduct.imageUrl}
                    alt={selectedProduct.name}
                    className="mx-auto my-4 w-full h-64 object-cover"
                  />
                  <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
                  <p className="text-gray-700 mb-4">{selectedProduct.price}</p>
                  <div className="flex justify-center gap-2 mb-4">
                    {selectedProduct.colors.map((color, i) => (
                      <span
                        key={i}
                        className={`inline-block align-middle select-none transition duration-150 ease-in-out rounded-full w-6 h-6 mb-1 cursor-pointer hover:border-black border-2`}
                        style={{ backgroundColor: color, borderColor: 'transparent' }}
                      ></span>
                    ))}
                  </div>
                  <button
                    onClick={() => handleAddToCart(selectedProduct)}
                    className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800 flex items-center justify-center mx-auto"
                  >
                    <FaShoppingCart className="mr-2" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          )}
          {notification && (
            <div className="fixed bottom-4 left-4 bg-gray-800 text-white px-4 py-2 rounded shadow-md">
              {notification}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TopSellers;
