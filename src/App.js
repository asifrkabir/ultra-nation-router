import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home></Home>} />
      <Route path="/country/:countryId" element={<CountryDetails></CountryDetails>} />
      <Route exact path="/" element={<Home></Home>} />
      <Route path="*" element={<NotFound></NotFound>} />
    </Routes>
  );
}

export default App;
