import React from "react";
import Blog from "./components/Blog";
import Posts from "./components/Posts";
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/" className="navlinks">Home</Link>
          <Link to="/blog" className="navlinks">Add Blog</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
