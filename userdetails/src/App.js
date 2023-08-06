import logo from './logo.svg';
import './App.css';
import { UserList } from './pages/UserList';
import { UserDetails } from './pages/UserDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
     
      <Router>
        <div>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/userdetails" element={<UserDetails />} />
      </Routes>
      </div>
      </Router>
  );
}

export default App;
