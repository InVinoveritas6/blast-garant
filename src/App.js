

//Components
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import AboutUs from './pages/AboutUs/AboutUs';
import Prices from './pages/Prices/Prices';
import ExamplesPage from './pages/ExamplesPage/ExamplesPage';
import ReviewsPage from './pages/ReviewsPage/ReviewsPage';
import Contacts from './pages/Contacts/Contacts';

//Style
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header/>
      <div className='body'>
        <MainPage/>
         <AboutUs/>
       {/* <Prices/>
        <ExamplesPage/>
        <ReviewsPage/>
        <Contacts/> */}
      </div>
    </div>
  );
}

export default App;
