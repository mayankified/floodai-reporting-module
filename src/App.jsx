// App.js
import React, { useEffect } from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import './styles/styles.css';
import './styles/global.css'

import Home from './pages/home';
import TrainFlood from './pages/trainflood';
import Header from './components/Header';
// import HeaderMobile from './components/HeaderMobile';
import NotFound from './pages/404notfound';
import { useNavigate } from 'react-router-dom';

function App() {
  const [warningpopup, setWarningPopup] = React.useState(true);

  useEffect(() => {
    localStorage.setItem('selectedTab', 1);
  }, []);



  return (
    <div className="h-screen w-screen bg-gray-300 overflow-x-hidden">
      
        <BrowserRouter>
          <Header />
          {warningpopup && <span className="absolute w-1/2 right-2 bottom-6 z-20"><WarningPopup /></span>}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/warning" element={<Home warningtab={3} />} />
            <Route path="/train" element={<TrainFlood />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;


const WarningPopup = () => {
  const Navigate = useNavigate();
  const handleclick = () => {
    localStorage.setItem('selectedTab', 3);
    Navigate('/warning');
    window.location.reload();
  };
  
  return (
    <div className="fixed top-16 right-0 w-1/6 mt-6 mr-7 z-50">
      <div className='flex flex-col text-center'>
        <button className="zigzag-button alert-button" onClick={handleclick}>
          Report Flood in your Area!
        </button>
      </div>
    </div>
  );
};

