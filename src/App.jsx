// src/App.js
import React , {useState} from 'react';
import NotificationBar from './components/notifications'; // Adjust the path as necessary
import NavBar from './components/navbar'; // Adjust the path as necessary
import NavHeader from './components/nav-header';
import Hero from './components/hero';
import Trending from './components/trending';
import TopSellers from './components/top-sellers';
import CustomersReview from './components/customers-review';
import Subscriptions from './components/logobelt';
import SubscribeComponent from './components/subscribe';
import Footer from './components/footer';

function App() {
  const [isNotificationVisible, setIsNotificationVisible] = useState(true);
  return (
    <div className="flex flex-col min-h-screen">
      
        <NotificationBar isVisible ={isNotificationVisible}/>
        <div className="">
        <NavBar />
        <NavHeader />
        </div>
        <Hero />
        <Trending/>
        <TopSellers/>
        <CustomersReview/>
        <Subscriptions/>
        <SubscribeComponent/>
        <Footer/>
    </div>
  );
}

export default App;
