import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import MainHeader from './component/mainheader/MainHeader';
import Summary from './component/summary/Summary';
import Services from './component/services/Services';
import BookingSummary from './component/bookingsummary/BookingSummary';
import City from './component/summary/City';
import Progress from './component/progress/Progress';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header2 from './component/header2/Header2';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<><Header/><MainHeader/><Summary/><Services/></>}/>
    <Route path='/second' element={<><Header2/><MainHeader/><Summary/><Services/></>}/>
  
      {/* <Header/>
      <MainHeader/>
      <Summary/>
   
      <Services/>
      <BookingSummary/>
      <City/> 
      <Progress/>*/}
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
