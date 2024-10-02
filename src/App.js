import logo from './logo.svg';
import './App.css';
import AddProducts from './components/AddProducts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchProducts from './components/SearchProducts';
import ViewAllProducts from './components/ViewAllProducts';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<AddProducts/>}/>
        <Route path="/search" element={<SearchProducts/>}/>
        <Route path="/view" element={<ViewAllProducts/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
