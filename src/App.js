import Navbar from "./components/Navbar";
import NewsClassComponent from './components/NewsClassComponent'
import AboutUs from './components/About'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState } from "react";
import SearchComponent from "./components/SearchComponent";


function App() {
  const pageSize = 10
  const [path , setPath] =useState()
  function getPath(str){
    setPath(str)
  }
  return (
    <div>
      <Router>
        <Navbar getPath={getPath}/>
          <Routes>
            <Route exact path="/" element={<NewsClassComponent key="" category='general' pageSize={pageSize}/>} />
            <Route exact path="/general" element={<NewsClassComponent key="general" category='general' pageSize={pageSize}/>}/>
            <Route exact path="/technology" element={<NewsClassComponent key="technology"  category='technology' pageSize={pageSize}/>}/>
            <Route exact path="/sports" element={<NewsClassComponent key="sports" category='sports' pageSize={pageSize}/>}/>
            <Route exact path="/science" element={<NewsClassComponent  key="science" category='science' pageSize={pageSize}/>}/>
            <Route exact path="/health" element={<NewsClassComponent  key="health" category='health' pageSize={pageSize}/>}/>
            <Route exact path="/business" element={<NewsClassComponent  key="business" category='business' pageSize={pageSize}/>}/>
            <Route exact path="/entertainment" element={<NewsClassComponent key="entertainment"  category='entertainment' pageSize={pageSize}/>}/>
            <Route exact path={`/${path}`} element={<SearchComponent searchStr={path} key={path} pageSize={pageSize}/>}/>
            <Route exact path="/about" key="key" element={<AboutUs/>}/>
          </Routes>
      </Router>


    </div>
  );
}

export default App;
