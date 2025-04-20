import './App.css';  // Import CSS file
import Home from './pages/Home'; // Example of Home page
import Books from './pages/Books'; // Example of Books list page
import AddBook from './pages/AddBook'; // Example of Add Book page
import Login from './pages/Login';

import {
  BrowserRouter, 
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/add" element={<AddBook />} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;  // Exporting App as default



