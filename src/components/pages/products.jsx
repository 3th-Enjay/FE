import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaShoppingCart, FaSpinner } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/context.jsx';

const TopSellers = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedItem, setSelectedItem] = useState(null);
  const [notification, setNotification] = useState('');
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Fetch items from the API
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://timbu-get-all-products.reavdev.workers.dev/?organization_id=3e18e5e79afc4cac99ac8888a3604ad6&reverse_sort=false&Appid=MWI4OACDIIGXES0&Apikey=646be48f0b9c48808c9d50f57c7a011920240713004633461578&page=1&size=30', {
          params: {
            page: currentPage,
            size: itemsPerPage,
          },
        });

        console.log('API Response:', response.data);
        setItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching items:', error);
        setLoading(false);
      }
    };

    fetchItems();
  }, [currentPage]);

  // Handle item click to show modal
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  // Handle add to cart and show notification
  const handleAddToCart = (item) => {
    addToCart(item);
    setNotification(`${item.name} has been added to your cart`);
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  // Handle page change for pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate total pages for pagination
  const totalPages = Math.ceil(items.length / itemsPerPage);

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
            <span className="text-gray-700">Items</span>
          </div>
          <h1 className="text-4xl font-bold text-center my-8">Featured Items</h1>
          <div className="flex flex-wrap justify-center gap-4">
            {Array.isArray(items) && items.map((item) => (
              <div
                key={item}  
                className="w-full md:w-1/2 lg:w-1/3 max-w-sm rounded overflow-hidden m-2 relative cursor-pointer"
                style={{ height: '500px' }}
                onClick={() => handleItemClick(item)}
              >
                <img
                  src={` https://timbu-get-all-products.reavdev.workers.dev/?organization_id=3e18e5e79afc4cac99ac8888a3604ad6&reverse_sort=false&Appid=MWI4OACDIIGXES0&Apikey=646be48f0b9c48808c9d50f57c7a011920240713004633461578&page=1&size=30'${items.photos[0].url}`}
                  alt={item.name}
                  style={{ height: '250px' }}
                  className="w-full h-full object-cover"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.name}</div>
                  <p className="text-gray-700 text-base">{item.description}</p>
                  <p className="text-gray-700 text-base">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center mt-4">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`mx-2 px-4 py-2 rounded ${currentPage === i + 1 ? 'bg-gray-900 text-white' : 'bg-gray-300 text-black'} hover:bg-gray-800 hover:text-white`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={() => navigate('/cart')}
              className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              View Cart
            </button>
          </div>
          {selectedItem && (
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
                    src={` https://timbu-get-all-products.reavdev.workers.dev/?organization_id=3e18e5e79afc4cac99ac8888a3604ad6&reverse_sort=false&Appid=MWI4OACDIIGXES0&Apikey=646be48f0b9c48808c9d50f57c7a011920240713004633461578&page=1&size=30'${selectedItem.photos[0].url}`}
                    alt={selectedItem.name}
                    className="mx-auto my-4 w-full h-64 object-cover"
                  />
                  <h2 className="text-2xl font-bold mb-2">{selectedItem.name}</h2>
                  <p className="text-gray-700 mb-4">{selectedItem.description}</p>
                  <p className="text-gray-700 mb-4">{selectedItem.price}</p>
                  <button
                    onClick={() => handleAddToCart(selectedItem)}
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
