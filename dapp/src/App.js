import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../src/pages/Home.js"

function App() {

  return (
    <div>
    
         <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
     
    </div>
  );
}

export default App;
