import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Products } from './components/Products/Products';
import { Header } from './components/Header/Header';
import { Cart } from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <header>
        <Header></Header>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </main>
    </div>
  );
}

export default App;
