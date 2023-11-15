// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import SignUp from './components/SignUp';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/Footer'
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>

        <Route element={<PrivateComponent />}>
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/logout" element={<h1>logout Component </h1>} />
          <Route path="/profile" element={<h1>profile Compound </h1>} />
        </Route>

        <Route path="/signup" element={<SignUp />} />
        <Route path = "/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
      <Footer />
      
    </div>
  );
}

export default App;






// <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>