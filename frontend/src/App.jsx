import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'; 
import Home from './components/home/Home';
import Header from './components/header/Header';
function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;
