import React , {useState} from 'react'
import { Outlet } from 'react-router-dom'
import NotificationBar from '../notifications'; // Adjust the path as necessary
import NavBar from '../navbar'; // Adjust the path as necessary
import NavHeader from '../nav-header';
import Subscriptions from '../logobelt';
import SubscribeComponent from '../subscribe';
import Footer from '../footer';



const RootPage = () => {
  const [isNotificationVisible, setIsNotificationVisible] = useState(true);
  return (
    <div>
         <NotificationBar isVisible ={isNotificationVisible}/>
       <div className="">
       <NavBar />
       <NavHeader />
       </div>
        
        <main>
          <Outlet/>
        </main>
        
        <Subscriptions/>
       <SubscribeComponent/>
       <Footer/>
    
        
    </div>
  )
}

export default RootPage