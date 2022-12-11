import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';

function App() {
  return (
    <Router>
        <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">

      <Routes>
        <Route exact path="/" element={<BookList/>}/>
        <Route exact path="/add" element={<AddBook/>}/>
        <Route exact path="/edit/:id" element={<EditBook/>}/>
    
      </Routes>
   
        </div>
      </div>
    </div>
   
  </Router>
    // 
  
  );
   
}

export default App;
