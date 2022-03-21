import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/Shared/AboutUs/AboutUs';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './Pages/Context/AuthProvider';
import Register from './Pages/Login/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Booking from './Pages/Dashboard/Booking/Booking';
import BookingList from './Pages/Dashboard/BookingList/BookingList';
import Review from './Pages/Dashboard/Review/Review';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddService from './Pages/Dashboard/AddService/AddService';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import OrderList from './Pages/Dashboard/OrderList/OrderList';
import InteriorDesign from './Pages/Dashboard/InteriorDesgin/InteriorDesign';
import Payment from './Pages/Dashboard/Payment/Payment';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/about' element={<AboutUs></AboutUs>}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/dashboard' element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
              <Route path='booking' element={<Booking></Booking>}></Route>
              <Route path='bookinglist' element={<BookingList />}></Route>
              <Route path='addservice' element={<AddService />}></Route>
              <Route path='makeadmin' element={<MakeAdmin />}></Route>
              <Route path='orderlist' element={<OrderList />}></Route>
              <Route path='review' element={<Review />}></Route>
              <Route path='payment/:paymentId' element={<Payment />}></Route>
              <Route path='interiordesign' element={<InteriorDesign />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
